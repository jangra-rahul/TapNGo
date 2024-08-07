"use client";
import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Modal } from "react-bootstrap";
import VehicleDetails from "../authPages/VehcileDetails";

const Register = () => {
  const [isVehicleModalOpen, setIsVehicleModalOpen] = useState(false);

  const openVehicleModal = (e: any) => {
    e.preventDefault();
    setIsVehicleModalOpen(true);
  };

  const closeVehicleModal = () => {
    setIsVehicleModalOpen(false);
  };

  return (
    <Container className="mt-4">
      <Form>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group controlId="formFirstName">
              <Form.Label className="fs-6 red_ff color_lightblack fw-medium">
                First Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className=" border px-3 py-2 rounded-2 border-body border-2"
              />
            </Form.Group>
          </Col>

          <Col md={6} className="mb-3">
            <Form.Group controlId="formLastName">
              <Form.Label className="fs-6 red_ff color_lightblack fw-medium">
                Last Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className=" border px-3 py-2 rounded-2 border-body border-2"
              />
            </Form.Group>
          </Col>

          <Col md={12} className="mb-3">
            <Form.Group controlId="formEmailAddress">
              <Form.Label className="fs-6 red_ff color_lightblack fw-medium">
                Email Address
              </Form.Label>
              <Form.Control
                type="email"
                placeholder=""
                className=" border px-3 py-2 rounded-2 border-body border-2"
              />
            </Form.Group>
          </Col>

          <Col md={6} className="mb-3">
            <Form.Group controlId="formMobileNumber">
              <Form.Label className="fs-6 red_ff color_lightblack fw-medium">
                Mobile Number
              </Form.Label>
              <Form.Control
                type="number"
                placeholder=""
                className=" border px-3 py-2 rounded-2 border-body border-2"
              />
            </Form.Group>
          </Col>

          <Col md={6} className="mb-3">
            <Form.Group controlId="formDOB">
              <Form.Label className="fs-6 red_ff color_lightblack fw-medium">
                Date of Birth
              </Form.Label>
              <Form.Control
                type="date"
                className=" border px-3 py-2 rounded-2 border-body border-2"
              />
            </Form.Group>
          </Col>

          <Col md={12} className="mb-3">
            <Form.Group controlId="formCorporateCard">
              <Form.Label className="fs-6 red_ff color_lightblack fw-medium">
                Corporate Card
              </Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                className=" border px-3 py-2 rounded-2 border-body border-2"
              />
            </Form.Group>
          </Col>
        </Row>

        <Button
          variant="primary"
          type="submit"
          className="w-100 mt-4 py-2 fs-16 fw-semibold red_ff rounded-2"
        >
          Sign Up
        </Button>

        <Form.Group
          controlId="formTAndC"
          className="mt-2 d-flex align-items-center"
        >
          <Form.Check type="checkbox" id="accept" className="me-2" />
          <Form.Label className="fs_14 mt-2 red_ff text-black fw-medium">
            I accept
            <a onClick={openVehicleModal} href="#" className="ms-1 me-1 tdn">
              T&C
            </a>
            and
            <a href="#" className="ms-1 tdn">
              &nbsp;Terms of Service&nbsp;
            </a>
            for using this platform
          </Form.Label>
        </Form.Group>

        <p className="red_ff color_lightblack text-center fw-medium mt-3 fs-14">
          Already a user?&nbsp;
          <a className="color_blue" href="#">
            Login
          </a>
        </p>
      </Form>

      <VehicleDetails
        isModalOpen={isVehicleModalOpen}
        closeModal={closeVehicleModal}
      />
    </Container>
  );
};

export default Register;
