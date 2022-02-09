import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import HeaderComponent from './components/HeaderComponent';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';
import ListUserPage from './pages/ListUserPage';
import UserRegistrationPage from './pages/UserRegistrationPage';
import ViewUserPage from './pages/ViewUserPage';
import ListDeletedUsers from './pages/ListDeletedUsers';

function App() {

  return (
    <div>
      <BrowserRouter>
          <HeaderComponent />
            <switch>
            <Route path = "/" exact component = {HomePage}></Route>
            <Route path = "/login" component = {LoginPage}></Route>
            <Route path = "/dashboard" component = {Dashboard}></Route>  
            <Route path = "/users" exact component = {ListUserPage}></Route>
            <Route path = "/add-users" component = {UserRegistrationPage}></Route>
            <Route path = "/edit-user/:id" component = {UserRegistrationPage}></Route>
            <Route path = "/view-user/:id" component = {ViewUserPage}></Route>
            <Route path = "/quittedusers" exact component = {ListDeletedUsers}></Route>
            </switch>                
      </BrowserRouter>
    </div>

  );
}

export default App;
