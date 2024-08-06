"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Row, Col, Button, Form } from "react-bootstrap";
import user from "../../../../public/assets/images/svg/userimg.svg";
import DownloadCardModal from "../FamilyMember/DownloadCardModal";
import Cards from "./Cards";
import SocialMedia from "./SocialMedia";
import CarRegistration from "./Carregisteration";
import PostpaidAccountModal from "./PostpaidAccountModal";
import "./profile.css";
import Layout from "@/app/components/Layout/Laytout";

type ComponentType = "Profile" | "Cards" | "SocialMedia" | "CarRegistration";

const Profile = () => {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showPostpaidModal, setShowPostpaidModal] = useState(false);
  const [activeComponent, setActiveComponent] =
    useState<ComponentType>("Profile");

  const handleCloseDownloadModal = () => setShowDownloadModal(false);
  const handleShowPostpaidModal = () => setShowPostpaidModal(true);
  const handleClosePostpaidModal = () => setShowPostpaidModal(false);

  const handleComponentChange = (component: ComponentType) => () =>
    setActiveComponent(component);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <Layout>
        <div className="px-3">
          <div className="rounded-3 ">
            <Row className="justify-content-center  text-nowrap bg-white mt-4 rounded-3 ">
              <div className="d-flex flex-wrap gap-md-5 gap-sm-4 gap-3 mt-4 p-0 m-0 ps-md-5 ps-4 text-nowrap">
                <p
                  className={`text-sm fs_22 red_ff text-color fw-normal C-pointer m-0 p-0 ${
                    activeComponent === "Profile"
                      ? "active text-primary fw-semibold"
                      : ""
                  }`}
                  onClick={handleComponentChange("Profile")}
                >
                  Profile
                </p>
                <p
                  className={`text-sm fs_22 red_ff text-color fw-normal C-pointer m-0 p-0 ${
                    activeComponent === "Cards"
                      ? "active text-primary fw-semibold"
                      : ""
                  }`}
                  onClick={handleComponentChange("Cards")}
                >
                  Cards
                </p>
                <p
                  className={`text-sm fs_22 red_ff text-color fw-normal C-pointer m-0 p-0 ${
                    activeComponent === "SocialMedia"
                      ? "active text-primary fw-semibold"
                      : ""
                  }`}
                  onClick={handleComponentChange("SocialMedia")}
                >
                  Social Media
                </p>
                <p
                  className={`text-sm fs_22 red_ff text-color fw-normal C-pointer m-0 p-0 ${
                    activeComponent === "CarRegistration"
                      ? "active text-primary fw-semibold"
                      : ""
                  }`}
                  onClick={handleComponentChange("CarRegistration")}
                >
                  Car Registration
                </p>
              </div>
              <hr className="text-dark mb-0 line-margin" />
              <Row className="">
                <Col xs={12}>
                  {activeComponent === "Profile" && (
                    <Row className="justify-content-center bg-white  ps-md-3 ps-2">
                      <Col
                        xs={12}
                        md={6}
                        className="d-flex ps-md-2 ps-0 border-end border-end-3 border-2 justify-content-start flex-wrap"
                      >
                        <div className="pe-md-5">
                          <div className="d-flex  mt-3">
                            <Image
                              src={user}
                              alt="User"
                              className="Image-fluid"
                            />
                            <div className="mt-3 ms-3">
                              <p className="p-0 m-0 mb-2 fs-24 red_ff fw-semibold text-dark">
                                Andrew Jonson
                              </p>
                              <p className="fs_16 fw-medium red_ff text-dark">
                                +01 234 567 890
                              </p>
                            </div>
                          </div>

                          <Form
                            className="mt-5 text-dark"
                            onSubmit={handleSubmit}
                          >
                            <div className="d-flex flex-column responsive-display flex-md-row gap-3 ps-md-3 my-3">
                              <Form.Group
                                className="mb-3 w-100 fs_16 red_ff fw-light"
                                controlId="firstName"
                              >
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="First Name"
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3 w-100 fs_16 red_ff fw-light"
                                controlId="lastName"
                              >
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Last Name"
                                />
                              </Form.Group>
                            </div>
                            <div className="d-flex flex-column responsive-display flex-md-row gap-3 w-100 my-3 ps-md-3">
                              <Form.Group
                                className="mb-3 w-100 fs_16 red_ff fw-light"
                                controlId="email"
                              >
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                  type="email"
                                  placeholder="example@gmail.com"
                                />
                              </Form.Group>
                              <Form.Group
                                className="mb-3 w-100 fs_16 red_ff fw-light"
                                controlId="mobile"
                              >
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control
                                  type="tel"
                                  placeholder="+01 123 456 789"
                                />
                              </Form.Group>
                            </div>
                            <div className="d-flex flex-column responsive-display flex-md-row gap-3 w-100 my-3 ps-md-3">
                              <Form.Group
                                className="mb-3 w-100 fs_16 red_ff fw-light"
                                controlId="dob"
                              >
                                <Form.Label>Date of Birth</Form.Label>
                                <Form.Control type="date" />
                              </Form.Group>
                              <Form.Group
                                className="mb-3 w-100 fs_16 red_ff fw-light"
                                controlId="corporateCard"
                              >
                                <Form.Label>Corporate Card</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="04683116661"
                                />
                              </Form.Group>
                            </div>
                            <Form.Group
                              className="mb-3 responsive-display ps-md-3 w-50 fs_16 red_ff fw-light"
                              controlId="accountType"
                            >
                              <Form.Label>Account Type</Form.Label>
                              <Form.Control type="text" placeholder="Prepaid" />
                            </Form.Group>
                            <div className="ps-md-3 mb-3  w-100 text-dark">
                              <Button type="submit" className="w-100 py-3 mt-3">
                                Save Changes
                              </Button>
                            </div>
                            <div className="pb-4">
                              <span className=" text-decoration-underline my-2 color_blue red_ff ps-md-3 fw-semibold">
                                Close Account
                              </span>
                            </div>
                          </Form>
                        </div>
                      </Col>
                      <Col
                        xs={12}
                        md={6}
                        className="mt-4 mt-md-0 ps-md-5 ps-3 text-dark"
                      >
                        <p className="fs_20 red_ff fw-semibold mt-4">
                          Account Details
                        </p>
                        <div className="d-flex gap-5 custom-flex flex-wrap">
                          <div className="d-flex flex-column text-start">
                            <p className="p-0 m-0 fs-16 fw-light red_ff text-nowrap">
                              Account Type
                            </p>
                            <p className="fs-20 red_ff fw-semibold">Prepaid</p>
                          </div>
                          <div className="d-flex flex-column">
                            <p className="p-0 m-0 fs-16 fw-light red_ff text-nowrap">
                              Last Updated on
                            </p>
                            <p className="fs-20 red_ff fw-semibold">
                              12-02-2024
                            </p>
                          </div>
                          <button
                            className="border-0 sm-fs_14 mb-3 fw-medium px-3 py-1 rounded-2 postpaid-button"
                            onClick={handleShowPostpaidModal}
                          >
                            Request Postpaid Account
                          </button>
                        </div>
                      </Col>
                    </Row>
                  )}
                  {activeComponent === "Cards" && (
                    <Cards onShowProfile={handleComponentChange("Profile")} />
                  )}
                  {activeComponent === "SocialMedia" && <SocialMedia />}
                  {activeComponent === "CarRegistration" && <CarRegistration />}
                </Col>
              </Row>
            </Row>

            <DownloadCardModal
              show={showDownloadModal}
              handleClose={handleCloseDownloadModal}
            />
            <PostpaidAccountModal
              show={showPostpaidModal}
              handleClose={handleClosePostpaidModal}
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Profile;
