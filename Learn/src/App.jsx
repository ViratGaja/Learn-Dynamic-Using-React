import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import About from './Components/About'
import { Info } from './Components/Info'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <About/>
    <Info/>

    </>
  )
}

export default App
