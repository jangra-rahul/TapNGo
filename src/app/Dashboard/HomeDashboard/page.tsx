"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { GoChevronDown } from "react-icons/go";
import { Col, Form, Nav, Row, Tab, Modal, Button } from "react-bootstrap";
import qus_icon from "../../../../public/assets/images/svg/qus_icon.svg";
import dowload_icon from "../../../../public/assets/images/svg/dowload_icon.svg";
import cercle_Image from "../../../../public/assets/images/svg/cercle_img.svg";
import blue_image from "../../../../public/assets/images/svg/blue_box.svg";
import yellow_image from "../../../../public/assets/images/svg/yellow_box.svg";
import cercle_Img from "../../../assets/images/svg/HDFC_Card.svg";
import Manual from "./Manual";
import Auto from "./Auto";
import Subscription from "./Subscription";
import "./homedashboard.css";
import Layout from "@/app/components/Layout/Laytout";
import DownloadCardModal from "../FamilyMember/DownloadCardModal";
import Link from "next/link";
import CreditModeModal from "./CreditModeModal";

import PhysicalCard from "./PhysicalCard";
import ChooseCardModal from "./ChooseCardModal";

type TabType = "Manual" | "Auto" | "Subscription";

const Home: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<TabType>("Manual");
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const [toggleState, setToggleState] = useState(false);
  const [showNewModal, setShowNewModal] = useState(false);

  const handleTabClick = (tab: TabType) => {
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
  const [showCreditModeModal, setShowCreditModeModal] = useState(false);

  const [showPhysicalCardModal, setShowPhysicalCardModal] = useState(false);
  // const [showChooseCardModalModal, setShowChooseCardModalModal] =
  //   useState(false);

  const handleCloseDownloadModal = () => setShowDownloadModal(false);
  const handleShowDownloadModal = () => setShowDownloadModal(true);
  const handleCreditModeModal = () => {
    setShowCreditModeModal(!showCreditModeModal);
    setShowNewModal(false);
  };
  // const handleChooseCardModalModal = () => {
  //   setShowChooseCardModalModal(!showChooseCardModalModal);
  // };

  const handlePhysicalCardModal = () =>
    setShowPhysicalCardModal(!showPhysicalCardModal);

  const handleShowNewModal = () => setShowNewModal(true);
  return (
    <Layout>
      {showModal && (
        <div className={`${showModal === true && "custom_all_dark"}`}></div>
      )}
      <div style={{ height: "96%" }} className="px-2">
        <div className="pb-4 pt-3 h-100 ps-2">
          <Row className="h-100">
            <Col xl={7} className="pe-4">
              <Row className="h-100">
                <Col md={7} className=" pe-lg-2 ps-lg-0 mt-md-0  rounded-2 ">
                  <div className="card pt-4 d-flex flex-column justify-content-between h-100 p-md-4 p-3 border-0">
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

                <Col
                  md={5}
                  className="mt-4 ps-lg-3 px-lg-0 mt-md-0  rounded-2 "
                >
                  <div className="card  d-flex flex-column justify-content-between h-100 p-md-4 p-3 border-0">
                    <div className="d-flex justify-content-between align-items-center pb-4">
                      <p className="fs_20 red_ff fw-semibold dashboard-text-color mb-0">
                        <Link href="/Dashboard/Postpaidrecharge" passHref>
                          Summary
                        </Link>
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
                <div className="px-3 d-lg-none d-block">
                  <Col xs={12} className="mt-4 px-lg-0  bg-white rounded-3 ">
                    <div
                      style={{ height: "95%" }}
                      className="card p-md-4 pt-3 px-3 border-0 overflow-auto"
                    >
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
                      <div
                        style={{ height: "550px" }}
                        className="overflow-auto mt-4"
                      >
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
                    </div>
                  </Col>
                </div>
                <Col
                  xs={12}
                  className="mt-4 px-lg-0 d-lg-block d-none bg-white rounded-3 "
                >
                  <div
                    style={{ height: "95%" }}
                    className="card p-md-4 pt-3 px-3 border-0 overflow-auto"
                  >
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
                    <div
                      style={{ height: "550px" }}
                      className="overflow-auto mt-4"
                    >
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
                  </div>
                </Col>
              </Row>
            </Col>

            <div className="px-3 pe-4 d-lg-none d-block">
              <Col xl={5} className="mt-4 mt-xl-0 ">
                <div className="card h-100 d-flex flex-column mx-3 mx-lg-0 flex-grow-1 border-0 p-md-4 p-3">
                  <div>
                    <div className="d-md-flex flex-wrap justify-content-between align-items-center">
                      <span className="">
                        <p className="fs_20 fw-semibold red_ff  dashboard-text-color">
                          {" "}
                          Prepaid Recharge{" "}
                        </p>
                      </span>
                      <div className="d-flex mt-3 mt-sm-0 text-color align-items-center gap-3">
                        <p>Auto Top-up</p>
                        <div className="border rounded-5 mb-3 m-0 ">
                          <Form className="border-1  rounded-1  ps-1 pe-2 d-flex justify-content-center">
                            <Form.Check
                              type="switch"
                              id="custom-switch"
                              label={
                                <span
                                  className={toggleState ? "color_blue" : ""}
                                >
                                  {toggleState ? "On" : "Off"}
                                </span>
                              }
                              onChange={(event) => {
                                setToggleState(event.target.checked);
                              }}
                            />
                          </Form>
                        </div>
                      </div>
                    </div>

                    <Row className="mt-4">
                      <Col
                        xs={4}
                        className="pe-0 text-center"
                        onClick={() => handleTabClick("Manual")}
                      >
                        <Nav.Link
                          href="#"
                          className={
                            selectedTab === "Manual"
                              ? " border_radius_blue color_blue"
                              : ""
                          }
                        >
                          <h3 className="red_ff fs_16">Manual</h3>
                        </Nav.Link>
                        {selectedTab === "Manual" ? (
                          <div className="mb-2   border"></div>
                        ) : (
                          <>
                            <div className="    border"></div>
                          </>
                        )}
                      </Col>
                      <Col
                        xs={4}
                        className="px-0 text-center"
                        onClick={() => handleTabClick("Auto")}
                      >
                        <Nav.Link
                          href="#"
                          className={
                            selectedTab === "Auto"
                              ? " border_radius_blue color_blue"
                              : ""
                          }
                        >
                          <h3 className="red_ff fs_16">Auto</h3>
                        </Nav.Link>
                        {selectedTab === "Auto" ? (
                          <div className="mb-3  border"></div>
                        ) : (
                          <>
                            <div className="mt-2  border"></div>
                          </>
                        )}
                      </Col>
                      <Col
                        xs={4}
                        className="ps-0 text-center"
                        onClick={() => handleTabClick("Subscription")}
                      >
                        <Nav.Link
                          href="#"
                          className={
                            selectedTab === "Subscription"
                              ? "active-tab border_radius_blue color_blue"
                              : ""
                          }
                        >
                          <h3 className="red_ff fs_16">Subscription</h3>
                        </Nav.Link>
                        {selectedTab === "Subscription" ? (
                          <div className="mb-3   border"></div>
                        ) : (
                          <>
                            <div className="mt-2   border"></div>
                          </>
                        )}
                      </Col>
                    </Row>
                  </div>
                  <Tab.Content className="mt-2 h-100">
                    <Tab.Pane
                      eventKey="Manual"
                      className={
                        selectedTab === "Manual" ? "show active h-100" : ""
                      }
                    >
                      <Manual />
                    </Tab.Pane>
                    <Tab.Pane
                      eventKey="Auto"
                      className={
                        selectedTab === "Auto" ? "show active h-100" : ""
                      }
                    >
                      <Auto />
                    </Tab.Pane>
                    <Tab.Pane
                      eventKey="Subscription"
                      className={
                        selectedTab === "Subscription"
                          ? "show active h-100"
                          : ""
                      }
                    >
                      <Subscription />
                    </Tab.Pane>
                  </Tab.Content>
                </div>
              </Col>
            </div>
            <Col xl={5} className="mt-4 mt-xl-0 ps-0 ps-xl-3">
              <div className="card h-100 d-flex flex-column m-0 flex-grow-1 border-0 p-md-4 p-3">
                <div>
                  <div className="d-md-flex flex-wrap justify-content-between align-items-center">
                    <span className="">
                      <p className="fs_20 fw-semibold red_ff  dashboard-text-color">
                        {" "}
                        Prepaid Recharge{" "}
                      </p>
                    </span>
                    <div className="d-flex mt-3 mt-sm-0 text-color align-items-center gap-3">
                      <p>Auto Top-up</p>
                      <div className="border rounded-5 mb-3 m-0 ">
                        <Form className="border-1  rounded-1  ps-1 pe-2 d-flex justify-content-center">
                          <Form.Check
                            type="switch"
                            id="custom-switch"
                            label={
                              <span className={toggleState ? "color_blue" : ""}>
                                {toggleState ? "On" : "Off"}
                              </span>
                            }
                            onChange={(event) => {
                              setToggleState(event.target.checked);
                            }}
                          />
                        </Form>
                      </div>
                    </div>
                  </div>

                  <Row className="mt-4">
                    <Col
                      xs={4}
                      className="pe-0 text-center"
                      onClick={() => handleTabClick("Manual")}
                    >
                      <Nav.Link
                        href="#"
                        className={
                          selectedTab === "Manual"
                            ? " border_radius_blue color_blue"
                            : ""
                        }
                      >
                        <h3 className="red_ff fs_16">Manual</h3>
                      </Nav.Link>
                      {selectedTab === "Manual" ? (
                        <div className="mb-2   border"></div>
                      ) : (
                        <>
                          <div className="    border"></div>
                        </>
                      )}
                    </Col>
                    <Col
                      xs={4}
                      className="px-0 text-center"
                      onClick={() => handleTabClick("Auto")}
                    >
                      <Nav.Link
                        href="#"
                        className={
                          selectedTab === "Auto"
                            ? " border_radius_blue color_blue"
                            : ""
                        }
                      >
                        <h3 className="red_ff fs_16">Auto</h3>
                      </Nav.Link>
                      {selectedTab === "Auto" ? (
                        <div className="mb-3  border"></div>
                      ) : (
                        <>
                          <div className="mt-2  border"></div>
                        </>
                      )}
                    </Col>
                    <Col
                      xs={4}
                      className="ps-0 text-center"
                      onClick={() => handleTabClick("Subscription")}
                    >
                      <Nav.Link
                        href="#"
                        className={
                          selectedTab === "Subscription"
                            ? "active-tab border_radius_blue color_blue"
                            : ""
                        }
                      >
                        <h3 className="red_ff fs_16">Subscription</h3>
                      </Nav.Link>
                      {selectedTab === "Subscription" ? (
                        <div className="mb-3   border"></div>
                      ) : (
                        <>
                          <div className="mt-2   border"></div>
                        </>
                      )}
                    </Col>
                  </Row>
                </div>
                <Tab.Content className="mt-2 h-100">
                  <Tab.Pane
                    eventKey="Manual"
                    className={
                      selectedTab === "Manual" ? "show active h-100" : ""
                    }
                  >
                    <Manual />
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="Auto"
                    className={
                      selectedTab === "Auto" ? "show active h-100" : ""
                    }
                  >
                    <Auto />
                  </Tab.Pane>
                  <Tab.Pane
                    eventKey="Subscription"
                    className={
                      selectedTab === "Subscription" ? "show active h-100" : ""
                    }
                  >
                    <Subscription />
                  </Tab.Pane>
                </Tab.Content>
              </div>
            </Col>
          </Row>

          <Modal
            className=" red_ff"
            centered
            show={showNewModal}
            onHide={() => setShowNewModal(false)}
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
                onClick={handleCreditModeModal}
              >
                Request Replacement
              </button>
            </Modal.Footer>
          </Modal>

          <DownloadCardModal
            show={showDownloadModal}
            handleClose={handleCloseDownloadModal}
          />
          <CreditModeModal
            show={showCreditModeModal}
            handleClose={handleCreditModeModal}
          />
          {/* <ChooseCardModal
            show={showChooseCardModalModal}
            handleClose={handleChooseCardModalModal}
          /> */}

          <PhysicalCard
            show={showPhysicalCardModal}
            handleClose={handlePhysicalCardModal}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
