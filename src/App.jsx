import { useState } from 'react'
import './App.css'
import Card1 from './components/Card1'
import Modal1 from './components/Modal1'
import Header from './components/Header'
import Cartao from './components/Cartao'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <Cartao/>
      </div>
      <div>
        a
      </div>
    </div>
  )
}

export default App
