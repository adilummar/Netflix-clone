import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import RowPost from "./Components/RowPost/RowPost"
import React from "react";
import './App.css'

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost title='Netflix originals'  />
    <RowPost title='Action' isSmall />
    </div>
  )
}

export default App;
