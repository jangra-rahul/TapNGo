"use client";
import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { FaChevronRight } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FaqDashboard.css";
import Image from "next/image";
import Plus from "../../../../public/assets/images/svg/secondPlus.svg";
import Accordion from "react-bootstrap/Accordion";
import Layout from "@/app/components/Layout/Laytout";
import Link from "next/link";
const FrequentlyAskedQuestion = () => {
  const [show, setShow] = useState(false);

  const toggleDropdown = () => {
    setShow(!show);
  };

  return (
    <>
      <Layout>
        <div className="px-2 ">
          <div
            className="px-3  bg-white rounded-3   px-3 mt-4"
            style={{ minHeight: "82vh" }}
          >
            <h1 className="fs_28 fw-semibold red_ff dashboard-text-color py-3 mt-2 pt-4 px-3">
              Frequently Asked Question
            </h1>

            <Row className="py-3 mt-2 px-4">
              <Col xs={12} md={2} className="mb-4 h-100 p-0 m-0 box_size ">
                <div className="px-3 ">
                  <div
                    className=" fs_13 red_ff fw-medium"
                    style={{ position: "relative" }}
                  >
                    <div
                      style={{
                        color: "#1364F1",
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                      // onClick={toggleDropdown}
                    >
                      Money Top-Up
                      <FaChevronRight style={{ marginLeft: "auto" }} />
                    </div>
                    {/* <Dropdown
                      show={show}
                      drop="down"
                      onToggle={() => setShow(false)}
                    >
                      <Dropdown.Menu>
                        <Dropdown.Item href="#/10">$10</Dropdown.Item>
                        <Dropdown.Item href="#/20">$20</Dropdown.Item>
                        <Dropdown.Item href="#/50">$50</Dropdown.Item>
                        <Dropdown.Item href="#/100">$100</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown> */}
                  </div>
                  <hr className="p-0 " />
                  <p className=" fs_13 red_ff  p-0  ">Creating New Account</p>
                  <hr className="p-0  " />
                  <p className=" fs_13 red_ff p-0  ">My Transactions</p>
                  <hr className="p-0  " />
                  <p className=" fs_13 red_ff p-0  ">Raising a Ticket</p>
                  <hr className="p-0  " />
                  <p className=" fs_13 red_ff  p-0  ">General</p>
                  <hr className="p-0  " />
                </div>
              </Col>

              <Col
                xs={12}
                md={5}
                className="mb-4 d-flex flex-column  h-100 justify-content-between"
              >
                <Accordion defaultActiveKey="1">
                  <Accordion.Item
                    eventKey="1"
                    className="border border_black rounded-2 dashboard-text-color  fs_13  red_ff"
                  >
                    <Accordion.Header className="dashboard-text-color fs_14 fw-semibold red_ff">
                      <div className="dashboard-text-color  fs_14 fw-semibold red_ff">
                        How can I add funds to my account?
                      </div>

                      <hr />
                    </Accordion.Header>

                    <Accordion.Body>
                      <div className="border mb-3"></div>
                      <p className=" fs_13 ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="2"
                    className="border border_black  mt-3 rounded-2 "
                  >
                    <Accordion.Header className="  dashboard-text-color  fs_14 fw-semibold red_ff">
                      <div className="dashboard-text-color  fs_14 fw-semibold red_ff">
                        What payment methods are supported for topping up my
                        account?
                      </div>

                      <hr />
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="border mb-3"></div>
                      <p className=" fs_13">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="3"
                    className="border border_black mt-3 rounded-2"
                  >
                    <Accordion.Header className="  dashboard-text-color  fs_14 fw-semibold red_ff">
                      <div className="dashboard-text-color  fs_14 fw-semibold red_ff">
                        Is there a minimum or maximum limit for money top-ups?
                      </div>

                      <hr />
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="border mb-3"></div>
                      <p className=" fs_13">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="4"
                    className="border border_black mt-3 rounded-2"
                  >
                    <Accordion.Header className="  dashboard-text-color  fs_14 fw-semibold red_ff">
                      <div className="dashboard-text-color  fs_14 fw-semibold red_ff">
                        How long does it take for my account to reflect the
                        newly added funds?
                      </div>

                      <hr />
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="border mb-3"></div>
                      <p className=" fs_13">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item
                    eventKey="5"
                    className="border border_black mt-3 "
                  >
                    <Accordion.Header className="  dashboard-text-color  fs_14 fw-semibold red_ff">
                      <div className="dashboard-text-color  fs_14 fw-semibold red_ff">
                        Are there any fees associated with topping up my
                        account?
                      </div>
                      <hr />
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="border mb-3"></div>
                      <p className=" fs_13">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                      </p>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <div className=" mt-5 d-md-block d-none ">
                  <p className=" fs_16  fw-normal red_ff light-text-color">
                    Didn,t get you question answered?{" "}
                    <Link href="#" style={{ borderBottom: "1px solid blue" }}>
                      <span className=" fw-bold">Contact Us</span>
                    </Link>
                  </p>
                </div>
              </Col>

              <Col xs={12} md={5} className="mb-4 d-flex flex-column">
                <div>
                  <Accordion defaultActiveKey="0">
                    <Accordion.Item
                      eventKey="1"
                      className="border border_black  "
                    >
                      <Accordion.Header className=" dashboard-text-color  fs_14 fw-semibold red_ff">
                        <div className="dashboard-text-color  fs_14 fw-semibold red_ff">
                          How can I add funds to my account?
                        </div>

                        <hr />
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="border mb-3"></div>
                        <p className=" fs_13">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      eventKey="2"
                      className="border border_black mt-3 "
                    >
                      <Accordion.Header className=" ">
                        <div className="dashboard-text-color  fs_14 fw-semibold red_ff">
                          What payment methods are supported for topping up my
                          account?
                        </div>

                        <hr />
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="border mb-3"></div>
                        <p className=" fs_13">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      eventKey="3"
                      className="border border_black mt-3 "
                    >
                      <Accordion.Header className=" ">
                        <div className="dashboard-text-color  fs_14 fw-semibold red_ff">
                          Is there a minimum or maximum limit for money top-ups?
                        </div>

                        <hr />
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="border mb-3"></div>
                        <p className=" fs_13">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      eventKey="4"
                      className="border border_black mt-3 "
                    >
                      <Accordion.Header className=" ">
                        <div className="dashboard-text-color  fs_14 fw-semibold red_ff">
                          How long does it take for my account to reflect the
                          newly added funds?
                        </div>
                        <hr />
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="border mb-3"></div>
                        <p className=" fs_13">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item
                      eventKey="5"
                      className="border border_black mt-3 "
                    >
                      <Accordion.Header className=" ">
                        <div className="dashboard-text-color  fs_14 fw-semibold red_ff">
                          Are there any fees associated with topping up my
                          account?
                        </div>

                        <hr />
                      </Accordion.Header>
                      <Accordion.Body>
                        <div className="border mb-3"></div>
                        <p className=" fs_13">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <div className=" mt-5 d-md-none d-dlock ">
                    <p className=" fs_16  fw-normal red_ff light-text-color">
                      Didn,t get you question answered?{" "}
                      <Link href="#" style={{ borderBottom: "1px solid blue" }}>
                        <span className=" fw-bold">Contact Us</span>
                      </Link>
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default FrequentlyAskedQuestion;
