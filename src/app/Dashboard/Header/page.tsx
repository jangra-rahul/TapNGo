"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Accordion, Card, Dropdown, Form } from "react-bootstrap";
import { Drawer, Layout, Menu } from "antd";
import Image from "next/image";
import logo from "../../../../public/assets/images/svg/logo.svg";
import menu_icon from "../../../../public/assets/images/svg/manu_icon.svg";
import black_logo from "../../../../public/assets/images/svg/black_logo.svg";
import noti_icon from "../../../../public/assets/images/svg/notifi_icon.svg";
import home_icon from "../../../../public/assets/images/svg/home_icon.svg";
import usage_icon from "../../../../public/assets/images/svg/usage_icon.svg";
import subscription_icon from "../../../../public/assets/images/svg/Subscription_icon.svg";
import Family_icon from "../../../../public/assets/images/svg/FamilyM_icon.svg";
import Offers_icon from "../../../../public/assets/images/svg/offere_icon.svg";
import Faq_icon from "../../../../public/assets/images/svg/faq_icon.svg";
import Support_icon from "../../../../public/assets/images/svg/support_icon.svg";
import profile from "../../../../public/assets/images/svg/profile_icon.svg";
import close_icon from "../../../../public/assets/images/svg/close_manu.svg";
import { FaAngleDown } from "react-icons/fa6";
import "./dashboard.css";

const { Header, Content, Footer, Sider } = Layout;

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  const handleMenuClick = (key: string) => {
    onCloseDrawer();
  };

  return (
    <div>
      <Layout className="site-layout custom-background custom_nav_padding ">
        <Header className="header-background-color  mt-lg-4 p-0 m-0 res-bg w-100 header-responsive custom-background">
          <div className="d-flex align-items-center ms-2  custom-backgound">
            <Image
              className="pe-3 menu-button"
              onClick={showDrawer}
              src={menu_icon}
              alt="menu_icon"
              width={45}
              height={45}
            />
            <Link href="#">
              <Image
                className="pe-3 menu-button"
                src={black_logo}
                alt="black_logo"
                width={120}
                height={30}
              />
            </Link>
          </div>
          <div className="d-lg-flex align-items-center full-width  d-flex  header-background-color  w-100 pt-1  justify-content-between">
            <div className="d-none d-lg-block d-sm-none ">
              <h6 className="mb-0 fs_20  fw-normal red_ff">Hey!</h6>
              <h4 className="mb-0 fs_24 fw-semibold red_ff mt-1 text-nowrap">
                Andrew J.
              </h4>
            </div>
            <div
              className="d-flex gap-3 align-items-center w-100 res-bg pe-2  justify-content-end"
              style={{ marginTop: "-11px" }}
            >
              <Form.Select
                className="rounded-5 d-none d-md-flex"
                style={{ maxWidth: "240px", padding: "12px 15px" }}
                aria-label="Default select example"
              >
                <option>Family Member Account</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <div>
                <Link href="/Dashboard/NotificationPage">
                  <Image
                    src={noti_icon}
                    alt="noti_icon"
                    width={48}
                    height={48}
                  />
                </Link>
              </div>

              {/* <div className="d-flex align-items-center gap-1 line-height border py-1   pe-2 bg-white rounded-5">
                <div>
                  <Link href="/Dashboard/Profile">
                    <Image src={profile} alt="profile" width={38} height={33} />
                  </Link>
                </div>
                <div>
                  <FaAngleDown style={{ color: "black" }} />
                </div>
              </div> */}

              <div className="accordion-container">
                <Accordion className="w-100">
                  <Accordion.Item
                    eventKey="0"
                    className={`position-relative  ${
                      isOpen ? "bg-white rounded-5 border border-1" : ""
                    }`}
                  >
                    <Accordion.Header onClick={() => setIsOpen(!isOpen)}>
                      <div className="d-flex align-items-center gap-2">
                        <Image
                          src={profile}
                          alt="profile"
                          width={38}
                          height={33}
                        />
                        <div className="d-md-block d-none">
                          <h6 className="mb-0 fs_14">Sagar M.</h6>
                          <p className="mb-0 fs_13 mt-1">#23543</p>
                        </div>
                      </div>
                    </Accordion.Header>
                    <Accordion.Body
                      className={`custom-accordion-body ${
                        isOpen ? "open" : "closed"
                      }`}
                    >
                      <Link href={"/Dashboard/Profile"}>
                        <p className="mb-0 color_lightblack red_ff ">
                          My Profile
                        </p>
                      </Link>

                      <div className="border"></div>
                      <Link href={"/Dashboard/authPages"}>
                        <p className="mb-0 color_lightblack red_ff ">Log out</p>
                      </Link>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
          </div>
        </Header>

        <Drawer
          placement="left"
          closable={true}
          onClose={onCloseDrawer}
          visible={drawerVisible}
          className="drawer-responsive bg-sidebar w-75"
        >
          <div className="d-flex align-items-center justify-content-between bg-sidebar m-0 p-0">
            <Link href="#">
              <Image
                width={130}
                className=" pt-lg-0 ps-4 "
                src={logo}
                alt="logo"
              />
            </Link>
            <a href="#">
              <Image
                onClick={onCloseDrawer}
                width={90}
                className="px-3  pt-lg-0 px-4 "
                src={close_icon}
                alt="close_icon"
              />
            </a>
          </div>

          <Menu theme="dark" className="bg-sidebar">
            <Menu.Item key="1">
              <Link href="/Dashboard/HomeDashboard">
                <div className="d-flex gap-2 align-items-center">
                  <Image
                    src={home_icon}
                    alt="home_icon"
                    width={20}
                    height={20}
                  />
                  <span className="mb-0 fs_14 red_ff">Home</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link href="/Dashboard/Usages">
                <div className="d-flex gap-2 align-items-center">
                  <Image
                    src={usage_icon}
                    alt="usage_icon"
                    width={20}
                    height={20}
                  />
                  <span className="mb-0 fs_14 red_ff">Usage</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="3" onClick={() => handleMenuClick("3")}>
              <Link href="/Dashboard/Subcriptiondashboard">
                <div className="d-flex gap-2 align-items-center">
                  <Image
                    src={subscription_icon}
                    alt="subscription_icon"
                    width={20}
                    height={20}
                  />
                  <span className="mb-0 fs_14 red_ff">Subscription</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="4" onClick={() => handleMenuClick("4")}>
              <Link href="/Dashboard/FamilyMember">
                <div className="d-flex gap-2 align-items-center">
                  <Image
                    src={Family_icon}
                    alt="Family_icon"
                    width={20}
                    height={20}
                  />
                  <span className="mb-0 fs_14 red_ff">Family Member</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="5" onClick={() => handleMenuClick("5")}>
              <Link href="/Dashboard/MyOffers">
                <div className="d-flex gap-2 align-items-center">
                  <Image
                    src={Offers_icon}
                    alt="Offers_icon"
                    width={20}
                    height={20}
                  />
                  <span className="mb-0 fs_14 red_ff">My Offers</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="6" onClick={() => handleMenuClick("6")}>
              <Link href="/Dashboard/FAQ">
                <div className="d-flex gap-2 align-items-center">
                  <Image src={Faq_icon} alt="faq_icon" width={20} height={20} />
                  <span className="mb-0 fs_14 red_ff">FAQ</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="7" onClick={() => handleMenuClick("7")}>
              <Link href="/Dashboard/SupportPage">
                <div className="d-flex gap-2 align-items-center">
                  <Image
                    src={Support_icon}
                    alt="Support_icon"
                    width={20}
                    height={20}
                  />
                  <span className="mb-0 fs_14 red_ff">Support</span>
                </div>
              </Link>
            </Menu.Item>
          </Menu>

          <Footer className="footer">
            <p className="m-0 p-0">© 2024. Adopt Cashless.</p>
            <p>All rights reserved.</p>
          </Footer>
        </Drawer>
      </Layout>
    </div>
  );
};

export default Navbar;

// "use client"
// import React, { ReactNode, useState } from 'react';
// import Link from "next/link"
// import { Form } from 'react-bootstrap';
// import { Drawer, Layout, Menu } from 'antd';
// import Image from 'next/image';
// import logo from "../../../../public/assets/images/svg/logo.svg";
// import menu_icon from "../../../../public/assets/images/svg/manu_icon.svg";
// import black_logo from "../../../../public/assets/images/svg/black_logo.svg";
// import noti_icon from "../../../../public/assets/images/svg/notifi_icon.svg";
// import home_icon from "../../../../public/assets/images/svg/home_icon.svg";
// import usage_icon from "../../../../public/assets/images/svg/usage_icon.svg";
// import subscription_icon from "../../../../public/assets/images/svg/Subscription_icon.svg";
// import Family_icon from "../../../../public/assets/images/svg/FamilyM_icon.svg";
// import Offers_icon from "../../../../public/assets/images/svg/offere_icon.svg";
// import Faq_icon from "../../../../public/assets/images/svg/faq_icon.svg";
// import Support_icon from "../../../../public/assets/images/svg/support_icon.svg";
// import profile from "../../../../public/assets/images/svg/profile_icon.svg"

// import close_icon from "../../../../public/assets/images/svg/close_manu.svg";
// import { FaAngleDown } from 'react-icons/fa6';
// import "./dashboard.css"
// const { Header, Content, Footer, Sider } = Layout;
// const Navbar = () => {
//     const [drawerVisible, setDrawerVisible] = useState(false);
//     const showDrawer = () => {
//         setDrawerVisible(true);
//       };

//       const onCloseDrawer = () => {
//         setDrawerVisible(false);
//       };

//   const handleMenuClick = (key: string) => {

//     onCloseDrawer();
//   };

//   return (
//     <div>
//        <Layout className="site-layout custom-bg">
//         <Header className="site-layout-background p-0 m-0 w-100 header-responsive custom-bg ">
//           <div className="d-flex align-items-center custom-bg">
//             <Link href="#">
//               <Image
//                 className="pe-3 menu-button"
//                 onClick={showDrawer}
//                 src={menu_icon}
//                 alt="manu_icon"
//               />
//             </Link>
//             <Link href="#">
//               <Image
//                 className="pe-3 menu-button"
//                 src={black_logo}
//                 alt="black_logo"
//               />
//             </Link>
//           </div>
//           <div className="d-lg-flex align-items-center d-flex custom-bg w-100 justify-content-between">
//             <div className="d-none d-md-flex ">
//               <h6 className="mb-0 fs_14 fw-normal red_ff">Hey!</h6>
//               <h4 className="mb-0 fs_24 red_ff mt-1 text-nowrap">Andrew J.</h4>
//             </div>
//             <div className="d-flex gap-4 align-items-center w-100 justify-content-end ">
//               <Form.Select
//                 className="rounded-5 d-none d-md-flex w-20"
//                 aria-label="Default select example"
//               >
//                 <option>Family Member Account</option>
//                 <option value="1">One</option>
//                 <option value="2">Two</option>
//                 <option value="3">Three</option>
//               </Form.Select>
//               <div>
//                 <Link href="/Dashboard/NotificationPage">
//                 <Image src={noti_icon} alt="noti_icon" width={40} height={40} />
//                 </Link>
//               </div>
//               <div className="d-flex align-items-center gap-1 line-height border py-1 px-2 bg-white rounded-5">
//                 <div >
//                   <Link href="/Dashboard/Profile">

//                   <Image src={profile} alt="profile" width={38} height={33} />
//                   </Link>
//                 </div>
//                 <div>
//                   <FaAngleDown style={{ color: 'black' }} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </Header>

//         <Drawer
//           placement="left"
//           closable={true}
//           onClose={onCloseDrawer}
//           visible={drawerVisible}
//           className="drawer-responsive"
//         >
//           <div className="d-flex align-items-center justify-content-between bg-sidebar">
//             <Link href="#">
//               <div>
//                 <Image width={130} className="pt-4 pt-lg-0 ps-4 pb-2" src={logo} alt="logo" />
//               </div>
//             </Link>
//             <a href="#">
//               <div>
//                 <Image onClick={onCloseDrawer} width={90} className="px-3 pt-4 pt-lg-0 px-4 pb-2" src={close_icon} alt="close_icon" />
//               </div>
//             </a>
//           </div>

//           <Menu theme="dark">
//           <Menu.Item key="1">
//             <Link href="/Dashboard/HomeDashboard">
//             <div className="d-flex gap-2 align-items-center">
//               <Image src={home_icon} alt="home_icon" width={24} height={24} />
//               <span className="mb-0 fs_14 red_ff">Home</span>
//             </div>
//             </Link>
//           </Menu.Item>
//           <Menu.Item key="2">
//             <Link href="/Dashboard/Usages">

//             <div className="d-flex gap-2 align-items-center">
//               <Image src={usage_icon} alt="Usage_icon" width={24} height={24} />
//               <span className="mb-0 fs_14 red_ff">Usage</span>
//             </div>
//             </Link>
//           </Menu.Item>
//           <Menu.Item key="3" onClick={() => handleMenuClick('3')}>
//             <Link href="/Dashboard/Subcriptiondashboard">
//             <div className="d-flex gap-2 align-items-center">
//               <Image src={subscription_icon} alt="Subscription_icon" width={24} height={24} />
//               <span className="mb-0 fs_14 red_ff">Subscription</span>
//             </div>
//             </Link>
//           </Menu.Item>
//           <Menu.Item key="4" onClick={() => handleMenuClick('4')}>
//             <Link href="/Dashboard/FamilyMember">
//             <div className="d-flex gap-2 align-items-center">
//               <Image src={Family_icon} alt="FamilyM_icon" width={24} height={24} />
//               <span className="mb-0 fs_14 red_ff">Family Member</span>
//             </div>
//             </Link>
//           </Menu.Item>
//           <Menu.Item key="5" onClick={() => handleMenuClick('5')}>
//             <Link href="/Dashboard/MyOffers">
//             <div className="d-flex gap-2 align-items-center">
//               <Image src={Offers_icon} alt="Offer_icon" width={24} height={24} />
//               <span className="mb-0 fs_14 red_ff">My Offers</span>
//             </div>
//             </Link>
//           </Menu.Item>
//           <Menu.Item key="6" onClick={() => handleMenuClick('6')}>
//             <Link href="/Dashboard/FAQ">

//             <div className="d-flex gap-2 align-items-center">
//               <Image src={Faq_icon} alt="faq_icon" width={24} height={24} />
//               <span className="mb-0 fs_14 red_ff">FAQ</span>
//             </div>
//               </Link>
//           </Menu.Item>
//           <Menu.Item key="7" onClick={() => handleMenuClick('7')}>
//             <Link href="/Dashboard/SupportPage">
//             <div className="d-flex gap-2 align-items-center">
//               <Image src={Support_icon} alt="Support_icon" width={24} height={24} />
//               <span className="mb-0 fs_14 red_ff">Support</span>
//             </div>
//             </Link>
//           </Menu.Item>
//         </Menu>

//           <Footer className="footer">
//             <p className="m-0 p-0">© 2024. Adopt Cashless.</p>
//             <p>All rights reserved.</p>
//           </Footer>
//         </Drawer>
//         <Content style={{ margin: '16px', overflow: 'auto' }}>
//           {/* {renderComponent()} */}
//         </Content>
//       </Layout>
//     </div>
//   )
// }

// export default Navbar
