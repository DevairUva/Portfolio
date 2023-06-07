import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../stiles/links.css'

function Links() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Meus Links
      </Button> */}

      <button class="btn btn-3 btn-sep icon-heart" onClick={handleShow}>Button</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='modalTitleLinks'>
          <Modal.Title className='modalTitleLinks'>Meus Links</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Profissionais</h5>
          <ul>
            <li><a href="https://www.linkedin.com/in/devair-martins-2a6376190/" target='_blank'>Linkedin</a></li>
            <li><a href="https://github.com/DevairUva" target='_blank'>GitHub</a></li>
            <li><a href="https://api.whatsapp.com/send/?phone=5521983749187&text&type=phone_number&app_absent=0" target='_blank'>Whatsapp</a></li>
            <li><a href="https://drive.google.com/file/d/1ecXlxkaZMgLL53UJO9rET4HSPjO9Z_iV/view?usp=sharing" target='_blank'>Curriculo</a></li>
          </ul>
          <h5>Pessoais</h5>
          <ul>
            <li>Resília e Senac</li>
            <li>nenhum</li>
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

export default Links;