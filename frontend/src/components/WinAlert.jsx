import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function WinAlert({ show, setShow, setToggle }) {
  const handleClose = () => {
    setShow(false);
    setToggle(false);
  };

  return (
    <>
      <Modal
        show={show}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header>
          <Modal.Title>Congrats</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Congratulations - you won! Go for another round.
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="primary">
            Start New Game
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default WinAlert;
