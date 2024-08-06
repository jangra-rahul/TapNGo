"use client";
import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import logo from "../../../assets/images/svg/tapngologo.svg";
import logo2 from "../../../assets/images/svg/logo2.svg";
import profile from "../../../assets/images/svg/profile_icon.svg";
import downloadicon from "../../../assets/images/svg/downloadicon.svg";
import shareicon from "../../../assets/images/svg/shareicon.svg";
import icon2 from "../../../assets/images/svg/error.svg";
import pay from "../../../assets/images/svg/pay.svg";
import visa2 from "../../../assets/images/svg/visa2.svg";
import noti_icon from "../../../../public/assets/images/svg/notifi_icon.svg";
import resicon from "../../../assets/images/svg/responsiveicon.svg";
import { Accordion, Card, Form } from "react-bootstrap";
import Image from "next/image";
import "./style.css";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="containerr">
        <Row className="py-3 px-4  bg-white border border-bottom-1">
          <div
            className="d-lg-flex align-items-center full-width  d-flex    w-100 pt-1  justify-content-between"
            style={{ width: "100vw" }}
          >
            <div className="d-md-flex d-lg-flex gap-5   ">
              <p className="headingimg m-0 " style={{ paddingLeft: "34px" }}>
                <Image src={resicon} alt="" className="arrow-icon" />
                <Image src={logo} alt="" />
              </p>

              <p className="ps-2 mt-2  mb-0  ">
                <h6
                  className="mb-0 fs_20  hey  fw-normal red-ff-family"
                  style={{ color: "black" }}
                >
                  Hey!
                </h6>
                <h4
                  className="mb-0   andrew fs_24 fw-semibold red-ff-family mt-1 text-nowrap"
                  style={{ color: "black" }}
                >
                  Andrew J.
                </h4>
              </p>
            </div>
            <div
              className="d-flex gap-4 align-items-center w-100 res-bg pe-2  justify-content-end"
              style={{ marginTop: "-11px", paddingRight: "20px" }}
            >
              <Form.Select
                className="rounded-5 d-none d-md-flex"
                style={{ maxWidth: "240px", padding: "12px 15px" }}
                aria-label="Default select example"
              >
                <option>Family Member Account</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <div>
                <Link href="/Dashboard/NotificationPage">
                  <Image
                    src={noti_icon}
                    alt="noti_icon"
                    width={40}
                    height={40}
                  />
                </Link>
              </div>

              <div className="accordion-container">
                <Accordion className="w-100">
                  <Accordion.Item
                    eventKey="0"
                    // className="position-relative bg-white"
                    className={`position-relative  ${
                      isOpen ? "bg-white rounded-5 border border-1" : ""
                    }`}
                  >
                    <Accordion.Header onClick={() => setIsOpen(!isOpen)}>
                      <div className="d-flex align-items-center gap-2">
                        <Image
                          src={profile}
                          alt="profile"
                          width={38}
                          height={33}
                        />
                        <div className="d-md-block d-none">
                          <h6 className="mb-0 fs_14">Sagar M.</h6>
                          <p className="mb-0 fs_13 mt-1">#23543</p>
                        </div>
                      </div>
                    </Accordion.Header>

                    <Accordion.Body
                      className={`custom-accordion-body ${
                        isOpen ? "open" : "closed"
                      }`}
                    >
                      <Link href={"/Dashboard/Profile"}>
                        <p className="mb-0 color_lightblack red-ff-family ">
                          My Profile
                        </p>
                      </Link>

                      <div className="border"></div>
                      <Link href={"/Dashboard/authPages"}>
                        <p className="mb-0 color_lightblack red-ff-family ">
                          Log out
                        </p>
                      </Link>
                    </Accordion.Body>
                    {/* </div> */}
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </Row>
        <div className="section py-5">
          <div className=" mein ">
            <span
              className="w-100 "
              style={{
                backgroundColor: "#E7EFFE",
                padding: "1.4rem 0rem",
                borderRadius: "7px 7px 0px 0px",
              }}
            >
              <Image src={logo2} alt="" />
            </span>

            <span className="pt-4">
              <Image
                src={icon2}
                alt=""
                style={{ height: "40px", width: "40px" }}
              />
            </span>

            <p className=" red-ff-family pt-3 mb-0 custom-style">
              Payment Error
            </p>
            <p
              className="red-ff-family fw-normal pt-1 fs_16 w-100 "
              style={{ color: "#021536", wordSpacing: "3px" }}
            >
              Receipt #1499-7244
            </p>
            <hr className="w-100" />

            <div className="d-flex flex-column">
              <p className="red-ff-family fw-normal mb-0 fs_16 ">
                Payment was Unsuccessful.
              </p>
              <p className="red-ff-family mb-0 fw-normal fs_16 ">
                See{" "}
                <span style={{ color: "#1364F1 " }}>
                  https://stripe.com/api{" "}
                </span>
                for details, or email<span>support@stripr.com</span> <br /> if
                you have any questions.
              </p>
            </div>

            <hr className="w-100" />
            <p
              className="fs_14 fw-normal w-100 red-ff-family"
              style={{
                color: "#808080",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              loremipsum is a simply dummy text used in typing industry since
              1500s for <br /> the typography purpose and alignments
            </p>
            <button
              className="source-family rounded-2 text-white fs_16 fw-medium w-100 py-3"
              style={{
                backgroundColor: "#1364F1",
                color: "white !important",
                borderColor: "transparent",
              }}
            >
              Retry Again
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
