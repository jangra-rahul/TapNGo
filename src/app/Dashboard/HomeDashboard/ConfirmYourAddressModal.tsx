import React, { useState } from "react";
import { Modal, Button, Card, Row } from "react-bootstrap";
import Image from "next/image";

import SelectCreditCardModal from "./SelectCreditCardModal";

interface DownloadCardModalProps {
  show: boolean;
  handleClose: () => void;
}

const ConfirmYourAddressModal: React.FC<DownloadCardModalProps> = ({
  show,
  handleClose,
}) => {
  const [showSelectCreditCardModal, setShowSelectCreditCardModal] =
    useState(false);
  const handleCloseSelectCreditCardModal = () => {
    setShowSelectCreditCardModal(true);
    handleClose();
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header
          closeButton
          className="border-0  m-0 p-0 pt-4 pe-4"
        ></Modal.Header>
        <Modal.Body className="text-center px-4 dashboard-text-color">
          <Modal.Title className="fs_24 fw-semibold text-center mb-2 m-0 p-0 red_ff dashboard-text-color">
            Confirm your Address
          </Modal.Title>
          <p className=" red_ff fs-6">
            New card will be delivered to below address in 3-5<br></br> business
            days.
          </p>
          <div className="d-flex text-start mt-4 flex-column">
            <label className="px-0 red_ff" htmlFor="#">
              Address line 1
            </label>
            <input
              placeholder="Andrew"
              className="py-2 mt-2 px-3 rounded-2 w-100 border-body border"
              type="text"
            />
          </div>
          <div className="d-flex text-start mt-2 flex-column">
            <label className="px-0 red_ff" htmlFor="#">
              Landmark
            </label>
            <input
              placeholder="example@gmail.com"
              className="py-2 mt-2 px-3 rounded-2 w-100 border-body border"
              type="text"
            />
          </div>
          <div className="d-flex text-start mt-2 flex-column">
            <label className="px-0 red_ff" htmlFor="#">
              City
            </label>
            <input
              placeholder="example@gmail.com"
              className="py-2 mt-2 px-3 rounded-2 w-100 border-body border"
              type="text"
            />
          </div>
          <div className="d-flex text-start mt-2 flex-column">
            <label className="px-0 red_ff" htmlFor="#">
              State
            </label>
            <input
              placeholder="example@gmail.com"
              className="py-2 mt-2 px-3 rounded-2 w-100 border-body border"
              type="text"
            />
          </div>
          <div className="d-flex text-start mt-2 flex-column">
            <label className="px-0 red_ff" htmlFor="#">
              Pincode
            </label>
            <input
              placeholder="example@gmail.com"
              className="py-2 mt-2 px-3 rounded-2 w-100 border-body border"
              type="text"
            />
          </div>
          <Button
            onClick={handleCloseSelectCreditCardModal}
            variant="primary"
            className="w-100 mt-4 mb-3 py-3"
          >
            Proceed
          </Button>
        </Modal.Body>
      </Modal>

      <SelectCreditCardModal
        show={showSelectCreditCardModal}
        handleClose={() => setShowSelectCreditCardModal(false)}
      />
    </>
  );
};

export default ConfirmYourAddressModal;
