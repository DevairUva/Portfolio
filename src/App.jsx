import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card1 from './components/Card1'
import Card2 from './components/Card2'
import Card3 from './components/Card3'
import Card4 from './components/Card4'
import Card5 from './components/Card5'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='up'>
        <div className='div1'><Card1></Card1></div>
        <div className='div2'><Card2></Card2></div>
      </div>
      <div className='low'>
        <div className='div3'><Card3></Card3></div>
        <div className='div4'><Card4></Card4></div>
      </div>
      <div className='quite'>
        <div className='div5'>
          <h1><Card5></Card5></h1>
        </div>
      </div>

    </div>
  )
}

export default App
