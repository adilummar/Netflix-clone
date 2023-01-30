import Banner from "./Components/Banner/Banner";
import NavBar from "./Components/NavBar/NavBar";
import RowPost from "./Components/RowPost/RowPost"
import React from "react";
import {action,trending,original,ComedyMovies,HorrorMovies,ActionMovies,RomanceMovies,Documentaries} from './url'
import './App.css'

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Banner/>
    <RowPost title='Netflix originals' url={original} />
    <RowPost title='Action' isSmall url={action} />
    <RowPost title='trending' isSmall url={trending}/>
    <RowPost title='comedy movies' isSmall url={ComedyMovies}/>
    <RowPost title='HorrorMovies' isSmall url={HorrorMovies}/>
    <RowPost title='ActionMovies' isSmall url={ActionMovies}/>
    <RowPost title='RomanceMovies' isSmall url={RomanceMovies}/>
    <RowPost title='Documentaries' isSmall url={Documentaries}/>
    </div>
  )
}

export default App;
