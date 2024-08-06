"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
// import { GoChevronDown } from "react-icons/go";
import { Col, Form, Nav, Row, Tab, Modal, Button } from "react-bootstrap";
import qus_icon from "../../../../public/assets/images/svg/qus_icon.svg";
import dowload_icon from "../../../../public/assets/images/svg/dowload_icon.svg";
import cercle_Image from "../../../../public/assets/images/svg/cercle_img.svg";
import blue_image from "../../../../public/assets/images/svg/blue_box.svg";
import yellow_image from "../../../../public/assets/images/svg/yellow_box.svg";
import cercle_Img from "../../../assets/images/svg/HDFC_Card.svg";
import limit_Img from "../../../assets/images/svg/limit_icon.svg";
import edit_Img from "../../../assets/images/svg/edit_icon.svg";
import card_icon from "../../../../public/assets/images/svg/card_icon.svg";

import "../../Dashboard/HomeDashboard/homedashboard.css";
import DownloadCardModal from "../FamilyMember/DownloadCardModal";
import Layout from "@/app/components/Layout/Laytout";

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [limitshowModal1, setLimitShowModal1] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleShowModal1 = () => setShowModal1(true);
  const handleLimitShowModal = () => setLimitShowModal1(true);
  const [toggleState, setToggleState] = useState(false);
  const [showNewModal, setShowNewModal] = useState(false);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  const handleDocumentClick = (event) => {
    // Check if the click was outside the modal
    if (showModal) {
      setShowModal(false);
    }
  };

  useEffect(() => {
    if (showModal) {
      document.addEventListener("click", handleDocumentClick);
    } else {
      document.removeEventListener("click", handleDocumentClick);
    }

    // Clean up the event listener when the component is unmounted
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [showModal]);

  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const handleCloseDownloadModal = () => setShowDownloadModal(false);
  const handleShowDownloadModal = () => setShowDownloadModal(true);

  const handleShowNewModal = () => setShowNewModal(true);
  const handleCloseNewModal = () => setShowNewModal(false);
  const handleLimitModalClose = () => setLimitShowModal1(false);
  const handleModalClose1 = () => setShowModal1(false);
  const handleModalShow = () => setShowModal(true);
  return (
    <Layout>
      {showModal && (
        <div className={`${showModal === true && "custom_all_dark"}`}></div>
      )}
      <div className="px-2">
        <div className="pb-4 pt-3 ">
          <Row>
            <Col xl={7}>
              <Row>
                <Col md={7} className="  mt-md-0  rounded-2 ">
                  <div className="card pt-4  d-flex flex-column justify-content-between h-100 p-md-4 p-3 border-0">
                    <div>
                      <p className=" fs_18 red_ff fw-normal mb-0 dashboard-text-color">
                        Current Balance
                      </p>
                      <h3 className=" fs_36 red_ff fw-bold">$116.30</h3>
                    </div>
                    <div className="d-flex align-items-end justify-content-between">
                      <div>
                        <p className="fs_16 red_ff mb-0 fw-normal dashboard-text-color">
                          Card Number
                        </p>
                        <h3 className=" fs_20 red_ff mb-0 fw-semibold">
                          046 8311 6661
                        </h3>
                      </div>

                      <div className="d-flex gap-2 align-items-center">
                        <div className="position-relative">
                          <Image
                            className=" position-sticky z_index2"
                            src={qus_icon}
                            alt="qus_icon"
                            onClick={handleShowModal}
                            style={{
                              cursor: "pointer",
                              width: "36px",
                              height: "36px",
                            }}
                          />

                          {showModal && (
                            <div className="overlay">
                              <div className=" red_ff rounded-3 text-center p-3 bg-white custom_pop_w z_index position-absolute top-0 mt-5">
                                <p className=" fs_14">
                                  Lost Card / Request<br></br> Replacement for
                                  Card ?
                                </p>
                                <span
                                  onClick={handleShowNewModal}
                                  style={{ cursor: "pointer" }}
                                  className=" color_blue text-decoration-underline"
                                >
                                  Click here
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                        <Image
                          onClick={handleShowDownloadModal}
                          src={dowload_icon}
                          alt="dowload_icon"
                          style={{ width: "36px", height: "36px" }}
                        />
                      </div>
                    </div>
                  </div>
                </Col>

                <Col md={5} className="mt-4  mt-md-0  rounded-2 ">
                  <div className="card  d-flex flex-column justify-content-between h-100 p-md-4 p-3 border-0">
                    <div className="d-flex justify-content-between align-items-center pb-4">
                      <p className="fs_20 red_ff fw-semibold dashboard-text-color mb-0">
                        Summary
                      </p>
                      <span>
                        <Form.Select
                          className=" py-1"
                          aria-label="Default select example"
                        >
                          <option>Year</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </Form.Select>
                      </span>
                    </div>
                    <div className="d-flex align-items-center  justify-content-between">
                      <Image
                        width={130}
                        src={cercle_Image}
                        alt="cercle_Image"
                      />
                      <div>
                        <div className="d-flex align-items-center gap-1">
                          <Image src={blue_image} alt="blue_image" />
                          <p className="mb-0 fs_13 dashboard-text-color">
                            Auto
                          </p>
                        </div>
                        <div className="d-flex mt-3 align-items-center gap-1">
                          <Image src={yellow_image} alt="yellow_image" />
                          <p className="mb-0 fs_13 dashboard-text-color">
                            Manual
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={12} className="mt-4">
                  <div className="card p-md-4 p-3 border-0">
                    <div className="d-flex justify-content-between align-items-center">
                      <h5 className="fs_20 dashboard-text-color fw-semibold source_ff">
                        Recent Usage
                      </h5>
                      <a
                        className="tdn fw-semibold red_ff fs_14 text-decoration-underline"
                        href="#"
                      >
                        View All
                      </a>
                    </div>
                    <div className="d-flex mt-3 justify-content-between align-items-center">
                      <div>
                        <p className="mb-0 fs_16 red_ff dashboard-text-color fw-normal">
                          Manual Recharge
                        </p>
                        <p className="mb-0 red_ff fs_14 text-color">
                          04 January 2024
                        </p>
                      </div>
                      <p className="fs_20 red_ff fw-semibold mb-0  dashboard-text-color">
                        $1.33
                      </p>
                    </div>
                    <div className="border mt-3"></div>
                    <div className="d-flex mt-3 justify-content-between align-items-center">
                      <div>
                        <p className="mb-0 fs_16 dashboard-text-color red_ff fw-normal">
                          Auto Top-Up
                        </p>
                        <p className="mb-0 red_ff fs_14 text-color">
                          04 January 2024
                        </p>
                      </div>
                      <p className="fs_20 red_ff fw-semibold mb-0 dashboard-text-color">
                        $103.21
                      </p>
                    </div>
                    <div className="border mt-3"></div>
                    <div className="d-flex mt-3 justify-content-between align-items-center">
                      <div>
                        <p className="mb-0 dashboard-text-color fs_16 red_ff fw-normal">
                          Manual Recharge
                        </p>
                        <p className="mb-0 red_ff fs_14 text-color">
                          04 January 2024
                        </p>
                      </div>
                      <p className="fs_20 red_ff fw-semibold mb-0 dashboard-text-color">
                        $2.36
                      </p>
                    </div>
                    <div className="border mt-3"></div>
                    <div className="d-flex mt-3 justify-content-between align-items-center">
                      <div>
                        <p className="mb-0 dashboard-text-color fs_16 red_ff fw-normal">
                          Manual Recharge
                        </p>
                        <p className="mb-0 red_ff fs_14 text-color">
                          04 January 2024
                        </p>
                      </div>
                      <p className="fs_20 red_ff fw-semibold mb-0 dashboard-text-color">
                        $1.36
                      </p>
                    </div>
                    <div className="border mt-3"></div>
                    <div className="d-flex mt-3 justify-content-between align-items-center">
                      <div>
                        <p className="mb-0 dashboard-text-color fs_16 red_ff fw-normal">
                          Auto Top-Up
                        </p>
                        <p className="mb-0 red_ff fs_14 text-color">
                          04 January 2024
                        </p>
                      </div>
                      <p className="fs_20 red_ff fw-semibold mb-0 dashboard-text-color">
                        $5.45
                      </p>
                    </div>
                    <div className="border mt-3"></div>
                    <div className="d-flex mt-3 justify-content-between align-items-center">
                      <div>
                        <p className="mb-0 dashboard-text-color fs_16 red_ff fw-normal">
                          Auto Top-Up
                        </p>
                        <p className="mb-0 red_ff fs_14 text-color">
                          04 January 2024
                        </p>
                      </div>
                      <p className="fs_20 red_ff fw-semibold mb-0 dashboard-text-color">
                        $5.45
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xl={5} className="mt-4 mt-xl-0">
              <div className="card h-100 red_ff d-flex flex-column flex-grow-1 border-0 p-md-4 p-3">
                <div>
                  <div className="d-md-flex flex-wrap justify-content-between align-items-center">
                    <span className="">
                      <p className="fs_24 fw-semibold red_ff  dashboard-text-color">
                        Prepaid Recharge
                      </p>
                    </span>
                  </div>
                  <p className=" fs_14 color_lightblack">
                    With auto recharge, we will recharge your card / fob when
                    your balance fails below the selected threshold.
                  </p>
                  <div className="d-flex justify-content-between mt-4">
                    <div>
                      <div className="d-flex gap-2 align-items-center">
                        <p className="mb-0 fs_17 fw-semibold ">Credit Limit</p>
                        <Image
                          className="mt-1"
                          src={limit_Img}
                          alt="cercle_Image"
                        />
                      </div>
                      <div>
                        <div className="d-flex gap-2 mt-1 align-items-center">
                          <p className="mb-0 fs_17 fw-semibold ">$20,000.00 </p>
                          <a
                            onClick={handleLimitShowModal}
                            className=" color_blue text-decoration-underline"
                            href="#"
                          >
                            Update Limit
                          </a>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className=" gap-2 align-items-center">
                        <p className="mb-0 fs_17 fw-semibold ">
                          Billing Frequency
                        </p>
                        <div className="d-flex align-items-center gap-1">
                          <p className="mb-0">Monthly</p>
                          <span>|</span>
                          <div className="d-flex align-items-center gap-1">
                            <Image
                              className="mt-1 cursor-pointer"
                              src={edit_Img}
                              alt="cercle_Image"
                            />
                            <a
                              className=" text-decoration-underline color_blue"
                              href="#"
                            >
                              Edit
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="box mt-4 p-3 rounded-2">
                    <div className="d-flex align-items-center justify-content-between">
                      <h4 className=" fs_20 mb-0 red_ff">Latest Bill</h4>
                      <a
                        className=" text-decoration-underline color_blue"
                        href="#"
                      >
                        View History
                      </a>
                    </div>
                    <div className="border mt-3"></div>
                    <div className="d-flex mt-4 justify-content-between align-items-center">
                      <p className="mb-0">Amount</p>
                      <p className="mb-0">Daue date : 28 Feb 2024</p>
                    </div>
                    <h4 className=" fs_24 mt-2 red_ff fw-semibold">$107.52</h4>
                    <a
                      className="mt-2 text-decoration-underline color_blue"
                      href="#"
                    >
                      Pay now and get 10% Flat off
                    </a>
                  </div>
                  <h5 className=" fs_18 red_ff fw-semibold mt-4">
                    Payment From
                  </h5>
                  <div className="card p-2 mt-2">
                    <div className="d-flex align-items-center justify-content-between ">
                      <div className="d-flex w-100 align-items-center">
                        <Image src={card_icon} alt="card_icon" />
                        <input
                          className=" w-100 border-0 px-3"
                          type="password"
                          placeholder="**** **** **** 1234"
                        />
                      </div>
                      <button className=" bg_yellow py-1 rounded-2 border-0 px-2 red_ff fs_13">
                        Primary
                      </button>
                    </div>
                  </div>
                  <button className=" red_ff color_blue mb-2 py-2 custom_bolrder mt-3">
                    Add Other Payment Method
                  </button>

                  <span
                    onClick={handleShowModal1}
                    className="mb-5 cursor-pointer text-decoration-underline color_blue red_ff mt-2"
                  >
                    Manage Card
                  </span>
                  <div
                    className="d-flex flex-column justify-content-end"
                    style={{ marginTop: "120px" }}
                  >
                    <Button className="w-100 py-2 fs-16 fw-semibold rounded-2 bg-primary text-white">
                      Pay Now
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>

          <Modal
            className=" red_ff"
            centered
            show={showNewModal}
            onHide={handleCloseNewModal}
          >
            <Modal.Header className="border-0" closeButton></Modal.Header>
            <Modal.Body className="text-center py-0 ">
              <h4 className=" fw-semibold fs_24 pt-3">
                Damage or Lost your Card?
              </h4>
              <p className=" fs_16 color_lightblack">
                Don’t worry, we’re here to help!
              </p>
              <Image
                className="mt-2"
                width={230}
                src={cercle_Img}
                alt="cercle_Image"
              />
              <p
                style={{ maxWidth: "370px" }}
                className=" fs_16 mx-auto mt-3 mb-0 color_lightblack"
              >
                We will issue you a new card within 3-5 business days. Your
                digital card will remain unchanged.
              </p>
              <p
                style={{ maxWidth: "370px" }}
                className=" fs_16 mx-auto pt-3 color_lightblack"
              >
                Your physical Partnerbank Credit card is now cancelled. You can
                proceed to issue a new card.
              </p>
            </Modal.Body>
            <Modal.Footer className="border-0">
              <button
                className="w-100 bg_darkblue py-3 border-0 text-white fw-medium rounded-2 mb-3"
                onClick={handleCloseNewModal}
              >
                Save Changes
              </button>
            </Modal.Footer>
          </Modal>

          <DownloadCardModal
            show={showDownloadModal}
            handleClose={handleCloseDownloadModal}
          />
          <Modal show={showModal1} centered onHide={handleModalClose1}>
            <Modal.Header closeButton className="border-0 px-4">
              <Modal.Title className="red_ff">Manage Card</Modal.Title>
            </Modal.Header>
            <Modal.Body className="border-0 pt-1 px-4">
              <div className="card p-2 mt-2">
                <div className="d-flex align-items-center justify-content-between ">
                  <div className="d-flex w-100 align-items-center">
                    <Image src={card_icon} alt="card_icon" />
                    <input
                      className=" w-100 border-0 px-3"
                      type="password"
                      placeholder="**** **** **** 1234"
                    />
                  </div>
                  <button className=" bg_yellow py-1 rounded-2 border-0 px-2 red_ff fs_13">
                    Primary
                  </button>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer className="border-0 pt-5 mt-5 px-4">
              <Button className="w-100 py-2 fs-16 fw-semibold mt-5 rounded-2 bg-primary text-white">
                Add Backup Payment Method
              </Button>
            </Modal.Footer>
          </Modal>
          <Modal show={limitshowModal1} centered onHide={handleLimitModalClose}>
            <Modal.Header closeButton className="border-0 px-4"></Modal.Header>
            <Modal.Body className="border-0 pt-1 px-4">
              <h4 className=" fs_24 fw-semibold text-center red_ff mt-2 mb-3">
                Update Credit Limit
              </h4>
              <div className="d-flex mt-4 flex-column">
                <label className="px-0 red_ff" htmlFor="#">
                  Current Credit Limit
                </label>
                <input
                  className="py-2 mt-2 px-3 rounded-2 w-100 border-body border"
                  type="text"
                />
              </div>
              <div className="d-flex mt-2 flex-column">
                <label className="px-0 red_ff" htmlFor="#">
                  New Credit Limit
                </label>
                <input
                  placeholder="$50,000"
                  className="py-2 fw-bold mt-2 px-3 rounded-2 w-100 border-body border"
                  type="text"
                />
              </div>
              <div className="d-flex mt-2 flex-column">
                <label className="px-0 red_ff" htmlFor="#">
                  Billing Frequency
                </label>
                <input
                  placeholder="Monthly"
                  className="py-2 fw-bold mt-2 px-3 rounded-2 w-100 border-body border"
                  type="text"
                />
              </div>
            </Modal.Body>
            <Modal.Footer className="border-0 mb-3 px-4">
              <Button className="w-100 py-2 fs-16 fw-semibold rounded-2 bg-primary text-white">
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
