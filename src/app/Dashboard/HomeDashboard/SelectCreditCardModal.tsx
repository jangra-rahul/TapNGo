import React, { useState } from "react";
import { Modal, Button, Card, Row } from "react-bootstrap";
import Image from "next/image";
import CreditCardModal from "./CreditCardModal";

interface DownloadCardModalProps {
  show: boolean;
  handleClose: () => void;
}

const SelectCreditCardModal: React.FC<DownloadCardModalProps> = ({
  show,
  handleClose,
}) => {
  const [showCreditCardModal, setShowCreditCardModal] = useState(false);
  const handleCloseCreditCardModal = () => {
    setShowCreditCardModal(true);
    handleClose();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header
          closeButton
          className="border-0  m-0 p-0 pt-4 pe-4"
        ></Modal.Header>
        <Modal.Body className=" dashboard-text-color">
          <Modal.Title className="fs_24 text-center fw-semibold mb-2 m-0 p-0 red_ff dashboard-text-color">
            Choose Your Credit Mode
          </Modal.Title>
          <div className="d-flex ps-4 pt-3 align-items-start  mt-3">
            <input
              type="radio"
              name="id"
              id="id"
              className="me-2 mt-2"
              style={{
                width: "30px",
                height: "40px",
                backgroundColor: "white",
              }}
            />
            <label className="pb-2 mb-0 fs_18 red_ff" htmlFor="id">
              I want to collect the cards from the business<br></br> location
              between 10 A.M. to 5 P.M.
            </label>
          </div>
          <div className="d-flex ps-4 align-items-start  mt-3">
            <input
              type="radio"
              name="id"
              id="id1"
              className="me-2 mt-2"
              style={{
                width: "30px",
                height: "40px",
                backgroundColor: "white",
              }}
            />
            <label className="pb-2 fs_18 red_ff" htmlFor="id1">
              I want to receive it in mail which will take 7<br></br> business
              days.
            </label>
          </div>

          <Button
            onClick={handleCloseCreditCardModal}
            variant="primary"
            className="w-100 mt-4 mb-3 py-3"
          >
            Proceed
          </Button>
        </Modal.Body>
      </Modal>
      <CreditCardModal
        show={showCreditCardModal}
        handleClose={() => setShowCreditCardModal(false)}
      />
    </>
  );
};

export default SelectCreditCardModal;
