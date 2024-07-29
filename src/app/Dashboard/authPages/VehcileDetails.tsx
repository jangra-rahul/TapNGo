import React from "react";
import { Modal, Button, Form, Container, Row, Col } from "react-bootstrap";
import cross_icon from "../../../../public/assets/images/svg/cross_icon.svg"
import Image from "next/image";

interface Props {
  isModalOpen: boolean;
  closeModal: () => void;
}

const VehicleDetails: React.FC<Props> = ({ isModalOpen, closeModal }) => {
  return (
    <Modal show={isModalOpen} onHide={closeModal} centered>
      <Container className="position-relative">
        <Button
          variant="link"
          className="position-absolute end-0 top-0  pe-3"
          onClick={closeModal}
        >
          <Image width={15} src={cross_icon} alt="Close" />
        </Button>
        <Modal.Header className="border-0">
          <Modal.Title className="w-100 text-center">
            <h4 className="mt-3 red_ff fs_24">
              Wish to attach your vehicle details?
            </h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="border-0">
          <Form>
            <Form.Group controlId="vehicleMake" className="mb-3">
              <Form.Label className="fs-6 red_ff color_lightblack fw-medium">
                Make of your Vehicle
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Make"
                className=" border px-3 py-2 rounded-2 border-body border-2"
              />
            </Form.Group>

            <Form.Group controlId="vehicleModel" className="mb-3">
              <Form.Label className="fs-6 red_ff color_lightblack fw-medium">
                Model of your Vehicle
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Model"
                className=" border px-3 py-2 rounded-2 border-body border-2"
              />
            </Form.Group>

            <Form.Group controlId="vehicleYear" className="mb-3">
              <Form.Label className="fs-6 red_ff color_lightblack fw-medium">
                Year of Your Vehicle
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Year"
                className=" border px-3 py-2 rounded-2 border-body border-2"
              />
            </Form.Group>

            <Form.Group controlId="vehicleRegistration" className="mb-3">
              <Form.Label className="fs-6 red_ff color_lightblack fw-medium">
                Car Registration
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Registration Number"
                className=" border px-3 py-2 rounded-2 border-body border-2"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="border-0 w-100">
          <Row className="w-100">
            <Col xs={6} className="ps-0">
              <Button
                variant="outline-primary"
                className="w-100 py-2 rounded-1 color_blue"
                onClick={closeModal}
              >
                Skip for now
              </Button>
            </Col>
            <Col xs={6} className="pe-0">
              <Button
                variant="primary"
                className="w-100 bg_blue border-0 py-2 rounded-1 fs_16 text-white source_ff"
                onClick={closeModal}
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Modal.Footer>
      </Container>
    </Modal>
  );
};

export default VehicleDetails;
