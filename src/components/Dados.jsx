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
          <h5>Nome: Devair Martins Pereira</h5>
          <ul>
            <li>Brasileiro</li>
            <li>31 anos</li>
            <li>Casado</li>
            <li>Parada de Lucas, RJ</li>
          </ul>
          <h5>Um pouco mais sobre mim:</h5>
          <ul>
            <li>Sou católico e faço parte de um movimento chamado Escola de Evangelização Santo André</li>
            <li>Desde novo sempre gostei muito de tecnologia e video games (meu preferidos: God of War e The Last of Us)</li>
            <li>Como um bom carioca, adoro futebol e torço para o Vasco da Gama (Por favor, sem piadas que o site vai cair kkkkkk)</li>
            <li>Minha dignissíma também é uma progamadora: @IsabelaAlves</li>
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
