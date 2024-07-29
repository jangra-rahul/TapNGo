import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import card_icon from "../../../../public/assets/images/svg/card_icon.svg";

type AmountOption = {
  label: string;
  value: string;
};

const Auto: React.FC = () => {
  const rechargeAmounts: AmountOption[] = [
    { label: "$100", value: "100" },
    { label: "$200", value: "200" },
    { label: "$500", value: "500" },
    { label: "$1000", value: "1000" },
    { label: "Custom", value: "custom" },
  ];

  const [selectedAmount, setSelectedAmount] = useState<string | null>(null);
  const [selectedTrigger, setSelectedTrigger] = useState<string | null>(null);
  const [selected, setSelected] = useState<string | Boolean>(false);

  const handleAmountClick = (value: string) => {
    setSelectedAmount(value);
  };

  const handleTriggerClick = (value: string) => {
    setSelectedTrigger(value);
  };

  return (
    <Container>
      <div className="d-flex flex-column justify-content-between h-vh-100">
        <div>
          <p className="mb-0 fs_14 fw-normal red_ff dashboard-text-color">
            With auto recharge, we will recharge your card / fob when your
            balance falls below the selected threshold.
          </p>
          <p className="mt-4  fs_20 fw-semibold red_ff dashboard-text-color">
            Select the Recharge Amount
          </p>
          <Row className="mt-3 px-2 justify-content-between">
            {rechargeAmounts.map((amount, index) => (
              <Col key={index} className="w-100 cursor-pointer px-1 mb-3">
                <Card
                  className={`d-flex flex-column align-items-center justify-content-center p-2 ${
                    selectedAmount === amount.value ? "selected-card" : ""
                  }`}
                  onClick={() => handleAmountClick(amount.value)}
                >
                  <Card.Text className="fs_18 fw-normal red_ff dashboard-text-color">
                    {amount.label}
                  </Card.Text>
                </Card>
              </Col>
            ))}
          </Row>

          <h4 className="mt-3 fs_18 fw-semibold red_ff dashboard-text-color">
            Recharge trigger point
          </h4>
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
        </div>
        {selected ? (
          <>
            <h5 className=" fs_18 red_ff fw-semibold">Payment From</h5>
            <div className="card p-2 mt-2">
              <div className="d-flex align-items-center justify-content-between ">
                <div className="d-flex w-100 align-items-center">
                  <Image src={card_icon} alt="card_icon" />
                  <input
                    className=" w-100 border-0 px-3"
                    type="password"
                    name=""
                    placeholder="**** **** **** 1234"
                    id=""
                  />
                </div>
                <button className=" bg_yellow  border-0 px-2 red_ff fs_13">
                  Primary
                </button>
              </div>
            </div>
            <button className=" red_ff color_blue mb-2 py-2 custom_bolrder mt-3">
              Add Other Payment Method
            </button>
            <span className="mb-5 text-decoration-underline color_blue red_ff mt-2">
              Manage Card
            </span>
          </>
        ) : (
          <></>
        )}
        <div className="d-flex flex-column justify-content-end mt-4">
          <Button
            onClick={() => setSelected(true)}
            className="w-100 py-2 fs-16 fw-semibold rounded-2 bg-primary text-white"
          >
            Set Auto Top-up Now
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Auto;
