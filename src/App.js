import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import NotFound from "./components/NotFound";
import Header from "./components/Header"
import './App.scss'

// Lazy load - Code splitting

const Photo = React.lazy(() => import('./features/Photo'));


function App() {
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
