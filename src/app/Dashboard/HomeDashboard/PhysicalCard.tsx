import React from "react";
import { Modal, Button, Card, Row } from "react-bootstrap";
import Image from "next/image";
import cercle_Img from "../../../assets/images/svg/HDFC_Card.svg";

interface DownloadCardModalProps {
  show: boolean;
  handleClose: () => void;
}

const PhysicalCard: React.FC<DownloadCardModalProps> = ({
  show,
  handleClose,
}) => {
  return (
    <Modal className=" red_ff" centered show={show} onHide={handleClose}>
      <Modal.Header className="border-0" closeButton></Modal.Header>
      <Modal.Body className="text-center py-0 ">
        <h4 className=" fw-semibold fs_24 pt-3">
          Your Physical card is on the <br></br>Way.
        </h4>

        <Image
          className="mt-3"
          width={230}
          src={cercle_Img}
          alt="cercle_Image"
        />
        <p
          style={{ maxWidth: "370px" }}
          className=" fs_16 mx-auto mt-4 mb-4 mb-0 color_lightblack"
        >
          Your Credit Card delivery may tack 2-3<br></br>
          business days.
        </p>
      </Modal.Body>
      <Modal.Footer className="border-0"></Modal.Footer>
    </Modal>
  );
};

export default PhysicalCard;
