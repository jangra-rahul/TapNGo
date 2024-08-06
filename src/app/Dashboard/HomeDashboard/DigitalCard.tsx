import React from "react";
import { Modal, Button, Card, Row } from "react-bootstrap";
import Image from "next/image";
import cercle_Img from "../../../assets/images/svg/HDFC_Card.svg";
import save_icon from "../../../assets/images/svg/save_icon.svg";

interface DownloadCardModalProps {
  show: boolean;
  handleClose: () => void;
}

const DigitalCard: React.FC<DownloadCardModalProps> = ({
  show,
  handleClose,
}) => {
  return (
    <Modal className=" red_ff" centered show={show} onHide={handleClose}>
      <Modal.Header className="border-0" closeButton></Modal.Header>
      <Modal.Body className="text-center py-0 ">
        <h4 className=" fw-semibold fs_24 pt-3">Your Digital card here.</h4>

        <Image
          className="mt-4"
          width={230}
          src={cercle_Img}
          alt="cercle_Image"
        />
        <p
          style={{ maxWidth: "370px" }}
          className=" fs_16 mx-auto mt-4 mb-4 mb-0 color_lightblack"
        >
          Now you can download your Digital Card on<br></br> your Phone
          instantly
        </p>
        <div className="d-flex mt-3 justify-content-center align-items-center gap-2">
          <Image className="" src={save_icon} alt="cercle_Image" />
          <a
            className=" fw-semibold color_blue text-decoration-underline"
            href="#"
          >
            Download Now
          </a>
        </div>
      </Modal.Body>
      <Modal.Footer className="border-0"></Modal.Footer>
    </Modal>
  );
};

export default DigitalCard;
