import axios from 'axios';
import firebase from 'firebase';
import queryString from 'query-string';

const getFirebaseToken = () => {
  const currentUser = firebase.auth().currentUser;
  
  if(currentUser) return currentUser.getIdToken();

  // Not logged in
  const hasMemberAccount = localStorage.getItem('firebaseui::rememberedAccounts');
  if(!hasMemberAccount) return null;

  //  Waiting to get Token from Firebase
  return new Promise((resolve, reject) => {
    const unSubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      const waitTime = setTimeout(()=> {
        console.log('Wait time over');
        reject(null);
      }, 10000)
      
      if(!user){
        reject(null)
      }
      const token = await user.getIdToken();
      resolve(token);
      unSubscribe();
      clearTimeout(waitTime);
    })
  })
}

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...

  /* Bug race condition
  const currentUser = firebase.auth().currentUser;
  if(currentUser){
    const token = await currentUser.getIdToken();
    config.headers.Authorization = `Bearer ${token}`;
  }
  */

  const token = await getFirebaseToken();
  config.headers.Authorization = `Bearer ${token}`;

  return config;
});

axiosClient.interceptors.response.use((response) => {
  if (response && response.data) {
    return response.data;
  }

  return response;
}, (error) => {
  // Handle errors
  throw error;
});

export default axiosClient;