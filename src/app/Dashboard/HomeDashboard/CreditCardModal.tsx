import React from "react";
import { Modal, Button, Card, Row } from "react-bootstrap";
import Image from "next/image";

interface DownloadCardModalProps {
  show: boolean;
  handleClose: () => void;
}

const CreditCardModal: React.FC<DownloadCardModalProps> = ({
  show,
  handleClose,
}) => {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header
        closeButton
        className="border-0  m-0 p-0 pt-4 pe-4"
      ></Modal.Header>
      <Modal.Body className="text-center dashboard-text-color">
        <Modal.Title className="fs_24 fw-semibold text-center mb-2 m-0 p-0 red_ff dashboard-text-color">
          Collect Your Credit Card
        </Modal.Title>
        <p className=" red_ff fs-6 mt-4">
          You can come and collect the cards from <br></br> the business
          location between 10 A.M. to 5 <br></br> P.M.
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default CreditCardModal;
