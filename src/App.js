import React from "react";
// import "./styles.css";
import { Switch, Route } from 'react-router-dom';
import Editor from "./Editor";
import Blogs from './Blogs'
import Navbar from './Navbar'
import Login from './Login'
import Signup from "./Signup";
import blog1 from "./blog1.webp";
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
export default function App() {
  // localStorage.setItem('loggedin',false)
  return (
    <div className="App">
      <Navbar/>
      <img src={blog1} style={{backgroundSize:"cover",backgroundPosition:"center",width:"100%"}}  />
      <Switch>
        <Route exact path='/editor' component={Editor}/>
        <Route exact path='/blogs' component={Blogs} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
      </Switch>
    </div>
  );
}