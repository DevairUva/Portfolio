import './stiles/coluna1.css'
import Dados from "./components/Dados"
import Formacao from './components/Formacao'
import Links from './components/Links'
import Mensagem from './components/Mensagem'
import devair from './assets/devair.jpg'

function App() {
  return (
    <div className='mom'>
      <div className="botoes">
        <Dados />
        <Formacao />
        <Links />
        <Mensagem />
      </div>
      <div>
        <img src={devair} alt="" />
      </div>
    </div>
  )
}

export default App
