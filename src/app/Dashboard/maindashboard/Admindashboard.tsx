"use client";
import Image from "next/image";
import { Outlet } from "react-router-dom";
import React, { ReactNode, useState } from "react";
import { Drawer, Layout, Menu } from "antd";
import { FaAngleDown } from "react-icons/fa6";
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
import close_icon from "../../../../public/assets/images/svg/close_manu.svg";
import Support_icon from "../../../../public/assets/images/svg/support_icon.svg";
import profile from "../../../../public/assets/images/svg/profile_icon.svg";
import { Form } from "react-bootstrap";
import Link from "next/link";
import "./dashboard.css";
import { usePathname } from "next/navigation";

const { Header, Content, Footer, Sider } = Layout;

const Admindashboard: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedComponent, setSelectedComponent] = useState<ReactNode>();
  const [selectedMenuItem, setSelectedMenuItem] = useState<string>("1");
  const pathname = usePathname();
  console.log("pathname", pathname);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onCloseDrawer = () => {
    setDrawerVisible(false);
  };

  const handleMenuClick = (key: string) => {
    setSelectedMenuItem(key); // Update the selected menu item

    onCloseDrawer();
  };

  return (
    <Layout>
      <div className=" bg-sidebar">
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={toggleCollapsed}
          breakpoint="lg"
          collapsedWidth="0"
          trigger={null}
          className="sider-responsive bg-sidebar "
          style={{
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            height: "100vh",
            width: "100% ",
          }}
        >
          <Link href="#">
            <div>
              <Image
                className="px-3 p-4"
                src={logo}
                alt="logo"
                width={200}
                height={100}
              />
            </div>
          </Link>
          <Menu theme="dark" className="bg-sidebar">
            <Menu.Item
              key="1"
              className={
                pathname === "/Dashboard/HomeDashboard" ? "active-color" : ""
              }
            >
              <Link href="/Dashboard/HomeDashboard">
                <div className="d-flex gap-2 align-items-center">
                  <Image
                    src={home_icon}
                    alt="home_icon"
                    width={16}
                    height={16}
                  />
                  <span className="mb-0 fs_14 red_ff">Home</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="2"
              className={pathname === "/Dashboard/Usages" ? "active-color" : ""}
            >
              <Link href="/Dashboard/Usages">
                <div className="d-flex gap-2 align-items-center">
                  <Image
                    src={usage_icon}
                    alt="Usage_icon"
                    width={16}
                    height={16}
                  />
                  <span className="mb-0 fs_14 red_ff">Usage</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="3"
              className={
                pathname === "/Dashboard/Subcriptiondashboard"
                  ? "active-color"
                  : ""
              }
            >
              <Link href="/Dashboard/Subcriptiondashboard">
                <div className="d-flex gap-2 align-items-center">
                  <Image
                    src={subscription_icon}
                    alt="Subscription_icon"
                    width={16}
                    height={16}
                  />
                  <span className="mb-0 fs_14 red_ff">Subscription</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="4"
              className={
                pathname === "/Dashboard/FamilyMember" ? "active-color" : ""
              }
            >
              <Link href="/Dashboard/FamilyMember">
                <div className="d-flex gap-2 align-items-center">
                  <Image
                    src={Family_icon}
                    alt="FamilyM_icon"
                    width={16}
                    height={16}
                  />
                  <span className="mb-0 fs_14 red_ff">Family Member</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="5"
              className={
                pathname === "/Dashboard/MyOffers" ? "active-color" : ""
              }
            >
              <Link href="/Dashboard/MyOffers">
                <div className="d-flex gap-2 align-items-center">
                  <Image
                    src={Offers_icon}
                    alt="Offer_icon"
                    width={16}
                    height={16}
                  />
                  <span className="mb-0 fs_14 red_ff">My Offers</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="6"
              className={pathname === "/Dashboard/FAQ" ? "active-color" : ""}
            >
              <Link href="/Dashboard/FAQ">
                <div className="d-flex gap-2 align-items-center">
                  <Image src={Faq_icon} alt="faq_icon" width={16} height={16} />
                  <span className="mb-0 fs_14 red_ff">FAQ</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item
              key="7"
              className={
                pathname === "/Dashboard/SupportPage" ? "active-color" : ""
              }
            >
              <Link href="/Dashboard/SupportPage">
                <div className="d-flex gap-2 align-items-center">
                  <Image
                    src={Support_icon}
                    alt="Support_icon"
                    width={16}
                    height={16}
                  />
                  <span className="mb-0 fs_14 red_ff">Support</span>
                </div>
              </Link>
            </Menu.Item>
          </Menu>

          <Footer className="footer fs_14 ">
            <p className="m-0 p-0 fs_14 red_ff font-light bg-p ps-2">
              © 2024. Adopt Cashless.
            </p>
            <p className="bg-p fs_14 red_ff font-light">All rights reserved.</p>
          </Footer>
        </Sider>
      </div>
    </Layout>
  );
};

export default Admindashboard;
