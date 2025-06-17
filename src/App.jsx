import { useState } from 'react'
import './App.css'
import Task from './Components/Task'
import Proj1 from './Components/Proj1'
import Proj2 from './Components/Proj2'
import Proj3 from './Components/Proj3'
import Proj4 from './Components/Proj4'

function App() {

  return (
    <>
      <Task />
      <hr />
      <Proj1 />
      <hr />
      <br />
      <Proj2 />
      <hr />
      <br />
      <Proj3 />
      <hr />
      <br />
      <Proj4 />
    </>
  )
}

export default App
