import productApi from "api/productApi";
import SignIn from "features/Auth/pages/SignIn";
import firebase from 'firebase';
import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Button } from "reactstrap";
import './App.scss';
import Header from "./components/Header";
import NotFound from "./components/NotFound";

// Lazy load - Code splitting
const Photo = React.lazy(() => import('./features/Photo'));

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
};
firebase.initializeApp(config);

function App() {
  const [productList, setProductList] = useState([]);
  const [increase, setIncrease] = useState(0);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        };
        const response = await productApi.getAll(params);
        // console.log(response);
        setProductList(response.data);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    }
    fetchProductList();
  },[] );
  
  useEffect(() => {
    const unSubscribe = firebase.auth().onAuthStateChanged(async (user) => {
      console.log('Component did mount');
      if(!user){
        console.log('User not logged in')
        return;
      }
      console.log('Logged in with userName: ', user.displayName);
      
      const token = await user.getIdToken();

      console.log('Logged in user token: ', token);
      
      const setjson = JSON.stringify(user.providerData);
      localStorage.setItem('firebaseui::rememberedAccounts', setjson);
    });
    return () =>{
      unSubscribe()
    }; 
  }, []);

  // console.log({productList});
  const handleOnClick = () => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        };
        const response = await productApi.getAll(params);
        console.log(response);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    }
    fetchProductList();

  }
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading......</div>}>
        <BrowserRouter>
          <Header/>
          <Button onClick={handleOnClick}>Fetch data</Button>
          <Switch>
            <Redirect exact from='/' to='photo'/>
            <Route path='/photo' component={Photo}/>
            <Route path='/sign-in' component={SignIn}/>
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
