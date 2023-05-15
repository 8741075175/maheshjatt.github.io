import React from "react"
import{
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Link,
}
from 'react-router-dom';
import TopNav from "./components/TopNav";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App(){
  return (
      <div>
    <Router>
        <TopNav></TopNav>
        <Switch>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='/About' element={<About/>}></Route>
        </Switch>
    </Router>
      </div>
  );
}
export default App;