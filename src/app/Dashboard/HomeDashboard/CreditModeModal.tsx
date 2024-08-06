import React, { useState } from "react";
import { Modal, Button, Card, Row } from "react-bootstrap";
import Image from "next/image";
import ConfirmYourAddressModal from "./ConfirmYourAddressModal";

interface DownloadCardModalProps {
  show: boolean;
  handleClose: () => void;
}

const CreditModeModal: React.FC<DownloadCardModalProps> = ({
  show,
  handleClose,
}) => {
  const [showAddressModal, setShowAddressModal] = useState(false);
  const handleAddressModal = () => {
    setShowAddressModal(true);
    handleClose();
  };
  return (
    <>
      {" "}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header
          closeButton
          className="border-0  m-0 p-0 pt-4 pe-4"
        ></Modal.Header>
        <Modal.Body className="text-center dashboard-text-color">
          <Modal.Title className="fs_24 fw-semibold text-center mb-2 m-0 p-0 red_ff dashboard-text-color">
            Choose Your Credit Mode
          </Modal.Title>
          <div className="d-flex pt-3 align-items-center  mt-3">
            <input
              type="radio"
              name="id"
              id="id"
              className="me-2 "
              style={{
                width: "30px",
                height: "40px",
                backgroundColor: "white",
              }}
            />
            <label className="pb-2 fs_18 red_ff" htmlFor="id">
              Physical Card *
            </label>
          </div>
          <div className="d-flex align-items-center  mt-3">
            <input
              type="radio"
              name="id"
              id="id1"
              className="me-2 "
              style={{
                width: "30px",
                height: "40px",
                backgroundColor: "white",
              }}
            />
            <label className="pb-2 fs_18 red_ff" htmlFor="id1">
              Digital Card
            </label>
          </div>
          <div className="d-flex align-items-center  mt-3">
            <input
              type="radio"
              name="id"
              id="id2"
              className="me-2 "
              style={{
                width: "30px",
                height: "40px",
                backgroundColor: "white",
              }}
            />
            <label className="pb-2 fs_18 red_ff" htmlFor="id2">
              {" "}
              Both
            </label>
          </div>
          <Button
            onClick={handleAddressModal}
            variant="primary"
            className="w-100 mt-4 mb-3 py-3"
          >
            Proceed
          </Button>
        </Modal.Body>
      </Modal>
      <ConfirmYourAddressModal
        show={showAddressModal}
        handleClose={() => setShowAddressModal(false)}
      />
    </>
  );
};

export default CreditModeModal;
