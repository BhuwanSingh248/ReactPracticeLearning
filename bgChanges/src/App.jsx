import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')
  return (
    <>
     <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg px-3 py-1 rounded-3xl' style={{backgroundColor:color}}>
          <button onClick={() => setColor('Red')} className='outline-none px-4 py-2 rounded-full bg-red-800 shadow-lg text-black'>Red</button>
          <button onClick={() => setColor('Green')} className='outline-none px-4 py-2 rounded-full bg-green-800 shadow-lg text-black'>Green</button>
          <button onClick={() => setColor('Blue')} className='outline-none px-4 py-2 rounded-full bg-blue-800 shadow-lg text-black'>Blue</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
