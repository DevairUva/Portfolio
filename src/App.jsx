import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'
import Card1 from './components/Card1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <Modal></Modal>
        <Card1></Card1>
      </div>
      <div>
        a
      </div>
    </div>
  )
}

export default App
