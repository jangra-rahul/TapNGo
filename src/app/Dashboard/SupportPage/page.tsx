"use client";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { Row, Button, Col } from "react-bootstrap";
import "./Support.css";
import greenball from "../../../../public/assets/images/svg/greenball.svg";
import pdf from "../../../../public/assets/images/svg/pdf.svg";
import cross from "../../../../public/assets/images/cross.svg";
import TicketModal from "./TicketModal";
import Image from "next/image";
import Layout from "@/app/components/Layout/Laytout";
const Support = () => {
  const [showOpenTickets, setShowOpenTickets] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const OpenTickets = [
    {
      issueType: "Request Card",
      summary: "Lorem ipsum dummy text....",
      date: "02/06/2024",
      status: "Pending",
    },
    {
      issueType: "Request Card",
      summary: "Lorem ipsum dummy text....",
      date: "02/06/2024",
      status: "Pending",
    },
    {
      issueType: "Request Card",
      summary: "Lorem ipsum dummy text....",
      date: "02/06/2024",
      status: "Pending",
    },
    {
      issueType: "Request Card",
      summary: "Lorem ipsum dummy text....",
      date: "02/06/2024",
      status: "Pending",
    },
    {
      issueType: "Request Card",
      summary: "Lorem ipsum dummy text....",
      date: "02/06/2024",
      status: "Pending",
    },
    {
      issueType: "Request Card",
      summary: "Lorem ipsum dummy text....",
      date: "02/06/2024",
      status: "Pending",
    },
    {
      issueType: "Request Card",
      summary: "Lorem ipsum dummy text....",
      date: "02/06/2024",
      status: "Pending",
    },
  ];

  const ResolvedTickets = [
    {
      issueType: "Request Card",
      summary: "Lorem ipsum dummy text....",
      date: "02/06/2024",
      status: "Resolved",
    },
    {
      issueType: "Request Card",
      summary: "Lorem ipsum dummy text....",
      date: "02/06/2024",
      status: "Resolved",
    },
    {
      issueType: "Request Card",
      summary: "Lorem ipsum dummy text....",
      date: "02/06/2024",
      status: "Resolved",
    },
    {
      issueType: "Request Card",
      summary: "Lorem ipsum dummy text....",
      date: "02/06/2024",
      status: "Resolved",
    },
    {
      issueType: "Request Card",
      summary: "Lorem ipsum dummy text....",
      date: "02/06/2024",
      status: "Resolved",
    },
    {
      issueType: "Request Card",
      summary: "Lorem ipsum dummy text....",
      date: "02/06/2024",
      status: "Resolved",
    },
    {
      issueType: "Request Card",
      summary: "Lorem ipsum dummy text....",
      date: "02/06/2024",
      status: "Resolved",
    },
  ];

  const updates = [
    {
      initial: "T",
      title: "Transaction Alert",
      description: "A new transaction of $50.25 has been detected.",
      time: "By: Support Team",
    },
    {
      initial: "T",
      title: "Transaction Alert",
      description: "A new transaction of $50.25 has been detected.",
      time: "By: Support Team",
    },
    {
      initial: "T",
      title: "Transaction Alert",
      description: "A new transaction of $50.25 has been detected.",
      time: "By: Support Team",
    },
  ];

  return (
    <>
      <Layout>
        <div className="px-3">
          <div className="border-rounded">
            <Row className=" py-3 mt-4 p-sm-0 rounded-3 bg-white ">
              <Col className="px-4 pt-2 ">
                <div className="d-flex align-items-center justify-content-between mt-3 pb-2 ">
                  <p className="fs_28 fw-semibold red_ff text-nowrap dashboard-text-color m-0 p-0 fs-sm-20">
                    Support Tickets
                  </p>
                  <span className="d-flex ">
                    <button
                      className="p-0 m-0 bg-primary rounded-2 px-3 py-2 text-white text-nowrap border-0"
                      onClick={handleShowModal}
                    >
                      Raise Ticket
                    </button>
                  </span>
                </div>
                <div className="d-flex mt-3 cusor gap-3 rounded-3">
                  <div className="fs_18  fw-semibold  red_ff text-dark">
                    <div
                      className={`fs_18 fw-semibold red_ff text-dark ${
                        showOpenTickets ? "support-page-active" : ""
                      }`}
                      onClick={() => setShowOpenTickets(true)}
                    >
                      <p className=" fs_13 red_ff fw-semibold mb-2">
                        {" "}
                        Open Tickets
                      </p>
                    </div>
                  </div>
                  <div
                    className={`fs_18 fw-semibold red_ff text-dark ${
                      !showOpenTickets ? "support-page-active" : ""
                    }`}
                    onClick={() => setShowOpenTickets(false)}
                  >
                    <p className=" fs_13 red_ff fw-semibold mb-2">
                      {" "}
                      Resolved Tickets
                    </p>
                  </div>
                </div>

                <hr className="p-0 m-0 mb-2 border-2" />

                <Table striped className="p-0 m-0 mt-4 rounded-3">
                  <thead>
                    <tr className="fs_18 fw-semibold border rounded-3 ">
                      <th className="py-2 position-relative border-0">
                        <div className="d-inline-block px-3 dashboard-text-color fs_18 red_ff fw-semibold flex-wrap">
                          Issue Type
                        </div>
                      </th>
                      <th className="py-3 fs_18 border-0  dashboard-text-color red_ff fw-semibold">
                        Summary
                      </th>
                      <th className="py-3 fs_18 border-0 dashboard-text-color red_ff fw-semibold">
                        Date
                      </th>
                      <th className="py-3 fs_18 border-0 dashboard-text-color red_ff fw-semibold">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {(showOpenTickets ? OpenTickets : ResolvedTickets).map(
                      (ticket, index) => (
                        <tr key={index} className="border fs_16 fw-light px-2 ">
                          <td className="py-3 position-relative rounded-2 border-0">
                            <div className="d-inline-block px-3 red_ff fs_16 dashboard-text-color fw-normal  ">
                              {ticket.issueType}
                            </div>
                          </td>
                          <td className="py-3 position-relative border-0 ">
                            <div className="d-inline-block red_ff fs_16 dashboard-text-color fw-normal ">
                              {ticket.summary}
                            </div>
                          </td>
                          <td className="py-3 position-relative border-0">
                            <div className="d-inline-block red_ff fs_16 dashboard-text-color fw-normal ">
                              {ticket.date}
                            </div>
                          </td>
                          <td className="py-3 position-relative border-0">
                            <div className="d-inline-block red_ff fs_16 dashboard-text-color fw-normal font-color">
                              {ticket.status}
                            </div>
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>

                  {/* </div> */}
                </Table>
                <TicketModal show={showModal} handleClose={handleCloseModal} />
              </Col>

              <Col className="pt-3 border-start border-start-2 ps-4">
                <div className=" d-flex flex-dir-col  justify-content-between mt-3  ">
                  <div className="d-flex align-items-center">
                    <div>
                      <p className="fs_22 fw-semibold red_ff mb-0 text-sm-nowrap dashboard-text-color ">
                        Request Card
                      </p>
                    </div>
                    <div className="responsive-botton">
                      <button className="Progress-button fs_13 px-3 py-1 rounded-5 mx-3">
                        <Image src={greenball} alt="" /> In Progress
                      </button>
                      <button className="Action-button fs_13 px-3 py-1 rounded-5">
                        {" "}
                        Action Required
                      </button>
                    </div>
                  </div>
                  <p className=" line-margin fs_14 red_ff fw-normal m-0 p-0 mb-0">
                    Created on
                  </p>
                </div>
                <div className="d-flex justify-content-between mt-2 align-items-center">
                  <p className="dashboard-text-color">#12143235</p>{" "}
                  <p className="fs_16 red_ff fw-normal mt-0">08-02-2024</p>
                </div>
                <div>
                  <Form>
                    <Form.Group
                      className="mt-3"
                      controlId="exampleForm.ControlInput1"
                    ></Form.Group>
                    <Form.Group
                      className="mt-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label className="dashboard-text-color fw-semibold fs_16 red_ff ">
                        Description
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id es"
                        rows={6}
                      />
                    </Form.Group>
                  </Form>
                  <div className="attachment px-2 justify-content-between align-items-center d-flex  mt-3 bg-pdf">
                    <div className="d-flex align-items-center gap-2">
                      <p className="pt-3 ps-2">
                        <Image
                          src={pdf}
                          alt="Attachment Icon"
                          style={{ height: "28px", width: "20px" }}
                        />
                      </p>
                      <span className="px-2  dashboard-text-color  ">
                        <p className="m-0 p-0 fs_13 fw-normal red_ff ">
                          Issue Screenshot
                        </p>
                        <p className="m-0 p-0 fs_13 fw-light red_ff ">3.1MB</p>
                      </span>
                    </div>
                    <span className="d-flex justify-content-center align-items-center">
                      <Image src={cross} alt="" className="ps-2 " />
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <h6 className=" red_ff fw-semibold mb-0">Updates</h6>
                  <Table striped bordered hover className="table-responsive">
                    <tbody>
                      {updates.map((update, index) => (
                        <>
                          <div key={index}>
                            <tr className="border-0 d-flex justify-content-between rounded-3">
                              <div className="d-flex gap-2 align-items-center border-0">
                                <td
                                  className={`initial${
                                    index % 2
                                  } d-flex justify-content-center px-3 initial align-items-center fs_13 border-0 rounded-5`}
                                >
                                  {update.initial}
                                </td>
                                <td className="fs_13 fw-medium red_ff border-0">
                                  <span className="fs_13 fw-bold">
                                    {update.title}
                                  </span>
                                  <br></br>
                                  12-02-2024
                                </td>
                              </div>
                              <td className="d-flex align-items-center text-start fs_13 red_ff border-0">
                                {update.description}
                              </td>
                              <td className="d-flex align-items-center text-start fs_13 red_ff border-0">
                                {update.time}
                              </td>
                            </tr>
                          </div>
                          <div className="border"></div>
                        </>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Support;
