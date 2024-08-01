"use client";
import React, { useState } from "react";
import { Row, Col, Button, Card, Form } from "react-bootstrap";
import card from "../../../../public/assets/images/svg/card.svg";
import greenball from "../../../../public/assets/images/svg/greenball.svg";
import plus from "../../../../public/assets/images/svg/plus.svg";
import HDFC_Card from "../../../../public/assets/images/svg/HDFC_Card.svg";
import Arrow from "../../../../public/assets/images/svg/arrow.svg";
import ModalComponent from "./ModalComponent";
import DownloadCardModal from "./DownloadCardModal";
import Image from "next/image";
import "../FamilyMember/FamilyMember.css";
import Link from "next/link";
import Layout from "@/app/components/Layout/Laytout";
import TransferCardModal from "./TransferModal";

const FamilyMember = () => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showTransferModal, setShowTransferModal] = useState(false);
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);

  const handleCloseDownloadModal = () => setShowDownloadModal(false);
  const handleShowDownloadModal = () => setShowDownloadModal(true);

  const handleCloseTransferModal = () => setShowTransferModal(false);
  const handleShowTransferModal = () => setShowTransferModal(true);

  const handleCloseAddMemberModal = () => setShowAddMemberModal(false);
  const handleShowAddMemberModal = () => setShowAddMemberModal(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleCloseAddMemberModal();
    handleCloseTransferModal();
  };

  return (
    <Layout>
      <div className="px-2">
        <div className="py-1 mt-3 px-4 rounded-2 bg-white">
          <h1 className="pb-2 fw-semibold fs_28  red_ff dashboard-text-color pt-4">
            Family Members
          </h1>
          <Row className="px-2">
            <Col xs={12} md={3} className="mb-4 m-0 p-0">
              <Card className="border-color d-flex flex-column justify-content-between pb-3 h-100 m-0">
                <Card.Body className="p-0">
                  <div className="d-flex justify-content-between m-0 p-0 py-3 align-items-center px-3">
                    <p className="fs_20 fw-semibold red_ff dashboard-text-color m-0 p-0">
                      Cards List
                    </p>
                    <Image
                      className="custom-plus-width m-0 p-0"
                      src={plus}
                      alt="Add Card"
                    />
                  </div>
                  <div className="d-flex bg-lightblue p-0 justify-content-between">
                    <div className="ms-3 ps-2 pt-3 ">
                      <p className="fs_18 fw-medium red_ff dashboard-text-color text-nowrap m-0 pb-1">
                        Andrew,s Card
                      </p>
                      <p className="fs_14 m-0 font-color1 red_ff light-text-color">
                        Personal Card
                      </p>
                      <div className="d-flex align-items-center pt-1 ">
                        <Image src={greenball} alt="Active" />
                        <p className="fs_14 ms-2 p-0  font-color1 red_ff m-0 d-flex align-items-center light-text-color">
                          Active
                        </p>
                      </div>
                    </div>

                    <div className="text-end pt-4 p-0 m-0">
                      <Image src={card} alt="Card" className="img-fluid" />
                    </div>
                  </div>
                </Card.Body>

                <div className="d-flex px-3 justify-content-center mt-3 border-0 bg-white">
                  <Button
                    className="w-100 red_ff fs_16 rounded-1 text-white py-2 border-0 button-color fw-medium"
                    onClick={handleShowAddMemberModal}
                  >
                    Add Family Member
                  </Button>
                </div>
              </Card>
            </Col>

            <Col xs={12} md={6} className="mb-4">
              <Card className="border-color d-flex flex-column justify-content-between h-100 p-0 m-0">
                <Card.Body className="p-0">
                  <div className="d-flex justify-content-between m-0 p-0 pt-3 align-items-center px-3">
                    <p className="fs_20 fw-semibold red_ff dashboard-text-color  m-0">
                      Analytics
                    </p>
                    <Button
                      className="red_ff fs_16 rounded-1 text-white fs-sm-10 py-2 px-3 border-0 button-color fw-medium"
                      onClick={handleShowDownloadModal}
                    >
                      Download Card
                    </Button>
                  </div>
                  <hr />
                  <div className="d-flex pt-2 bg-white px-3 justify-content-between flex-wrap">
                    <div className="mb-4 red_ff">
                      <p className="fs_20 fw-semibold red_ff dashboard-text-color m-0 pb-3">
                        Overview
                      </p>
                      <p className="fs_14 m-0 light-text-color fw-normal red_ff">
                        Current Balance
                      </p>
                      <p className="fs_32 mb-4 fw-medium dashboard-text-color red_ff">
                        $12345.00
                      </p>
                      <div className="d-flex red_ff align-items-center gap-3 flex-wrap">
                        <div>
                          <p className="m-0 fs_14 light-text-color fw-normal red_ff">
                            Lifetime Credit Used
                          </p>
                          <p className="fs_16 fw-medium dashboard-text-color mt-1 red_ff">
                            $1000000.00
                          </p>
                        </div>
                        <div>
                          <p className="m-0 fs_14 red_ff fw-normal light-text-color red_ff">
                            Account Type
                          </p>
                          <p className="fs_16 fw-medium dashboard-text-color mt-1 red_ff">
                            Prepaid
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="text-end p-0 m-0   h-100">
                      <Image
                        width={280}
                        className="mb-3 h-100 img-fluid "
                        src={HDFC_Card}
                        alt="Card"
                      />
                    </div>
                  </div>
                  <hr />
                  <div>
                    <p className="ps-3 fs_20 fw-semibold red_ff dashboard-text-color">
                      Card Details
                    </p>
                    <div className="d-flex align-items-center px-3 gap-3 justify-content-between flex-wrap">
                      <Row className="w-100 justify-content-between">
                        <Col xs={6} md={8} lg={6} xl={5} className="d-flex">
                          <div>
                            <p className="m-0 fs_13 light-text-color fw-normal red_ff">
                              Card Number
                            </p>
                            <p className="fs_14 fw-semibold mt-1 red_ff flex-wrap">
                              1234 5678 0123 4567
                            </p>
                          </div>
                        </Col>
                        <Col
                          xs={6}
                          md={4}
                          lg={2}
                          xl={2}
                          className="d-flex justify-content-center"
                        >
                          <div>
                            <p className="m-0 fs_13 light-text-color fw-normal red_ff">
                              Card Type
                            </p>
                            <p className="fs_14 fw-semibold mt-1 red_ff">
                              Physical
                            </p>
                          </div>
                        </Col>
                        <Col xs={6} md={6} lg={2} xl={3} className="d-flex ">
                          <div>
                            <p className="m-0 fs_13 light-text-color fw-normal red_ff">
                              Name on Card
                            </p>
                            <p className="fs_14 fw-semibold mt-1 red_ff">
                              Andrew James
                            </p>
                          </div>
                        </Col>
                        <Col
                          xs={6}
                          md={6}
                          xl={2}
                          className="d-flex justify-content-center"
                        >
                          <div>
                            <p className="m-0 fs_13 light-text-color fw-normal red_ff">
                              Issued On
                            </p>
                            <p className="fs_14 fw-semibold mt-1 red_ff">
                              02/24
                            </p>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-end gap-3 mt-5 pt-5 bg-white border-0">
                  <Button
                    onClick={handleShowTransferModal}
                    className="  top-up-button  fw-medium px-4 my-2 mx-1 red_ff fs_14 border-0 "
                  >
                    Transfer Balance
                  </Button>
                  <Button className="  top-up-button  fw-medium px-4 my-2 mx-1 red_ff fs_14 border-0 ">
                    Top-Up Card
                  </Button>
                  <Button className="  top-up-button my-2 fw-medium px-4 mx-1 red_ff fs_14 border-0">
                    Manage card
                  </Button>
                </Card.Footer>
              </Card>
            </Col>

            <Col xs={12} md={3} className="mb-4">
              <Card className="border-color d-flex flex-column h-100 p-0 m-0 bg-white">
                <Card.Body className="p-0">
                  <div className="p-0 pt-3 px-3">
                    <p className="fs_20 fw-semibold red_ff dashboard-text-color m-0">
                      Card Preferences
                    </p>
                  </div>
                  <hr />
                  <p className="px-3 fs_18 pb-3 fw-semibold m-0">Color</p>
                  <div className="d-flex justify-content-evenly flex-nowrap">
                    <span className="circle bg-0  rounded-circle d-flex justify-content-center align-items-center text-wrap">
                      <div className="d-flex  ">
                        <Image width={20} src={Arrow} alt="" />
                      </div>
                    </span>
                    <span className="circle bg-1   rounded-circle"></span>
                    <span className="circle bg-2   rounded-circle"></span>
                    <span className="circle bg-3   rounded-circle"></span>
                    <span className="circle bg-4   rounded-circle"></span>
                  </div>
                  <div className=" d-flex justify-content-evenly flex-nowrap  pt-2 ">
                    <span className="circle bg-5 rounded-circle"></span>
                    <span className="circle bg-6 rounded-circle"></span>
                    <span className="circle bg-4 rounded-circle"></span>
                    <span className="circle bg-2 rounded-circle"></span>
                    <span className="circle bg-3 rounded-circle"></span>
                  </div>
                  <hr />
                  <div className="px-3">
                    <p className="fs_18 fw-semibold dashboard-text-color red_ff">
                      Name on Card
                    </p>
                    <Form.Select
                      className="red_ff fs_14 fw-normal"
                      aria-label="Default select example"
                    >
                      <option>Select Preference</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <ModalComponent
            show={showAddMemberModal}
            handleClose={handleCloseAddMemberModal}
            handleSubmit={handleSubmit}
          />
          <DownloadCardModal
            show={showDownloadModal}
            handleClose={handleCloseDownloadModal}
          />
        </div>

        <ModalComponent
          show={showAddMemberModal}
          handleClose={handleCloseAddMemberModal}
          handleSubmit={handleSubmit}
        />
        <DownloadCardModal
          show={showDownloadModal}
          handleClose={handleCloseDownloadModal}
        />

        <ModalComponent
          show={showAddMemberModal}
          handleClose={handleCloseAddMemberModal}
          handleSubmit={handleSubmit}
        />
        <DownloadCardModal
          show={showDownloadModal}
          handleClose={handleCloseDownloadModal}
        />
        <TransferCardModal
          show={showTransferModal}
          handleClose={handleCloseTransferModal}
          handleSubmit={handleSubmit}
        />
      </div>
    </Layout>
  );
};

export default FamilyMember;
