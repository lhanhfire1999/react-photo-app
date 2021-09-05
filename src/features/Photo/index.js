import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router';
import MainPage from '../../components/Header';
import AddEditPage from './pages/AddEdit';
import NotFound from '../../components/NotFound';

Photo.propTypes = {
  
};

function Photo(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={match.url} component={MainPage}/>
        <Route path={`${match.url}/add`} component={AddEditPage}/>
        <Route path={`${match.url}/:photoId`} component={AddEditPage}/>

        <Route component={NotFound}/>

      </Switch>
    </div>
  );
}

export default Photo;