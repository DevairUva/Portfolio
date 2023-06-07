import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../stiles/formacao.css'

function Formacao() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Formação Acadêmica
      </Button> */}

      <button class="btn btn-2 btn-sep icon-cart" onClick={handleShow}>Formação Acadêmica</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='modalTitleFormacao'>
          <Modal.Title className='modalTitleFormacao'>Formação Acadêmica</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Bacharelado, Ciência da Computação</h5>
          <ul>
            <li>Universidade Veiga de Almeida</li>
          </ul>
          <h5>Programadores Cariocas - Desenvolvedor Full Stack</h5>
          <ul>
            <li>Resília e Senac</li>
          </ul>
          <h5>Desenvolvedor Full Stack</h5>
          <ul>
            <li>Onebitcode</li>
          </ul>
          <h5>Inglês Nível 4 – CLAC Cursos de Línguas Abertos à Comunidade</h5>
          <ul>
            <li>UFRJ</li>
          </ul>
          <h5>Técnico em Administração</h5>
          <ul>
            <li>E.T.E. Juscelino Kubitschek – FAETEC</li>
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

export default Formacao;