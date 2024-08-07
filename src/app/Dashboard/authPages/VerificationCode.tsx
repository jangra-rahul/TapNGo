"use client";
import React, { useState, useRef, useEffect } from "react";
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
import cross_icon from "../../../../public/assets/images/svg/cross_icon.svg";
import Success_icon from "../../../../public/assets/images/svg/Success_icon.svg";
import Image from "next/image";

interface Props {
  isModalOpen: boolean;
  closeModal: () => void;
}

const VerificationCode: React.FC<Props> = ({ isModalOpen, closeModal }) => {
  const [otpValues, setOtpValues] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (isModalOpen) {
      inputRefs.current[0]?.focus();
    }
  }, [isModalOpen]);

  const handleInputChange = (index: number, value: string) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;

    setOtpValues(newOtpValues);
    if (index < otpValues.length - 1 && value !== "") {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleModal = () => {
    const isFilled = otpValues.every((value) => value !== "");
    setIsVerifyModalOpen(true);
    closeModal();
    if (isFilled) {
      // Open success modal
      closeModal(); // Close OTP modal
    } else {
      setOtpValues(["", "", "", "", "", ""]); // Clear OTP values if not all fields are filled
    }
  };

  const [isVerifyModalOpen, setIsVerifyModalOpen] = useState<boolean>(false);

  const closeVerifyModal = () => {
    setIsVerifyModalOpen(false);
    closeModal();
  };

  return (
    <>
      {/* OTP Modal */}
      <Modal show={isModalOpen} onHide={closeModal} centered>
        <div className="position-relative">
          <a className="" href="#">
            <Image
              onClick={closeModal}
              className="position-absolute mt-2 me-2 end-0 top-0"
              width={15}
              src={cross_icon}
              alt="cross_icon"
            />
          </a>
          <Modal.Header className="d-flex flex-column border-0">
            <Modal.Title className="text-center text-black mt-3 red_ff fs_24">
              Verification Code
            </Modal.Title>
            <p className="red_ff color_lightblack fs_16 mt-2 fw-normal text-center mb-0">
              We have sent the OTP code to xyz@gmail.com for the verification
              process.
            </p>
          </Modal.Header>
          <Modal.Body className="border-0">
            <Container>
              <Row className="text-center">
                {otpValues.map((value, index) => (
                  <Col key={index} className="px-1">
                    <input
                      ref={(ref: any) => (inputRefs.current[index] = ref)}
                      className="w-100 ps-sm-3 verify_input border-body border border-2"
                      type="number"
                      maxLength={1}
                      value={value}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                  </Col>
                ))}
              </Row>
            </Container>
          </Modal.Body>
          <Modal.Footer className="border-0">
            <Button variant="link" className="color_blue" onClick={closeModal}>
              Resend Code
            </Button>
            <Button
              variant="primary"
              className="bg_blue border-0 py-2 rounded-1 fs_16 text-white source_ff"
              onClick={handleModal}
            >
              Submit
            </Button>
          </Modal.Footer>
        </div>
      </Modal>

      {/* Verification Success Modal */}
      <Modal show={isVerifyModalOpen} onHide={closeVerifyModal} centered>
        <div className="position-relative">
          <a className="" href="#">
            <Image
              onClick={closeVerifyModal}
              className="position-absolute mt-2 me-2 end-0 top-0"
              width={15}
              src={cross_icon}
              alt="cross_icon"
            />
          </a>
          <Modal.Header className="flex-column">
            <Modal.Title className="text-center flex-column d-flex mt-3 red_ff fs_24">
              <div className="d-flex justify-content-center">
                <Image width={100} src={Success_icon} alt="Success_icon" />
              </div>
              <h5 className=" text-black fw-semibold red_ff mt-3 fs_20">
                {" "}
                Verification Successful
              </h5>
            </Modal.Title>
            <p className="red_ff mt-2 color_lightblack fs_16 fw-normal text-center mb-0">
              You have successfully verified your mobile number and email
              address.
            </p>
          </Modal.Header>
        </div>
      </Modal>
    </>
  );
};

export default VerificationCode;
