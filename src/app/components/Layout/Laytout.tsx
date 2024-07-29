import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Admindashboard from "../../Dashboard/maindashboard/Admindashboard";
import "./layout.css";
import Navbar from "@/app/Dashboard/Header/page";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container fluid className="header-background-color px-0 ">
      <Row className="">
        <Col xs={12} lg={2}>
          <Admindashboard />
        </Col>
        {/* <Col lg={1} xl={1} xxl={1} className='d-xxl-none d-xl-block '></Col> */}
        <Col
          xs={12}
          lg={12}
          className="header-background-color pb-5 min-vh-100 custom-right-margin"
        >
          <Navbar />
          {children}
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
