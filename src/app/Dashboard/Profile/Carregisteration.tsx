import Image from "next/image";
import React, { useState } from "react";
import { Form, Button, Row, Col, Modal } from "react-bootstrap";
import right_icon from "../../../../public/assets/images/svg/right_icon.png";

const CarRegistration = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowModal(true);
    // Handle form submission logic here
  };

  const handleClose = () => setShowModal(false);

  return (
    <>
      <Row className="pt-4 bg-white">
        <p className="fs_24 red_ff fw-semibold text-dark ps-4">
          Wish to attach your vehicle details?
        </p>

        <Form onSubmit={handleSubmit} className="ps-4 mt-2 pe-4">
          <Col xs={12} md={6} className="text-dark">
            <Form.Group className="mb-4 text-dark" controlId="vehicleMake">
              <Form.Label className="fs_16 red_ff fw-normal">
                Make of your Vehicle
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-4 text-dark" controlId="vehicleModel">
              <Form.Label className="fs_16 red_ff fw-normal">
                Model of your Vehicle
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>

          <Col xs={12} md={6}>
            <Form.Group className="mb-4 text-dark" controlId="vehicleYear">
              <Form.Label className="fs_16 red_ff fw-normal">
                Year of Your Vehicle
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-4 text-dark" controlId="carRegistration">
              <Form.Label className="fs_16 red_ff fw-normal">
                Car Registration
              </Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>

          <Button
            variant="primary"
            type="submit"
            className="mt-3 py-3 mb-5 w-50 d-flex justify-content-center md:w-50"
          >
            Add Now
          </Button>
        </Form>
      </Row>

      <Modal
        className="text-center"
        show={showModal}
        onHide={handleClose}
        centered
      >
        <Modal.Header className="border-0" closeButton></Modal.Header>
        <Modal.Body className="border-0 pt-0">
          <Image className="mb-3 img-fluid" src={right_icon} alt="Card" />
          <h4 className=" fs_24 red_ff fw-semibold">
            Details Added Successfully
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

export default CarRegistration;
