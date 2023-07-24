import './stiles/coluna1.css'
import './App.css'
import Dados from "./components/Dados"
import Formacao from './components/Formacao'
import Links from './components/Links'
import Mensagem from './components/Mensagem'
import devair from './assets/devair.jpg'
import devair2 from './assets/abc.jpg'
import devair3 from './assets/logo_DEVair.png'
import { FaBeer } from 'react-icons/fa';
import { AiFillRedditSquare } from "react-icons/ai";
import Footer from './components/Footer'

function App() {
  return (
    <div className='mom'>
      <div className='titleApp'>
        <h2><strong>DEVair Martins</strong></h2>
        Quem nasce pra ser <strong>DEV</strong>, traz a marca no prórpio nome!
      </div>
      <div className='informations'>
        <div className='minhaFoto'>
          <img src={devair3} alt="minha foto" className='myImg' />
        </div>
        <div className="botoes">
          <Dados />
          <Formacao />
          <Links />
          <Mensagem />
          {/* <FaBeer />
          <AiFillRedditSquare/> */}
        </div>
      </div>
      <div className='footerApp'>
        <Footer />
      </div>
    </div>
  )
}

export default App
