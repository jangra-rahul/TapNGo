"use client"
import React, { useState } from "react";
import and_icon from "../../../../public/assets/images/svg/or_icon.svg";
import cross_icon from "../../../../public/assets/images/svg/cross_icon.svg";
import VerificationCode from "@/app/Dashboard/authPages/VerificationCode";
import { Modal, Container, Form, Button, Card, Image } from "react-bootstrap";

const ForgotCredential = () => {
  const [isVehicleModalOpen, setIsVehicleModalOpen] = useState<boolean>(false);

  const openVehicleModal = () => {
    setIsVehicleModalOpen(true);
  };

  const closeVehicleModal = () => {
    setIsVehicleModalOpen(false);
  };

  return (
    <Container
      fluid
      className="min-vh-100 d-flex flex-column align-items-center justify-content-center bg_theme"
    >
      <Card className="custom_width p-4">
        <Card.Body className="">
          <Card.Title
            as="h4"
            className="fs_24 text-center red_ff fw_semibold mb-5"
          >
            Forgot Credential?
          </Card.Title>

          <Form>
            <Form.Group controlId="formEmailOrMobile" className="mb-4">
              <Form.Label className="red_ff fs_16 fw-semibold">
                Enter Details*
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Email ID or Mobile Number"
                className="py-2 px-3 border-2 border rounded-2"
              />
            </Form.Group>
<div>

           
            <svg width="374" height="21" viewBox="0 0 374 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="11.5" x2="170" y2="11.5" stroke="#CECECE"/>
<line x1="204" y1="11.5" x2="374" y2="11.5" stroke="#CECECE"/>
<path d="M181.48 16.176C180.701 16.176 179.976 16.032 179.304 15.744C178.632 15.4453 178.04 15.0347 177.528 14.512C177.027 13.9787 176.632 13.3653 176.344 12.672C176.056 11.968 175.912 11.2107 175.912 10.4C175.912 9.58933 176.056 8.83733 176.344 8.144C176.632 7.44 177.027 6.82667 177.528 6.304C178.04 5.77067 178.632 5.36 179.304 5.072C179.976 4.77333 180.701 4.624 181.48 4.624C182.259 4.624 182.984 4.77333 183.656 5.072C184.328 5.36 184.915 5.77067 185.416 6.304C185.928 6.82667 186.328 7.44 186.616 8.144C186.904 8.83733 187.048 9.58933 187.048 10.4C187.048 11.2107 186.904 11.968 186.616 12.672C186.328 13.3653 185.928 13.9787 185.416 14.512C184.915 15.0347 184.328 15.4453 183.656 15.744C182.984 16.032 182.259 16.176 181.48 16.176ZM181.48 15.056C182.088 15.056 182.653 14.9387 183.176 14.704C183.699 14.4693 184.157 14.1387 184.552 13.712C184.947 13.2853 185.251 12.7893 185.464 12.224C185.688 11.6587 185.8 11.0507 185.8 10.4C185.8 9.73867 185.688 9.13067 185.464 8.576C185.251 8.01067 184.947 7.51467 184.552 7.088C184.157 6.66133 183.699 6.33067 183.176 6.096C182.653 5.86133 182.088 5.744 181.48 5.744C180.872 5.744 180.307 5.86133 179.784 6.096C179.261 6.33067 178.803 6.66133 178.408 7.088C178.013 7.51467 177.704 8.01067 177.48 8.576C177.267 9.13067 177.16 9.73333 177.16 10.384C177.16 11.0453 177.267 11.6587 177.48 12.224C177.704 12.7893 178.013 13.2853 178.408 13.712C178.803 14.1387 179.261 14.4693 179.784 14.704C180.307 14.9387 180.872 15.056 181.48 15.056ZM189.377 16V4.8H193.969C194.684 4.8 195.308 4.93867 195.841 5.216C196.374 5.48267 196.79 5.856 197.089 6.336C197.388 6.816 197.537 7.38133 197.537 8.032C197.537 8.77867 197.329 9.41867 196.913 9.952C196.497 10.4747 195.926 10.8427 195.201 11.056L197.585 16H196.225L193.953 11.216H190.609V16H189.377ZM190.609 10.192H193.873C194.609 10.192 195.196 10 195.633 9.616C196.081 9.22133 196.305 8.69867 196.305 8.048C196.305 7.38667 196.081 6.864 195.633 6.48C195.196 6.08533 194.609 5.888 193.873 5.888H190.609V10.192Z" fill="#151515"/>
</svg>

</div>

            <Form.Group controlId="formCorporateCard" className="mb-4 mt-3">
              <Form.Label className="red_ff fs_16 fw-semibold">
                Corporate Card*
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your Corporate Card"
                className="py-2 px-3 border-2 border rounded-2"
              />
            </Form.Group>

            <Button
              onClick={openVehicleModal}
              className="w-100 bg_blue text-white fs_16 fw-semibold py-2 rounded-2 border-0"
            >
              Send OTP
            </Button>
          </Form>
        </Card.Body>
      </Card>

      <VerificationCode
        isModalOpen={isVehicleModalOpen}
        closeModal={closeVehicleModal}
      />
    </Container>
  );
};

export default ForgotCredential;
