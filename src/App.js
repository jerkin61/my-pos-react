import React from "react"
import Button from "./components/Button/Button";
import Header from "./components/Header/Header";
import Query from "./components/Query/Query";
import './App.css'

const App = () => {
  return (
      <div className='vertical-div'>
      <><Header />
      <Query /></>
      <div className='btn-row-3'
      ><Button /><Button />
      </div>
       </div>
  )
 
}

export default App;
