import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Dados() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Dados pessoais
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Dados Pessoais</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Nome: Devair Martins Pereira</h5>
          <ul>
            <li>Brasileiro</li>
            <li>29 anos</li>
            <li>Casado</li>
            <li>Parada de Lucas, RJ</li>
          </ul>
          <h5>Um pouco mais sobre mim:</h5>
          <ul>
            <li>Sou católico e faço parte de um movimento chamado Escola de Evangelização Santo André </li>
            <li>Desde novo sempre gostei muito de tecnologia e video games (God of War em 1°lugar)</li>
            <li>Como um bom carioca, adoro futebol e torço para o Vasco da Gama (Por favor, sem piadas que o site vai cair kkkkkk)</li>
            <li>Minha dignissíma também é uma progamadora: @IsabelaAlves</li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Dados;
