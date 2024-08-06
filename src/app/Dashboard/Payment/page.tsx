// components/Payment.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Accordion, Card, Form } from "react-bootstrap";
import profile from "../../../assets/images/svg/profile_icon.svg";
import logo from "../../../assets/images/svg/tapngologo.svg";
import pay from "../../../assets/images/svg/pay.svg";
import visa from "../../../assets/images/svg/visa.svg";
import noti_icon from "../../../../public/assets/images/svg/notifi_icon.svg";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa6";
import Link from "next/link";
import resicon from "../../../assets/images/svg/responsiveicon.svg";
import "../../../app/Dashboard/FAQ/FaqDashboard.css";
import "./payment.css";
const Payment = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="bg-white containerr d-flex flex-column"
        style={{ height: "100vh", width: "100vw" }}
      >
        <Row className="py-3 px-4  bg-white border border-bottom-1">
          <div
            className="d-lg-flex align-items-center full-width  d-flex    w-100 pt-1  justify-content-between"
            style={{ width: "100vw" }}
          >
            <div className="d-md-flex d-lg-flex gap-5   ">
              <p className="headingimg m-0 " style={{ paddingLeft: "20px" }}>
                <Image width={35} src={resicon} alt="" className="arrow-icon" />
                <Image width={130} src={logo} alt="" />
              </p>

              <p className="ps-2 mt-2  mb-0  ">
                <h6
                  className="mb-0 fs_18  hey  fw-normal red-ff-family"
                  style={{ color: "black" }}
                >
                  Hey!
                </h6>
                <h4
                  className="mb-0   andrew fs_20 fw-semibold red-ff-family mt-1 text-nowrap"
                  style={{ color: "black" }}
                >
                  Andrew J.
                </h4>
              </p>
            </div>
            <div
              className="d-flex gap-md-4 gap-2 align-items-center w-100 res-bg pe-2  justify-content-end"
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
        <div className="d-flex flex-column justify-content-center flex-grow-1">
          <Row className=" justify-content-center align-items-center  ">
            <Col
              md={5}
              className=" border-end pe-xl-5 border-end-2 column-1 pe-4  d-flex justify-content-center  position-relative"
            >
              <div className="w-100 p-4 left-col ">
                <p className="d-flex gap-3 position-relative  header-1 align-items-baseline ">
                  <span
                    className="arrow cursor-pointer position-absolute"
                    style={{ left: "-32px", top: "1px" }}
                  >
                    <FaArrowLeft style={{ height: "24px", width: "24px" }} />
                  </span>

                  <span
                    className="bg-primary text-white d-flex justify-content-center align-items-center   rounded-circle"
                    style={{ height: "34px", width: "34px" }}
                  >
                    A
                  </span>
                  <h1 className="fs_20 fw-semibold text-center source_ff text-dark mb-0 align-items-center">
                    Adopt Cashless
                  </h1>
                </p>
                <p className="fs_16 red-ff-family fw-normal text-dark paragraph-1 mt-5 mb-0 pt-4 p-0">
                  Pay Adopt Cashless
                </p>
                <p className=" fs_36 fw-bold  red-ff-family text-dark">
                  $1029.31
                </p>
                <div className="d-flex justify-content-between text-dark paragraph-2 mt-5 pt-3 ">
                  <span className="fs_18 fw-medium red-ff-family">
                    Recharge Value
                  </span>
                  <span className="red-ff-family fw-semibold fs_18">
                    $1000.00
                  </span>
                </div>
                <div className="d-flex justify-content-between text-dark pt-4">
                  <span className="fs_18 fw-medium red-ff-family">
                    Surcharge
                  </span>
                  <span className="fs_18 fw-semibold red-ff-family">
                    $29.31
                  </span>
                </div>
                <Form.Select
                  className=" border-0 p-0 mt-2"
                  style={{ width: "30%" }}
                >
                  <option className="fs_14 fw-normal red-ff-family">
                    Dometstic
                  </option>
                  <option value="1">International</option>
                </Form.Select>
                <hr className="w-100 " style={{ color: "black" }} />
                <div className="d-flex justify-content-between text-dark fw-semibold mt-4 ">
                  <span className="fs_18 fw-medium red-ff-family">
                    Grand Total
                  </span>
                  <span className="fs_18 fw-semibold red-ff-family">
                    $1029.31
                  </span>
                </div>
              </div>
            </Col>

            <Col
              md={5}
              className=" column-2 pt-xl-0 pt-5 ps-xl-5 mt-4 mt-xl-0"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="right-col p-4 w-100">
                <div className="mt-xl-4 mt-3">
                  <p className="d-flex w-full text-center">
                    <button
                      className="btn  btn-block mb-4 w-100 fs_18 fw-semibold  source_ff"
                      style={{ backgroundColor: "#1364F1", color: "white" }}
                    >
                      <svg
                        className="me-3"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_632_9465)">
                          <path
                            d="M16.6186 0H16.7893C16.9263 1.69253 16.2803 2.95719 15.4951 3.87301C14.7247 4.78251 13.6698 5.6646 11.9636 5.53076C11.8497 3.86247 12.4968 2.69161 13.2809 1.77789C14.0081 0.92636 15.3412 0.168621 16.6186 0ZM21.7836 17.6167V17.6641C21.3041 19.1163 20.6201 20.361 19.7855 21.516C19.0235 22.5646 18.0898 23.9758 16.4225 23.9758C14.9819 23.9758 14.025 23.0494 12.5485 23.0241C10.9866 22.9988 10.1277 23.7987 8.6997 24H8.21281C7.1642 23.8482 6.31793 23.0178 5.70141 22.2695C3.88347 20.0585 2.47865 17.2025 2.21729 13.5476V12.4737C2.32794 9.85799 3.59892 7.73126 5.28829 6.70057C6.17987 6.15255 7.40553 5.68568 8.77031 5.89435C9.35521 5.98498 9.95276 6.18522 10.4765 6.38335C10.9729 6.5741 11.5937 6.9124 12.1817 6.89448C12.5801 6.88289 12.9763 6.67527 13.3779 6.52878C14.554 6.10407 15.7069 5.61718 17.2266 5.84587C19.053 6.12199 20.3493 6.93347 21.1502 8.18548C19.6052 9.16875 18.3838 10.6505 18.5925 13.1809C18.778 15.4794 20.1143 16.8241 21.7836 17.6167Z"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_632_9465">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      Pay{" "}
                    </button>
                  </p>

                  <p className="text-center mb-4">
                    <Image src={pay} alt="" className="w-100" />
                  </p>
                  <form>
                    <div
                      className="d-flex align-items-center form-div gap-3"
                      style={{ width: "100%" }}
                    >
                      <div
                        className="form-group from-div mt-3"
                        style={{ width: "80%" }}
                      >
                        <span className="position-relative label-1">
                          <label
                            htmlFor="cardNumber"
                            className="form-label red-ff-family fs_14 fw-normal"
                          >
                            Card Number
                          </label>
                          <div className="d-flex bg-white border border-1 p-2 justify-content-between align-items-center rounded-3 ">
                            <input
                              type="text"
                              id="cardNumber"
                              className="form-control border-0"
                              placeholder="1234 5678 0123 4567"
                            />

                            <Image src={visa} alt="" />
                          </div>
                        </span>
                      </div>
                      <div className="responsive-input d-flex gap-4 w-100">
                        <div
                          className="form-row  label-2  p-0 m-0 "
                          style={{ width: "45%" }}
                        >
                          <div className="col ">
                            <label
                              htmlFor="expirationDate"
                              className="form-label red-ff-family d-flex fs_14 fw-normal flex-nowrap"
                            >
                              Expiration Date
                            </label>

                            <input
                              type="text"
                              id="expirationDate"
                              className="form-control  label-2"
                              placeholder="MM / YY"
                            />
                          </div>
                        </div>
                        <div
                          className="form-row  m-0 p-0  label-3"
                          style={{ width: "45%" }}
                        >
                          <div className="col">
                            <label
                              htmlFor="cvc"
                              className="form-label red-ff-family fs_14 fw-normal"
                            >
                              CVC
                            </label>
                            <input
                              type="text"
                              id="cvc"
                              className="form-control label-2"
                              placeholder="CVC"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="d-flex flex-column mt-3 mb-4">
                      <label htmlFor="country" className="px-0">
                        Country
                      </label>
                      <select
                        id="country"
                        className="w-100 py-2 mt-2 px-2 rounded-2 border border-body"
                      >
                        <option>India</option>
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Australia</option>
                      </select>
                    </div>
                    <p className="text-muted text-xs mb-4">
                      By providing your card information, you allow Tap N Go to
                      charge your card for future payments in accordance with
                      their terms.
                    </p>

                    <Link href="/Dashboard/paymentSucces" passHref>
                      <button
                        type="submit"
                        className="btn btn-dark btn-block w-100"
                      >
                        Pay Now
                      </button>
                    </Link>
                  </form>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Payment;
