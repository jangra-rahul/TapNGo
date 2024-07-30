"use client";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import yellow_icon from "../../../../public/assets/images/svg/yellow_icon.svg";
import Image from "next/image";

const PlanCard = ({ planName, price, features, additionalClass, Popular }) => {
  return (
    <div className={`col-md-6 ${additionalClass}`}>
      <div className="subscription-box w-100 p-3 rounded-2">
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="fs_16 fw-medium red_ff subcription-text-color">
            {planName}
          </h4>
          {Popular ? (
            <>
              <span
                className="fs_13 red_ff px-2 py-1 fw-semibold rounded-2"
                style={{ backgroundColor: "#E3F4E7", color: "#0E8029" }}
              >
                {Popular}
              </span>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="d-flex align-items-end">
          <span className="fs_24 red_ff  fw-semibold subcription-text-color">
            ${price}
          </span>
          <span className="fs-6 mb-1">/Month</span>
        </div>
        {features.map((feature, index) => (
          <div className="d-flex align-items-center mt-3 gap-2" key={index}>
            <Image src={yellow_icon} alt="yellow_icon" />
            <span className="fs_14 subcription-text-color red_ff fw-normal">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Subscription = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const plans = [
    {
      planName: "Starter Plan",
      price: 49,
      features: [
        "Basic Reporting",
        "Email Reminders",
        "Budgeting Tools",
        "Budgeting Tools",
      ],
    },
    {
      planName: "Basic Plan",
      price: 99,
      features: [
        "Basic Reporting",
        "Email Reminders",
        "Budgeting Tools",
        "Budgeting Tools",
      ],
    },
    {
      planName: "Premium Plan",
      price: 199,
      features: [
        "Basic Reporting",
        "Email Reminders",
        "Budgeting Tools",
        "Budgeting Tools",
      ],
      Popular: "Popular",
    },
    {
      planName: "Platinum Plan",
      price: 229,
      features: [
        "Basic Reporting",
        "Email Reminders",
        "Budgeting Tools",
        "Budgeting Tools",
      ],
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {plans.map((plan, index) => (
          <PlanCard
            key={index}
            {...plan}
            additionalClass={index === 2 || index === 3 ? "mt-4" : ""}
          />
        ))}
      </div>
      <div className="mt-5 text-center w-100">
        <Button className="w-100 py-2" onClick={handleShow}>
          Update Auto Payment
        </Button>
      </div>

      <Modal show={showModal} centered onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
          <div>
            <p className=" mb-0 red_ff fw-normal">Starter Plan</p>
            <div className="d-flex red_ff align-items-end">
              <span className=" fs_28 red_ff fw-semibold subcription-text-color">
                $200
              </span>
              <span className="fs-6 mb-1 fw-normal">/Month</span>
            </div>
          </div>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex align-items-center gap-3">
            <Image src={yellow_icon} alt="yellow_icon" />
            <span className="fs_14 subcription-text-color red_ff fw-normal">
              Basic Reporting
            </span>
          </div>
          <div className="d-flex align-items-center gap-3 mt-4">
            <Image src={yellow_icon} alt="yellow_icon" />
            <span className="fs_14 subcription-text-color red_ff fw-normal">
              Basic Reporting
            </span>
          </div>
          <div className="d-flex align-items-center gap-3 mt-4">
            <Image src={yellow_icon} alt="yellow_icon" />
            <span className="fs_14 subcription-text-color red_ff fw-normal">
              Basic Reporting
            </span>
          </div>
          <div className="d-flex align-items-center gap-3 mt-4">
            <Image src={yellow_icon} alt="yellow_icon" />
            <span className="fs_14 subcription-text-color red_ff fw-normal">
              Basic Reporting
            </span>
          </div>
          <div className="d-flex align-items-center gap-3 mt-4">
            <Image src={yellow_icon} alt="yellow_icon" />
            <span className="fs_14 subcription-text-color red_ff fw-normal">
              Basic Reporting
            </span>
          </div>
          <div className="d-flex align-items-center gap-3 mt-4">
            <Image src={yellow_icon} alt="yellow_icon" />
            <span className="fs_14 subcription-text-color red_ff fw-normal">
              Basic Reporting
            </span>
          </div>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button
            className="w-100 py-3"
            variant="primary"
            onClick={handleClose}
          >
            Subscribe Now
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Subscription;

// "use client"
// import React from "react";
// import yellow_icon from "../../../../public/assets/images/svg/yellow_icon.svg";
// import Image from 'next/image';
// const Subscription = () => {
//   return (
//     <div>
//       <div className="row">
//         <div className="col-6 mt-4">
//           <div className="box p-3 rounded-2">
//             <h4 className="fs_16 fw-semibold red_ff">Starter Plan</h4>
//             <div className="d-flex align-items-end">
//               <span className="fs_24 fw-semibold red_ff">$49</span>{" "}
//               <span className="fs_14 red_ff mb-1">/Month</span>
//             </div>
//             <div className="d-flex align-items-center mt-3 gap-2">
//               <Image src={yellow_icon} alt="yellow_icon" />
//               <span className="fs_14 red_ff fw-semibold">Basic Reporting</span>
//             </div>
//             <div className="d-flex align-items-center mt-3 gap-2">
//               <Image src={yellow_icon} alt="yellow_icon" />
//               <span className="fs_14 red_ff fw-semibold">Basic Reporting</span>
//             </div>
//             <div className="d-flex align-items-center mt-3 gap-2">
//               <Image src={yellow_icon} alt="yellow_icon" />
//               <span className="fs_14 red_ff fw-semibold">Basic Reporting</span>
//             </div>
//             <div className="d-flex align-items-center mt-3 gap-2">
//               <Image src={yellow_icon} alt="yellow_icon" />
//               <span className="fs_14 red_ff fw-semibold">Basic Reporting</span>
//             </div>
//           </div>
//         </div>
//         <div className="col-6 mt-4">
//           <div className="box p-3 rounded-2">
//             <h4 className="fs_16 fw-semibold red_ff">Starter Plan</h4>
//             <div className="d-flex align-items-end">
//               <span className="fs_24 fw-semibold red_ff">$49</span>{" "}
//               <span className="fs_14 red_ff mb-1">/Month</span>
//             </div>
//             <div className="d-flex align-items-center mt-3 gap-2">
//               <Image src={yellow_icon} alt="yellow_icon" />
//               <span className="fs_14 red_ff fw-semibold">Basic Reporting</span>
//             </div>
//             <div className="d-flex align-items-center mt-3 gap-2">
//               <Image src={yellow_icon} alt="yellow_icon" />
//               <span className="fs_14 red_ff fw-semibold">Basic Reporting</span>
//             </div>
//             <div className="d-flex align-items-center mt-3 gap-2">
//               <Image src={yellow_icon} alt="yellow_icon" />
//               <span className="fs_14 red_ff fw-semibold">Basic Reporting</span>
//             </div>
//             <div className="d-flex align-items-center mt-3 gap-2">
//               <Image src={yellow_icon} alt="yellow_icon" />
//               <span className="fs_14 red_ff fw-semibold">Basic Reporting</span>
//             </div>
//           </div>
//         </div>
//         <div className="col-6 mt-4">
//           <div className="box p-3 rounded-2">
//             <h4 className="fs_16 fw-semibold red_ff">Starter Plan</h4>
//             <div className="d-flex align-items-end">
//               <span className="fs_24 fw-semibold red_ff">$49</span>{" "}
//               <span className="fs_14 red_ff mb-1">/Month</span>
//             </div>
//             <div className="d-flex align-items-center mt-3 gap-2">
//               <Image src={yellow_icon} alt="yellow_icon" />
//               <span className="fs_14 red_ff fw-semibold">Basic Reporting</span>
//             </div>
//             <div className="d-flex align-items-center mt-3 gap-2">
//               <Image src={yellow_icon} alt="yellow_icon" />
//               <span className="fs_14 red_ff fw-semibold">Basic Reporting</span>
//             </div>
//             <div className="d-flex align-items-center mt-3 gap-2">
//               <Image src={yellow_icon} alt="yellow_icon" />
//               <span className="fs_14 red_ff fw-semibold">Basic Reporting</span>
//             </div>
//             <div className="d-flex align-items-center mt-3 gap-2">
//               <Image src={yellow_icon} alt="yellow_icon" />
//               <span className="fs_14 red_ff fw-semibold">Basic Reporting</span>
//             </div>
//           </div>
//         </div>
//         <div className="col-6 mt-4">
//           <div className="box p-3 rounded-2">
//             <h4 className="fs_16 fw-semibold red_ff">Starter Plan</h4>
//             <div className="d-flex align-items-end">
//               <span className="fs_24 fw-semibold red_ff">$49</span>{" "}
//               <span className="fs_14 red_ff mb-1">/Month</span>
//             </div>
//             <div className="d-flex align-items-center mt-3 gap-2">
//               <Image src={yellow_icon} alt="yellow_icon" />
//               <span className="fs_14 red_ff fw-semibold">Basic Reporting</span>
//             </div>
//             <div className="d-flex align-items-center mt-3 gap-2">
//               <Image src={yellow_icon} alt="yellow_icon" />
//               <span className="fs_14 red_ff fw-semibold">Basic Reporting</span>
//             </div>
//             <div className="d-flex align-items-center mt-3 gap-2">
//               <Image src={yellow_icon} alt="yellow_icon" />
//               <span className="fs_14 red_ff fw-semibold">Basic Reporting</span>
//             </div>
//             <div className="d-flex align-items-center mt-3 gap-2">
//               <Image src={yellow_icon} alt="yellow_icon" />
//               <span className="fs_14 red_ff fw-semibold">Basic Reporting</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Subscription;
