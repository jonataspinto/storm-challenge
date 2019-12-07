import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './screens/Home'

const Router = ()=> {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path='/' component={Home}/>
        </Switch>
    </BrowserRouter>
    )
}

export default Router
