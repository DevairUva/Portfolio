import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Mensagem() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Fale comigo
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fale comigo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Quer entrar em contato?<br />
          Que tal deixar uma mensagem direta pra mim?<br />
          É só preencher os campos e ficar a vontade.

          <form action="">
            <div className="row g-3">
              <div class="row g-3">
                <div class="col-sm-6">
                  <label for="firstName" class="form-label">Nome</label>
                  <input type="text" class="form-control" id="firstName" />
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
                  <input type="email" class="form-control" id="email" placeholder="seu@exe.com" />
                  <div class="invalid-feedback">
                    Please enter a valid email address for shipping updates.
                  </div>
                </div>

                <div class="col-12">
                  <label for="username" class="form-label">Sua Página <span class="text-muted">(Linkedin | Instagram | GitHub)</span></label>
                  <div class="input-group has-validation">
                    <span class="input-group-text">@</span>
                    <input type="text" class="form-control" id="username" placeholder="Username" required />
                    {/* <div class="invalid-feedback">
                      Your username is required.
                    </div> */}
                  </div>
                </div>

                <div class="col-12">
                  <label for="address" class="form-label">Mensagem:</label>
                  <textarea class="form-control" cols="30" rows="5"></textarea>
                  {/* <div class="invalid-feedback">
                    Please enter your shipping address.
                  </div> */}
                </div>

              </div>
            </div>
          </form>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Enviar
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Mensagem;