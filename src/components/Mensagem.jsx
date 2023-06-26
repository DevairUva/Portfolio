import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import emailjs from '@emailjs/browser'
import Mensage from '../assets/mensage.png'
import '../stiles/mensagem.css'

function Mensagem() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [emaiL, setEmail] = useState('')
  const [nome, setNome] = useState('');
  const [pagina, setPagina] = useState('');
  const [mensagem, setMensagem] = useState('');

  function enviarEmail(e) {
    e.preventDefault();

    const templateParams = {
      from_email: emaiL,
      from_name: nome,
      from_message: mensagem,
      from_pagina: pagina
    }

    if (emaiL !== '') {
      emailjs.send("service_m6mx9ze", "template_za43ns2", templateParams, "xNQV6yF19uzXombYa")
        .then((response) => {
          alert(`Parabéns! Seu email foi enviado com sucesso.`, response.status, response.text)
        }, (err) => {
          alert(`Não foi possível enviar seu email. `, err)
        })
    } else {
      alert(`Preencha os campos corretamente.`)
    }
  }

  return (
    <>
      <button class="btn btn-4 btn-sep icon-msg" onClick={handleShow}>Fale comigo</button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='modalTitleMensagem'>
          <Modal.Title className='modalTitleMensagem'>
            Fale comigo
          </Modal.Title>
          <img src={Mensage} />
        </Modal.Header>
        <Modal.Body>
          Quer entrar em contato?<br />
          Que tal deixar uma mensagem direta pra mim?<br />
          É só preencher os campos e ficar a vontade.

          <form onSubmit={enviarEmail}>
            <div className="row g-3">
              <div class="row g-3">
                <div class="col-sm-6">
                  <label for="firstName" class="form-label">Nome</label>
                  <input type="text" class="form-control" id="firstName" onChange={(e) => setNome(e.target.value)} />
                </div>

                <div class="col-sm-6">
                  <label for="lastName" class="form-label">Sobrenome</label>
                  <input type="text" class="form-control" id="lastName" required />
                  {/* <div class="invalid-feedback">
                    Valid last name is required.
                  </div> */}
                </div>

                <div class="col-12">
                  <label for="email" class="form-label">Email</label>
                  <input type="email" class="form-control" id="email" placeholder="seu@exemplo.com" onChange={(e) => setEmail(e.target.value)} />
                  <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div class="col-12">
                  <label for="username" class="form-label">Sua Página <span class="text-muted">(Linkedin | Instagram | GitHub)</span></label>
                  <div class="input-group has-validation">
                    <span class="input-group-text">@</span>
                    <input type="text" class="form-control" id="username" required onChange={(e) => setPagina(e.target.value)} />
                    {/* <div class="invalid-feedback">
                      Your username is required.
                    </div> */}
                  </div>
                </div>

                <div class="col-12">
                  <label for="address" class="form-label">Mensagem:</label>
                  <textarea class="form-control" cols="30" rows="5" onChange={(e) => setMensagem(e.target.value)}></textarea>
                </div>
              </div>
              <button className='btn btn-primary' type='submit'>Enviar Mensagem</button>
            </div>
          </form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Mensagem;