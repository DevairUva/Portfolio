import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Person from '../assets/person.png'
import '../stiles/dados.css'

function Dados() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="btn btn-1 btn-sep icon-dados" onClick={handleShow}>Dados Pessoais</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='modalTitleDados titleDados'>
          <Modal.Title className='modalTitleDados'>
            Dados Pessoais
          </Modal.Title>
          <img src={Person}/>
        </Modal.Header>
        <Modal.Body>
          <h5>Devair Martins Pereira</h5>
          <ul>
            <li>Brasileiro</li>
            <li>32 anos</li>
            <li>Casado</li>
            <li>Parada de Lucas, RJ</li>
          </ul>
          <h5>Um pouco mais sobre mim:</h5>
          <ul>
            <li>Sou católico e faço parte da Escola de Evangelização Santo André</li>
            <li>Desde criança gosto muito de tecnologia e video games (meu preferido: God of War)</li>
            <li>Como um bom carioca, adoro futebol e torço para o GIGANTESCO Vasco da Gama /+/</li>
            <li>Minha dignissíma também é da área de TI, e hoje trabalha com segurança de redes</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Dados;
