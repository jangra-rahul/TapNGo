import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Link from 'next/link';

const Login = () => {
  return (
    <Container className="mt-4 ">
      <Row className="justify-content-center">
        <Form>
          <Form.Group controlId="formCorporateCard" className="mb-3">
            <Form.Label className="fs-6 red_ff color_lightblack fw-medium">
              Corporate Card
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Corporate Card Number"
              className=" border px-3 py-2 rounded-2 border-body border-2"
            />
          </Form.Group>

          <Form.Group controlId="formMobileNumber" className="mb-3">
            <Form.Label className="fs-6 red_ff color_lightblack fw-medium">
              Mobile Number
            </Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Mobile Number"
              className=" border px-3 py-2 rounded-2 border-body border-2"
            />
          </Form.Group>

          <Form.Group controlId="formDOB" className="mb-3">
            <Form.Label className="fs-6 red_ff color_lightblack fw-medium">
              Date of Birth
            </Form.Label>
            <Form.Control
              type="date"
              className=" border px-3 py-2 rounded-2 border-body border-2"
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-100 mt-4 py-2 fs-16 fw-semibold red_ff rounded-2"
          >
            Log In
          </Button>
        </Form>
        <footer className="mt-3">
          <p className="red_ff color_lightblack fw-medium fs-14">
            Forgot Credentials?&nbsp;
            <Link href="/Dashboard/ForgotCredential" className="color_blue">
              Click here!
            </Link>
          </p>
        </footer>
      </Row>
    </Container>
  );
};

export default Login;
