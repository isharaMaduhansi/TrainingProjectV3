import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Link, useRouteMatch } from "react-router-dom";
import HeaderComponent from './components/HeaderComponent';
import AddStudentPage from './pages/AddStudentPage';
import ViewStudentPage from './pages/ViewStudentPage';
import ListStudentPage from './pages/ListStudentPage';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';

function App() {

  return (
    <div>
      <BrowserRouter>
          <HeaderComponent />
            <switch>
            <Route path = "/" exact component = {HomePage}></Route>
            <Route path = "/add-students" component = {AddStudentPage}></Route>
            <Route path = "/login" component = {LoginPage}></Route>
            <Route path = "/students" exact component = {ListStudentPage}></Route>
            <Route path = "/edit-students/:id" component = {AddStudentPage}></Route>
            <Route path = "/view-students/:id" component = {ViewStudentPage}></Route>
            <Route path = "/dashboard" component = {Dashboard}></Route>  
            </switch>                
      </BrowserRouter>
    </div>

  );
}

export default App;
