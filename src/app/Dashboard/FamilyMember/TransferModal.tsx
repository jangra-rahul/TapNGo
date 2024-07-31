import React, { useState } from "react";
import Image from "next/image";
import { Modal, Button, Form, Row } from "react-bootstrap";
// import you_icon from "../../../assets/images/svg/you_icon.svg";
// import son_icon from "../../../assets/images/svg/son_icon.svg";
import right_icon from "../../../../public/assets/images/svg/right_icon.png";

interface ModalComponentProps {
  show: boolean;
  handleClose: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const TransferModal: React.FC<ModalComponentProps> = ({
  show,
  handleClose,
  handleSubmit,
}) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit(e);
    setShowSuccessModal(true);
  };

  const closeSuccessModal = () => {
    setShowSuccessModal(false);
    handleClose();
  };

  return (
    <>
      <Modal show={show} centered onHide={handleClose}>
        <Modal.Header
          closeButton
          className="border-0 m-0 p-0 pt-4 pe-4"
        ></Modal.Header>
        <Modal.Body>
          <Modal.Title className="fs_24 red_ff d-flex justify-content-center dashboard-text-color pb-2 mb-3 mt-3 fw-semibold">
            Transferring Balance
          </Modal.Title>
          <Form onSubmit={handleFormSubmit} className="mx-3">
            <Form.Group
              as={Row}
              className="mb-3 px-3"
              controlId="formCardNumber"
            >
              <Form.Label className="fs-16 red_ff w-normal p-0 m-0 pb-2 text-dark">
                Transferring From
              </Form.Label>
              <Form.Select className="py-2 red_ff">
                <option className="fw-normal fs_14 red_ff">
                  Andrew (1521 0351 6541 3565)
                  {/* <Image width={280} className="" src={you_icon} alt="Card" /> */}
                </option>
                <option value="spouse">
                  Cathy (1521 0351 6541 3565) Spouse
                </option>
                <option value="child">Jhon (1521 0351 6541 3565) Child</option>
                <option value="parent">Max (1521 0351 6541 3565) Parent</option>
                <option value="sibling">
                  Robert (1521 0351 6541 3565) Sibling
                </option>
                <option value="other">Known (1521 0351 6541 3565) Other</option>
              </Form.Select>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3 px-3"
              controlId="formNameOnCard"
            >
              <Form.Label className="fs-16 fw-normal red_ff p-0 m-0 pb-2 text-dark">
                Transferring To
              </Form.Label>
              <Form.Select className="py-2 red_ff" aria-label="Select Relation">
                <option className="fw-normal fs_14 red_ff">
                  Sara (1253 2351 6546 4870){" "}
                  {/* <Image width={280} className=" " src={son_icon} alt="Card" /> */}
                </option>
                <option value="spouse">Spouse</option>
                <option value="child">Child</option>
                <option value="parent">Parent</option>
                <option value="sibling">Sibling</option>
                <option value="other">Other</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Row} className="mb-3 px-3" controlId="formRelation">
              <Form.Label className="fs-16 fw-normal red_ff p-0 m-0 pb-2 text dashboard-text-color">
                Enter Amount
              </Form.Label>
              <Form.Control
                className="py-2 fw-bold"
                type="Number"
                placeholder="$100"
              />
            </Form.Group>
            <Form.Group as={Row} className="mb-3 px-3" controlId="formRelation">
              <Form.Label className="fs-16 fw-normal red_ff p-0 m-0 pb-2 text dashboard-text-color">
                Remarks
              </Form.Label>
              <Form.Control
                className="py-2"
                type="text"
                placeholder="Enter Message...."
              />
            </Form.Group>

            <button
              type="submit"
              className="w-100 bg-primary mb-4 mt-3 border-0  text-white rounded-2 red_ff fs-16 py-3 px-0 fw-semibold"
            >
              Submit
            </button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* <Modal
        show={showSuccessModal}
        centered
        onHide={closeSuccessModal}
        className="small-modal"
      >
        <Modal.Body className="transfer-modal text-center p-2">
          <Image src={icon} alt="Success" className="mb-1" />
          <Modal.Title className="fs_24 red_ff fw-medium text-dark mb-1">
            Transaction is successful
          </Modal.Title>
          <p className="fs_16 inter_ff fw-normal" style={{ color: "#666666" }}>
            You have successfully transferred amount to Sara.
          </p>
        </Modal.Body>
      </Modal> */}

      <Modal
        show={showSuccessModal}
        centered
        onHide={closeSuccessModal}
        className="text-center"
      >
        <Modal.Header className="border-0" closeButton></Modal.Header>
        <Modal.Body className="border-0 pt-0">
          <Image className="mb-3 img-fluid" src={right_icon} alt="Card" />
          <h4 className=" fs_24 red_ff fw-semibold">
            Transaction is successful
          </h4>
          <p className=" ">
            You have successfully added your car<br></br> Registration details.
          </p>
        </Modal.Body>
        {/* <Modal.Footer className="border-0">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
};

export default TransferModal;
