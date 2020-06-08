import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import Parts from "./pages/Parts";
import SinglePart from "./pages/SinglePart";
import Error from "./pages/Error";
import {Route,Switch} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
 

function App() {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route exact path ="/" component = {Home}/>
    <Route exact path ="/Parts" component = {Parts}/>
    <Route exact path="/Parts/:slug" component = {SinglePart}/>
    <Route component ={Error}/>
    </Switch>
    </>
      )}

export default App;
