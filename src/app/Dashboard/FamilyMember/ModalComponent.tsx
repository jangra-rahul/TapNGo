import React from "react";
import { Modal, Button, Form, Row } from "react-bootstrap";
import Apple_wallet from "../../../../public/assets/images/svg/apple-wallet.svg";
import Samsung_wallet from "../../../../public/assets/images/svg/samsung-wallet.svg";
import Google_wallet from "../../../../public/assets/images/svg/google_wallet.svg";
import exclamation from "../../../../public/assets/images/svg/exclamation.svg";

interface ModalComponentProps {
  show: boolean;
  handleClose: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  show,
  handleClose,
  handleSubmit,
}) => {
  return (
    <Modal show={show} centered onHide={handleClose}>
      <Modal.Header
        closeButton
        className="border-0 m-0 p-0 pt-4 pe-4"
      ></Modal.Header>
      <Modal.Body>
        <Modal.Title className="fs_24 red_ff d-flex justify-content-center dashboard-text-color pb-2 mb-3 mt-3 fw-semibold">
          Add Family Member
        </Modal.Title>
        <Form onSubmit={handleSubmit} className="mx-3">
          <Form.Group as={Row} className="mb-3" controlId="formCardNumber">
            <Form.Label className="fs-18 red_ff p-0 m-0 pb-2 text-dark">
              Card Number
            </Form.Label>

            <div className="position-relative px-0">
              <Form.Control className=" py-2" type="text" />
              <div className="position-absolute top-0 end-0">
                <p className="mt-2 mb-0 pe-4 text-success cursor">Verify</p>
              </div>
            </div>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formNameOnCard">
            <Form.Label className="fs-18 red_ff p-0 m-0 pb-2 text-dark">
              Name on Card
            </Form.Label>
            <Form.Control className="py-2" type="text" placeholder="" />
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formRelation">
            <Form.Label className="fs-18 red_ff p-0 m-0 pb-2 text dashboard-text-color">
              Relation to You
            </Form.Label>
            <Form.Select
              className="py-2 fw-semibold red_ff"
              aria-label="Select Relation"
            >
              <option className="fw-Semibold">Son</option>
              <option value="spouse">Spouse</option>
              <option value="child">Child</option>
              <option value="parent">Parent</option>
              <option value="sibling">Sibling</option>
              <option value="other">Other</option>
            </Form.Select>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3 d-flex dashboard-text-color"
            controlId="formTwoWaySync"
          >
            <Form.Label column sm={4}>
              Two way sync <img src={exclamation} alt="" />
            </Form.Label>
            <div className="d-flex gap-3">
              <Form.Check
                type="radio"
                label="Yes"
                name="formTwoWaySync"
                id="formTwoWaySyncYes"
              />
              <Form.Check
                type="radio"
                label="No"
                name="formTwoWaySync"
                id="formTwoWaySyncNo"
              />
            </div>
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-100 red_ff fs-16 py-3 fw-semibold"
          >
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalComponent;
