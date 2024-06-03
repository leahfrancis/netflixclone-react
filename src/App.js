import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import './App.css'
import {originals,action,comedies,horror} from './urls'
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost url={originals} title='Netflix Originals'/>
    <RowPost url={action} title='Action' isSmall/>
    <RowPost url={comedies} title='Comedy Movies' isSmall/>
    <RowPost url={horror} title='Horror Movies' isSmall/>
    </div>
  );
};

export default App;
