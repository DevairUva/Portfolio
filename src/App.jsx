import { useState } from 'react'
import './App.css'
import Modal from './components/Modal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <Modal></Modal>
      </div>
      <img src="" alt="" />
    </div>
  )
}

export default App
