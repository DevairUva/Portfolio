import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='up'>
        <div className='div1'>red</div>
        <div className='div2'>blue</div>
      </div>
      <div className='quite'>
        <h1>Finalmente criando meu Portfolio :)</h1>
      </div>
      <div className='low'>
        <div className='div3'>green</div>
        <div className='div4'>orange</div>
      </div>
    </div>
  )
}

export default App
