import { useState } from 'react'
import './App.css'
import Counter from './Components/Counter';
import AuthStatus from './Components/AuthStatus';
import MessageDisplay from './Components/MessageDisplay';
import Proj1 from './Components/Proj1'
import Proj2 from './Components/Proj2'
import Proj3 from './Components/Proj3'
import Proj4 from './Components/Proj4'

function App() {

  return (
    <>
      <h1 className="text-center mb-4">Redux Basics Day 21</h1>
      <Counter />
      <hr />
      <br />
      <AuthStatus />
      <hr />
      <br />
      <MessageDisplay />
      <hr />
      <br />
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
