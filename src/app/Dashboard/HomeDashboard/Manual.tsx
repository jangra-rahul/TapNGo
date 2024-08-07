import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import plush_Image from "../../../../public/assets/images/svg/push_icon.svg";
import icon from "../../../../public/assets/images/svg/icon.svg";
import Image from "next/image";
import Link from "next/link";
type AmountOption = {
  label: string;
  value: string;
};

const Manual = () => {
  const rechargeAmounts: AmountOption[] = [
    { label: "$100", value: "100" },
    { label: "$200", value: "200" },
    { label: "$500", value: "500" },
    { label: "$1000", value: "1000" },
    { label: "Custom", value: "custom" },
  ];

  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const [selectedTrigger, setSelectedTrigger] = useState<string | null>(null);

  const handleAmountClick = (value: string) => {
    setSelectedAmount(value);
  };

  const handleTriggerClick = (value: string) => {
    setSelectedTrigger(value);
  };

  return (
    <div>
      <p className="mb-0 fs_14 red_ff mb-2 dashboard-text-color fw-normal">
        Please choose the desired amount to recharge your card
      </p>
      <Row className="mt-3 px-2 justify-content-between">
        {rechargeAmounts.map((amount, index) => (
          <Col key={index} className="px-1 cursor-pointer w-100 mb-3">
            <Card
              className={`d-flex flex-column w-100 align-items-center justify-content-center p-2 ${
                selectedTrigger === amount.value ? "selected-card" : ""
              }`}
              onClick={() => handleTriggerClick(amount.value)}
            >
              <Card.Text className="fs_18 red_ff dashboard-text-color">
                {amount.label}
              </Card.Text>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="card  p-4 mt-3">
        <div className="d-md-flex align-items-center justify-content-between">
          <h5 className="mb-3 mb-md-0 fs_18 dashboard-text-color fw-semibold red_ff">
            Balance After Recharge
          </h5>
          <span className="bg_yellow px-2 fs_13 py-1 ">20% Extra Credit</span>
        </div>
        <Row className="mt-md-4 mt-2">
          <Col md={3} xs={6} className="mt-2 mt-md-0 position-relative px-1">
            <span style={{ cursor: "pointer" }}>
              <Image
                width={30}
                className="position-absolute pulsh_img z_index1"
                src={plush_Image}
                alt="plush_image"
              />
            </span>
            <div className="card card_hight ps-3 py-1 d-flex justify-content-between flex-column">
              <p className="fs_13 red_ff fw-normal dashboard-text-color">
                Current <br /> Balance
              </p>
              <h5 className="red_ff fs_18 fw-semibold homedashboars-text-color">
                $00
              </h5>
            </div>
          </Col>
          <Col md={3} xs={6} className="mt-2 mt-md-0 position-relative px-1">
            <span style={{ cursor: "pointer" }}>
              <Image
                width={30}
                className="position-absolute d-md-block d-none pulsh_img z_index1"
                src={plush_Image}
                alt="plush_img"
              />
            </span>
            <div className="card card_hight ps-3 py-1 d-flex justify-content-between flex-column">
              <p className="fs_13 red_ff fw-normal dashboard-text-color">
                Recharge <br />
                Value
              </p>
              <h5 className="red_ff fs_18 fw-semibold homedashboars-text-color">
                $00
              </h5>
            </div>
          </Col>
          <Col md={3} xs={6} className="mt-2 mt-md-0 position-relative px-1">
            <span style={{ cursor: "pointer" }}>
              <Image
                width={30}
                className="position-absolute pulsh_img z_index1"
                src={icon}
                alt="plush_img"
              />
            </span>
            <div className="card card_hight ps-3 py-1 d-flex justify-content-between flex-column">
              <p className="fs_13 red_ff fw-normal dashboard-text-color">
                Extra
                <br /> Credit
              </p>
              <h5 className="red_ff fs_18  fw-semibold homedashboars-text-color">
                $00
              </h5>
            </div>
          </Col>
          <Col md={3} xs={6} className="mt-2 mt-md-0 px-1">
            <div className="card card_hight ps-3 py-1 d-flex justify-content-between flex-column">
              <p className="fs_13 red_ff fw-normal dashboard-text-color">
                Your <br /> Balance
              </p>
              <h5 className="red_ff fs_18 fw-semibold homedashboars-text-color">
                $00
              </h5>
            </div>
          </Col>
        </Row>
      </div>
      <div className="d-flex mt-2 flex-column justify-content-end">
        <h4 className="fs_20 fw-semibold mt-4 red_ff mb-0 homedasboard-text-color">
          Proceed to Pay
        </h4>
        <div className="d-flex align-items-center mt-3 justify-content-between ">
          <p className="mb-0 fs_16 red_ff  fw-normal homedasboard-text-color ">
            Recharge Value
          </p>
          <h4 className="mb-0 fs_16 fw-medium dashboard-text-color red_ff">
            $00.00
          </h4>
        </div>
        <div className="d-flex align-items-center mt-3 justify-content-between text-dark">
          <p className="mb-0 fs_16 red_ff fw-normal dashboard-text-color  ">
            Surcharge :{" "}
            <select
              className="border-0 bg-white fs_16 red_ff fw-normal dashboard-text-color"
              name=""
              id=""
            >
              <option
                value="Domestic "
                className="dashboard-text-color fs_16 red_ff fw-normal"
              >
                Domestic
              </option>
              <option
                value="Domestic 1"
                className="dashboard-text-color fs_16 red_ff fw-normal"
              >
                International
              </option>
            </select>
          </p>
          <h4 className="mb-0 fs_16 fw-semibold red_ff">$00.00</h4>
        </div>
        <div className="border my-3"></div>
        <div className="d-flex align-items-center  justify-content-between">
          <p className="mb-0 fs_18 fw-semibold red_ff dashboard-text-color">
            Grand Total
          </p>
          <h4 className="mb-0 fs_18 fw-semibold red_ff dashboard-text-color ">
            $00.00
          </h4>
        </div>
        <div className="pt-5" style={{ marginTop: "90px" }}>
          <Link href="/Dashboard/Payment" passHref>
            <button className="button-bg-color w-100 border-0 py-2 fs_16 red_ff text-white fw-semibold rounded-2">
              Pay Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Manual;
