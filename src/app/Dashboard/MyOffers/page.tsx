"use client";
import React from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import Image from "next/image";
import Layout from "@/app/components/Layout/Laytout";
import banner from "../../../../public/assets/images/svg/banner.svg";
import sale from "../../../../public/assets/images/svg/salecard.svg";
import secondsale from "../../../../public/assets/images/svg/2ndsalecard.svg";
import thirdsale from "../../../../public/assets/images/svg/3rdsalecard.svg";
import fourthsale from "../../../../public/assets/images/svg/4thsalecard.svg";
import resposiveImage from "../../../../public/assets/images/svg/banner-resposive.svg";
import group123 from "../../../../public/assets/images/svg/Group 3636s.png";

const Myoffer = () => {
  const [showModal, setShowModal] = React.useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Layout>
        <div className="px-1 bg-white  mt-4 rounded-4 mx-3">
          <div className=" bg-white rounded-3">
            <div className="w-100 p-0 m-0 rounded-3">
              <h1 className="pt-4 ps-3 fs_28 fw-semibold red_ff text-dark">
                My Offers
              </h1>
              <Row className="  mt-1 ">
                <div className="d-none d-md-block mt-0 m-0 pt-0 px-lg-3 mb-4 h-100 ">
                  <Image
                    className="w-100 my-4 px-2 h-100 mt-2"
                    src={banner}
                    alt="Banner"
                    onClick={handleModalOpen}
                  />
                </div>
                <div className="d-block d-md-none  px-2 py-4 ">
                  <Image
                    className="w-100 h-100 px-2"
                    src={resposiveImage}
                    alt="Banner"
                    onClick={handleModalOpen}
                  />
                </div>
              </Row>
              <Row className=" gap-2 m-0 p-0 gap-md-0 h-100">
                <Col
                  xs={12}
                  md={3}
                  className="mb-3 mb-md-5 h-100 m-0 p-0 px-md-3 px-2"
                >
                  <Image src={sale} alt="Sale 1" className="w-100 h-100" />
                </Col>
                <Col
                  xs={12}
                  md={3}
                  className="mb-3 mb-md-5 h-100  m-0 p-0 px-md-3 px-2"
                >
                  <Image
                    src={secondsale}
                    alt="Sale 2"
                    className="w-100 h-100"
                  />
                </Col>
                <Col
                  xs={12}
                  md={3}
                  className="mb-3 mb-md-5 h-100  m-0 p-0 px-md-3 px-2"
                >
                  <Image src={thirdsale} alt="Sale 3" className="w-100 h-100" />
                </Col>
                <Col
                  xs={12}
                  md={3}
                  className="mb-3 mb-md-5 h-100  m-0 p-0 px-md-3 px-2"
                >
                  <Image
                    src={fourthsale}
                    alt="Sale 4"
                    className="w-100 h-100"
                  />
                </Col>
              </Row>

              <Modal show={showModal} onHide={handleModalClose} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Discount Coupon</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Image
                    className="w-100 h-100"
                    src={group123}
                    alt="Coupon Details"
                  />
                  <div className="d-flex justify-content-between mt-4 align-items-center">
                    <h4 className="fs_16 red_ff fw-semibold  text-dark">
                      Details
                    </h4>
                    <p className="mb-0 fs_14">Expire on: 28 Feb 2024</p>
                  </div>
                  <p className="fs_14 red_ff fw-normal mt-2 text-dark">
                    1. Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <p className="fs_14 red_ff fw-normal mt-2 text-dark">
                    2. Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <p className="fs_14 red_ff fw-normal mt-2 text-dark">
                    3. Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </Modal.Body>
                <Modal.Footer className="border-0">
                  <Button
                    variant="primary"
                    className="w-100 fs_16 fw-medium red_ff py-3"
                    onClick={handleModalClose}
                  >
                    Activate this Offer
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Myoffer;

// "use client";
// import React from 'react';
// import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
// import Image from 'next/image';
// import Layout from '@/app/components/Layout/Laytout';
// import banner from "../../../../public/assets/images/svg/banner.svg";
// import sale from "../../../../public/assets/images/svg/salecard.svg";
// import secondsale from "../../../../public/assets/images/svg/2ndsalecard.svg";
// import thirdsale from "../../../../public/assets/images/svg/3rdsalecard.svg";
// import fourthsale from "../../../../public/assets/images/svg/4thsalecard.svg";
// import resposiveImage from "../../../../public/assets/images/svg/banner-resposive.svg";
// import group123 from "../../../../public/assets/images/svg/Group 3636s.png";

// const Myoffer = () => {
//   const [showModal, setShowModal] = React.useState(false);

//   const handleModalOpen = () => {
//     setShowModal(true);
//   };

//   const handleModalClose = () => {
//     setShowModal(false);
//   };

//   return (
//     <>
//       <Layout>
//     <Container className='w-100  p-0 m-0'>
//             <Row className='pe-2 '>
//             <picture>
//               <source srcSet={resposiveImage} media="(max-width: 768px)" />
//               <Image className='w-100 h-100'src={banner} alt="Banner" onClick={handleModalOpen}  />
//             </picture>
//           </Row>
//           <Row className='mt-3 gap-2 m-0 p-0 gap-md-0'>
//         <Col xs={12} md={3} className='mb-3 mb-md-5 '>
//           <Image src={sale} alt="Sale 1" className='w-100' />
//         </Col>
//         <Col xs={12} md={3} className='mb-3 mb-md-5 '>
//           <Image src={secondsale} alt="Sale 2" className='w-100' />
//         </Col>
//         <Col xs={12} md={3} className='mb-3 mb-md-5'>
//           <Image src={thirdsale} alt="Sale 3" className='w-100' />
//         </Col>
//         <Col xs={12} md={3} className='mb-3 mb-md-5'>
//           <Image src={fourthsale} alt="Sale 4" className='w-100' />
//         </Col>
//       </Row>

//           <Modal show={showModal} onHide={handleModalClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Discount Coupon</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Image className='w-100'  src={group123} alt="Coupon Details" />
//           <h4 className='fs_16 red_ff fw-medium mt-3 text-dark'>Details</h4>
//           <p className='fs_14 red_ff fw-normal mt-2 text-dark'>1. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//           <p className='fs_14 red_ff fw-normal mt-2 text-dark'>2. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//           <p className='fs_14 red_ff fw-normal mt-2 text-dark'>3. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="primary" className='w-100 fs_16 fw-medium red_ff' onClick={handleModalClose}>
//             Activate this Offer
//           </Button>
//         </Modal.Footer>
//       </Modal>
//       </Container>

//       </Layout>
//     </>
//   );
// };

// export default Myoffer;
