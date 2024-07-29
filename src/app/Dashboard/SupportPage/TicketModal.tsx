import React, { useRef, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import pdf from "../../../../public/assets/images/svg/pdf.svg";
import cross from "../../../../public/assets/images/cross.svg";
import Image from "next/image";
interface TicketModalProps {
  show: boolean;
  handleClose: () => void;
}

const TicketModal: React.FC<TicketModalProps> = ({ show, handleClose }) => {
  const [attachment, setAttachment] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachment(e.target.files[0]);
    }
  };

  const handleRemoveAttachment = () => {
    setAttachment(null);
  };

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <Modal show={show} centered onHide={handleClose}>
      <Modal.Header className="border-0" closeButton>
        <Modal.Title className="dashboard-text-color  border-0 ">
          Raise Ticket
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="border-0 pt-0">
        <Form>
          <Form.Group className="mb-3" controlId="name">
            <div className="d-flex gap-2">
              <div>
                <Form.Label>First Name </Form.Label>
                <Form.Control type="text" className="me-2" />
              </div>
              <div>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" />
              </div>
            </div>
          </Form.Group>

          <Form.Group className="mb-3" controlId="issue">
            <Form.Label>Issue</Form.Label>
            <Form.Select aria-label="Select issue">
              <option>Select an issue type</option>
              <option value="bug">Bug</option>
              <option value="feature">Feature Request</option>
              <option value="other">Other</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Form.Group controlId="attachment" className="mb-3">
            <Form.Label>Attachment</Form.Label>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
              accept=".png, .jpeg, .pdf"
            />
            <button
              type="button"
              className="w-100 file_btn mb-3 py-2 rounded-3 border-0 red_ff text-white"
              onClick={handleUploadClick}
            >
              Upload .png, .jpeg, .pdf
            </button>
            <button
              className=" w-100 bg-primary py-3 rounded-3 border-0 red_ff text-white"
              onClick={handleClose}
            >
              Raise Ticket
            </button>
          </Form.Group>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default TicketModal;
