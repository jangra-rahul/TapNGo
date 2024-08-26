"use client";
import React, { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/app/components/Layout/Laytout";
import Tick from "../../../../public/assets/images/svg/tick.svg";
import "./subcription.css";
const Subscription = () => {
  const [isSelect, setIsSelect] = useState<Number>(0);
  const data = [
    {
      heading: "Starter Plan",
      price: "$49",
      month: "/Month",
      info: "Basic Reporting",
      info1: "Email Reminders",
      info2: "Budgeting Tools",
      info3: "Expense Tracking",
      info4: "Customer Support",
      plan: "Upgrade Now",
      isActive: true,
    },
    {
      heading: "Basic Plan",
      price: "$99",
      month: "/Month",
      info: "Expense Tracking",
      info1: "Basic Reporting",
      info2: "Budgeting Tools",
      info3: "Email Reminders",
      info4: "Customer Support",
      plan: "Upgrade Now",
    },
    {
      heading: "Premium Plan",
      price: "$199",
      month: "/Month",
      info: "Automatic Transaction Import",
      info1: "Advanced Analytics",
      info2: "Customizable Dashboards",
      info3: "Expense Tracking",
      info4: "Financial Goal Tracking",
      plan: "Upgrade Now",
      Popular: "Popular",
    },
    {
      heading: "Platinum Plan",
      price: "$229",
      month: "/Month",
      info: "Real-Time Data Sync",
      info1: "AI-Powered Insights",
      info2: "Expense Forecasting",
      info3: "Multi-Currency Support",
      info4: "Exclusive Financial Workshops",
      plan: "Upgrade Now",
    },
  ];

  return (
    <>
      <Layout>
        <div className="px-2">
          <div
            className="rounded-2 p-md-4 p-3 mt-4 bg-white"
            style={{ minHeight: "82vh" }}
          >
            <Row className="align-items-center">
              <Col xs={12} className="ms-md-2">
                <h1 className="fs_24 fw-semibold pt-md-3 red_ff dashboard-text-color">
                  Subscription
                </h1>
                <p className="fs_16 mb-md-2 fw-normal mb-0 pt-1 red_ff sub-text-color ">
                  Take your desired plan to get access to our content easily,
                  <br /> we like to offer special license offer to our users.
                </p>
              </Col>
            </Row>
            <Row className="justify-content-center p-2">
              {data.map((row, index) => (
                <Col key={index} sm={6} xl={3} className="mb-4 px-1 px-md-2 ">
                  <Card className="bg-color p-md-3 h-100 border-0">
                    <Card.Body className="d-flex flex-column justify-content-between">
                      <div>
                        <div className="d-flex justify-content-between align-items-center">
                          <Card.Title className="fs_20 fw-medium red_ff dashboard-text-color    ">
                            {row.heading}
                          </Card.Title>
                          {row.Popular ? (
                            <>
                              <Card.Title className="fs_20 fw-medium red_ff dashboard-text-color    ">
                                <span
                                  className="fs_13 red_ff px-2 py-1 fw-semibold rounded-2"
                                  style={{
                                    backgroundColor: "#E3F4E7",
                                    color: "#0E8029",
                                  }}
                                >
                                  {row.Popular}
                                </span>
                              </Card.Title>
                            </>
                          ) : (
                            <></>
                          )}
                        </div>
                        <div className="d-flex align-items-end mar-bot-2 mb-2">
                          <p className="fs_40 mb-0 fw-semibold red_ff dashboard-text-color">
                            {row.price}
                          </p>
                          <p className="mb-2 ps-1 fs_16 red_ff fw-normal dashboard-text-color">
                            {row.month}
                          </p>
                        </div>
                        <hr />
                        <Card.Text className="pt-3">
                          <p className="d-flex gap-md-3 gap-2 pt-3 red_ff fs_16 fw-normal dashboard-text-color ">
                            <Image src={Tick} alt="tick" width={20} />
                            {row.info}
                          </p>
                          <p className="d-flex gap-md-3 gap-2  pt-3 red_ff fs_16 fw-normal dashboard-text-color ">
                            <Image src={Tick} alt="tick" width={20} />
                            {row.info1}
                          </p>
                          <p className="d-flex gap-md-3 gap-2 pt-3 red_ff fs_16 fw-normal dashboard-text-color ">
                            <Image src={Tick} alt="tick" width={20} />
                            {row.info2}
                          </p>
                          <p className="d-flex gap-md-3 gap-2 pt-3 red_ff fs_16 fw-normal dashboard-text-color">
                            <Image src={Tick} alt="tick" width={20} />
                            {row.info3}
                          </p>
                          <p className="d-flex gap-md-3 gap-2 pt-3 red_ff fs_16 fw-normal dashboard-text-color">
                            <Image src={Tick} alt="tick" width={20} />
                            {row.info4}
                          </p>
                        </Card.Text>
                      </div>
                      <div className="d-flex justify-content-center mt-5 pt-5 red_ff">
                        {isSelect === index ? (
                          <>
                            <div className="fs_14 w-100 text-center  ">
                              <span className="w-100 d-flex justify-content-center">
                                <p
                                  className="text-center fw-semibold fs_16 red_ff "
                                  style={{
                                    borderBottom: "2px solid #1364F1",
                                    color: "#1364F1",
                                  }}
                                >
                                  Cancel
                                </p>
                              </span>

                              <button className="fs_14 w-100 text-dark fw-smedium red_ff fs_16 current-plan-bg border-0 rounded-3 py-2 text-center">
                                {" "}
                                Current Plan
                              </button>
                            </div>
                          </>
                        ) : (
                          <>
                            {" "}
                            <Link
                              href="/Dashboard/Payment"
                              passHref
                              className="w-100"
                            >
                              <Button
                                variant="primary"
                                onClick={() => setIsSelect(index)}
                                className="w-100 "
                              >
                                {row.plan}
                              </Button>
                            </Link>
                          </>
                        )}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Subscription;
