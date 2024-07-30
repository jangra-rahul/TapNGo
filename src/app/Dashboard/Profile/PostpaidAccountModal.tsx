import React from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";

interface PostpaidAccountModalProps {
  show: boolean;
  handleClose: () => void;
}

const PostpaidAccountModal: React.FC<PostpaidAccountModalProps> = ({
  show,
  handleClose,
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="custom-modal-width"
    >
      <Modal.Header closeButton className="border-0">
        <Modal.Title>
          <h5 className="mb-0 fs_22 px-3 red_ff mb-0 fw-semibold">
            Postpaid Account Application
          </h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="border-0 pt-3">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="creditLimit">
                <Form.Label className="fs_16 fw-normal red_ff">
                  Credit Limit
                </Form.Label>
                <Form.Control className="py-2" type="text" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="billingFrequency">
                <Form.Label className="fs_16 fw-normal  red_ff">
                  Billing Frequency
                </Form.Label>
                <Form.Control className="py-2" as="select">
                  <option>Monthly</option>
                  <option>Quarterly</option>
                  <option>Annually</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col>
              <Form.Group controlId="primaryPaymentMethod">
                <Form.Label className="fs_16 fw-normal  red_ff">
                  Primary Payment Method
                </Form.Label>
                <Form.Control className="py-2" type="text" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="backupPaymentMethod">
                <Form.Label className="fs_16 fw-normal  red_ff">
                  Backup Payment Method
                </Form.Label>
                <Form.Control className="py-2" type="text" />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="termsAndConditions" className="mb-3">
            <Form.Check
              type="checkbox"
              label={
                <span>
                  Agree to{" "}
                  <a className=" text-decoration-underline" href="#">
                    Terms and Conditions for Auto Debit
                  </a>
                </span>
              }
            />
          </Form.Group>
          <Button type="submit" className="w-100 mt-3 bg_blue red_ff py-3">
            Submit Request
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default PostpaidAccountModal;
