"use client";
import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import user from "../../../../public/assets/images/svg/userimg.svg";
import edit_icon from "../../../assets/images/svg/edit_img.svg";
import Image from "next/image";

const SocialMedia = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-white mt-3">
      <Row className="mb-4 ps-3 pt-3 bg-white">
        <div className="d-flex gap-3">
          <div className="position-relative">
            <Image src={user} alt="User" className="Image-fluid" />
            <Image
              src={edit_icon}
              alt="edit_icon"
              className="edit_icon cursor-pointer position-absolute bottom-0"
              style={{ right: "-7px", cursor: "pointer" }}
            />
          </div>
          <div className="mt-3 ms-3">
            <p className="p-0 m-0 fs_24 red_ff fw-semibold text-dark">
              Andrew Jonson
            </p>
            <p style={{ color: "#585858" }} className="fs_16 fw-medium red_ff">
              +01 234 567 890
            </p>
          </div>
        </div>
        <Row className="bg-white d-flex flex-column">
          <Form onSubmit={handleSubmit} className="mb-4 ps-3 pt-3">
            <Col xs={12} md={6}>
              <Form.Group
                className="mb-3  sm-w-100 dashboard-text-color"
                controlId="instagram"
              >
                <Form.Label className=" dashboard-text-color text-dark">
                  Instagram
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="https://www.instagram.com/notdummy/?hl=en"
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group
                className="mb-3  sm-w-100  dashboard-text-color"
                controlId="linkedin"
              >
                <Form.Label className="  text-dark">LinkedIn</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="https://www.linkedin.com/in/dummy-link-775982111/?original..."
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group
                className="mb-3 sm-w-100  dashboard-text-color "
                controlId="twitter"
              >
                <Form.Label className=" dashboard-text-color text-dark">
                  Twitter
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="https://twitter.com/dummy?ref_src=twsrc%5Egoogle%7Ctwcamp..."
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group
                className="mb-3  sm-w-100  dashboard-text-color"
                controlId="facebook"
              >
                <Form.Label className=" dashboard-text-color text-dark">
                  Facebook
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="https://insideablog.wordpress.com/2011/04/14/facebook..."
                />
              </Form.Group>
            </Col>

            <Button
              variant="primary"
              type="submit"
              className=" mt-3 w-50 py-3 sm-w-100  "
            >
              Save Changes
            </Button>
          </Form>
        </Row>
      </Row>
    </div>
  );
};

export default SocialMedia;
