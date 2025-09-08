import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='flex justify-between'>
    <h1 className='px-4 text-5xl'>Hello</h1>
    <h2 className='py-115 text-7xl'>{count}</h2>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4 rounded' onClick={()=>setCount(count=>count+1)}>Click</button>
       <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold  px-4 rounded' onClick={()=>setCount(a=>a-1)}>clickkkkk</button>
    </div>
    </>
  )
}

export default App
