"use client";
import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import UsagesList from "./UsagesList";
import Chart from "chart.js";
import Group from "../../../../public/assets/images/svg/Group.svg";
import Layout from "@/app/components/Layout/Laytout";

declare global {
  interface Window {
    myBar: Chart;
  }
}

const Usages: React.FC = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const config = {
      type: "bar",
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Top-Up",
            backgroundColor: "#FFCA00",
            data: [90, 20, 130, 80, 50, 90, 30, 60, 90, 20, 80, 30],
            barThickness: 20,
          },
          {
            label: "Spending",
            backgroundColor: "#1364F1",
            data: [110, 80, 140, 120, 140, 110, 70, 80, 120, 120, 100, 70],
            barThickness: 20,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Usage Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          labels: {
            boxWidth: 10,
            fontColor: "rgba(0,0,0,.7)", // Adjust this value to make the boxes narrower
          },
          styles: {
            display: "none",
          },
          className: "custom-legend",
          align: "start",
          position: "top",
        },

        scales: {
          xAxes: [
            {
              display: true,

              gridLines: {
                display: false,
              },
              ticks: {
                fontColor: "rgba(0,0,0,.7)",
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                display: true,
              },
              ticks: {
                beginAtZero: true,
                suggestedMax: 160,
                callback: function (value) {
                  return "$" + value;
                },
              },
            },
          ],
        },
      },
    };

    const ctx = document.getElementById(
      "bar-chart"
    ) as HTMLCanvasElement | null;
    if (ctx) {
      const context = ctx.getContext("2d");
      if (context) {
        if (window.myBar) window.myBar.destroy();
        window.myBar = new Chart(context, config);
      }
    }
  }, [year]);

  return (
    <Layout>
      <div className="px-3">
        <div className="bg-white mt-3 custom-padding rounded-2">
          <Row>
            <Col xs={12} md={8}>
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
                <div className="rounded-t mb-0 pb-3 bg-transparent">
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="fs_24 red_ff mb-1 fw-semibold Usage-text-color">
                      Spending Overview
                    </p>
                  </div>
                </div>
                <div className=" border border-1 flex-auto">
                  {/* Chart */}
                  <span className=" d-flex justify-content-end mt-3 pe-2 margin_bottom">
                    <select
                      className="form-select w-auto"
                      value={year}
                      onChange={(e) => setYear(Number(e.target.value))}
                    >
                      {[2024, 2023, 2022].map((y) => (
                        <option key={y} value={y}>
                          {y}
                        </option>
                      ))}
                    </select>
                  </span>

                  <div className="relative h-350-px  pb-3">
                    <canvas id="bar-chart"></canvas>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={4} className="">
              <span className="fs_24 red_ff m fw-semibold Usage-text-color">
                Usage Category
              </span>
              <Row xs={2} md={2} className="g-2 mt-1">
                <Col lg={6} xs={6} className="p-2  ">
                  <div className="border border-color ps-3 pt-3 pb-2 text-dark me-2 Usage-Category-box">
                    <p>Car-Wash</p>
                    <Image className="w-100" src={Group} alt="Car-Wash" />
                    <p className="fs_20 fw-semibold red_ff pt-3 text-dark">
                      $116
                    </p>
                  </div>
                </Col>
                <Col lg={6} xs={6} className="p-2">
                  <div className="border text-dark border-color ps-3 pb-2 pt-3 text-nowrap me-2 Usage-Category-box">
                    <p>Laundry Shop</p>
                    <Image className="w-100" src={Group} alt="Laundry Shop" />
                    <p className="fs_20 fw-semibold red_ff pt-3 text-dark">
                      $116
                    </p>
                  </div>
                </Col>
                <Col lg={6} xs={6} className="p-2">
                  <div className="border border-color ps-3 pt-3 pb-2 text-dark text-nowrap me-2 Usage-Category-box">
                    <p>Valet Service</p>
                    <Image className="w-100" src={Group} alt="Valet Service" />
                    <p className="fs_20 fw-semibold red_ff pt-3 text-dark">
                      $116
                    </p>
                  </div>
                </Col>
                <Col lg={6} xs={6} className="p-2">
                  <div className="border border-color ps-2 pt-3 pb-2 text-dark me-2 Usage-Category-box">
                    <p>Ping-Pong</p>
                    <Image className="w-100" src={Group} alt="Ping-Pong" />
                    <p className="fs_20 fw-semibold red_ff pt-3 text-dark">
                      $116
                    </p>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
          <UsagesList />
        </div>
      </div>
    </Layout>
  );
};

export default Usages;
