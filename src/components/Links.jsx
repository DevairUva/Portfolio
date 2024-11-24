import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Net from '../assets/links.png'
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

      <button class="btn btn-3 btn-sep topic-links" onClick={handleShow}>Meus Links</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='modalTitleLinks'>
          <Modal.Title className='modalTitleLinks'>
            Meus Links
          </Modal.Title>
          <img src={Net} />
        </Modal.Header>
        <Modal.Body>
          <h5>Profissionais</h5>
          <ul>
            <li className='linkedin'><a className='linkedin' href="https://www.linkedin.com/in/devair-martins-2a6376190/" target='_blank'>Linkedin</a> <i class="fa fa-linkedin-square size-links"></i></li>
            <li className='github'><a className='github' href="https://github.com/DevairUva" target='_blank'>GitHub</a> <i class="fa fa-github size-links"></i></li>
            <li className='doc'><a className='doc' href="" target='_blank'>Curriculo</a> <i class="fa fa-file-text size-links"></i></li>
          </ul>
          <h5>Pessoais</h5>
          <ul>
            <li className='whatsapp'><a className='whatsapp' href="https://api.whatsapp.com/send/?phone=5521983749187&text&type=phone_number&app_absent=0" target='_blank'>Whatsapp</a> <i class="fa fa-whatsapp size-links"></i></li>
            <li className='insta'><a className='insta' href="https://www.instagram.com/devairmartins/" target='_blank'>Instagram</a> <i class="fa fa-instagram size-links"></i></li>
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
