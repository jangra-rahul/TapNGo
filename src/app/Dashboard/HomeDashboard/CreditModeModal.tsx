import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ConfirmYourAddressModal from "./ConfirmYourAddressModal";
import DigitalCard from "./DigitalCard";

interface DownloadCardModalProps {
  show: boolean;
  handleClose: () => void;
}

const CreditModeModal: React.FC<DownloadCardModalProps> = ({
  show,
  handleClose,
}) => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  const [showAddressModal, setShowAddressModal] = useState(false);
  const [showDigitalCardModal, setShowDigitalCardModal] = useState(false);

  const handleProceed = () => {
    if (selectedCard === "physical") {
      setShowAddressModal(true);
    } else if (selectedCard === "digital") {
      setShowDigitalCardModal(true);
    }
    handleClose();
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header
          closeButton
          className="border-0  m-0 p-0 pt-4 pe-4"
        ></Modal.Header>
        <Modal.Body className="text-center dashboard-text-color px-4">
          <Modal.Title className="fs_24 fw-semibold text-center mb-2 m-0 p-0 red_ff dashboard-text-color">
            Choose Your Credit Mode
          </Modal.Title>
          <div className="d-flex gap-4 pt-3 align-items-center mt-3">
            <label className="container3">
              <input
                type="radio"
                name="creditMode"
                id="physical"
                value="physical"
                onChange={() => setSelectedCard("physical")}
                className="me-2"
                style={{
                  width: "30px",
                  height: "40px",
                  backgroundColor: "white",
                }}
              />
              <span className="checkmark"></span>
            </label>
            <label className=" fs_18 red_ff" htmlFor="physical">
              Physical Card *
            </label>
          </div>
          <div className=" d-flex gap-4 align-items-center mt-3">
            <label className="container3">
              <input
                type="radio"
                name="creditMode"
                id="digital"
                value="digital"
                onChange={() => setSelectedCard("digital")}
                className="me-2"
                style={{
                  width: "30px",
                  height: "40px",
                  backgroundColor: "white",
                }}
              />
              <span className="checkmark"></span>
            </label>
            <label className=" fs_18 red_ff" htmlFor="digital">
              Digital Card
            </label>
          </div>
          <div className="d-flex mb-3 gap-4 align-items-center mt-3">
            <label className="container3">
              <input
                type="radio"
                name="creditMode"
                id="both"
                value="both"
                onChange={() => setSelectedCard("both")}
                className="me-2"
                style={{
                  width: "30px",
                  height: "40px",
                  backgroundColor: "white",
                }}
              />
              <span className="checkmark"></span>
            </label>
            <label className=" fs_18 red_ff" htmlFor="both">
              Both
            </label>
          </div>
          <Button
            onClick={handleProceed}
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
      <DigitalCard
        show={showDigitalCardModal}
        handleClose={() => setShowDigitalCardModal(false)}
      />
    </>
  );
};

export default CreditModeModal;
