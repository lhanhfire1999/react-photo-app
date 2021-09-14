import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import NotFound from "./components/NotFound";
import Header from "./components/Header"
import './App.scss'
import productApi from "api/productApi";

// Lazy load - Code splitting
const Photo = React.lazy(() => import('./features/Photo'));

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        };
        const response = await productApi.getAll(params);
        console.log(response);
        setProductList(response.data);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    }
    fetchProductList();
  },[] );

  console.log({productList});
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading......</div>}>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Redirect exact from='/' to='photo'/>
            <Route path='/photo' component={Photo}/>

            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
