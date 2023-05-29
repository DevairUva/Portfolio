import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Links() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Meus Links
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Meus Links</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Profissionais</h5>
          <ul>
            <li><a href="https://www.linkedin.com/in/devair-martins-2a6376190/">Linkedin</a></li>
            <li><a href="https://github.com/DevairUva">GitHub</a></li>
            <li><a href="https://api.whatsapp.com/send/?phone=5521983749187&text&type=phone_number&app_absent=0">Whatsapp</a></li>
          </ul>
          <h5>Pessoais</h5>
          <ul>
            <li>Resília e Senac</li>
          </ul>
          <button type="submit" onclick="window.location.href=''">Download</button>


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

export default Links;