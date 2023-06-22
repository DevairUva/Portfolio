import './stiles/coluna1.css'
import Dados from "./components/Dados"
import Formacao from './components/Formacao'
import Links from './components/Links'
import Mensagem from './components/Mensagem'
import devair from './assets/devair.jpg'
import devair2 from './assets/abc.jpg'
import devair3 from './assets/logo_DEVair.png'
import { FaBeer } from 'react-icons/fa';
import { AiFillRedditSquare } from "react-icons/ai";

function App() {
  return (
    <div className='mom'>
      <h2>DEVair Martins</h2>
      Quem nasceu pra ser <strong>DEV</strong>, já traz a marca no prórpio nome!
      <div className='informations'>
        <div className="botoes">
          <Dados />
          <Formacao />
          <Links />
          <Mensagem />
          <FaBeer />
          <AiFillRedditSquare/>
        </div>
        <div>
          <img src={devair3} alt="minha foto" className='myImg'/>
        </div>
      </div>
    </div>
  )
}

export default App
