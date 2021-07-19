import React from "react";
// import "./styles.css";
import { Switch, Route } from 'react-router-dom';
import Editor from "./Editor";
import Blogs from './Blogs'

export default function App() {
  return (
    <div className="App">
      {/* <h3>Jodit</h3> */}
      {/* <Editor /> */}
      <Switch>
        <Route exact path='/' component={Editor}/>
        <Route exact path='/page1' component={Blogs} />
      </Switch>
    </div>
  );
}