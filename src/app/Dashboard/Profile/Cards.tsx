import { Row, Col, Card, Button, Form } from "react-bootstrap";
import HDFC_Card from "../../../../public/assets/images/svg/HDFC_Card.svg";
import { useState } from "react";
import Arrow from "../../../../public/assets/images/svg/arrow.svg";
import Image from "next/image";
import DownloadCardModal from "../FamilyMember/DownloadCardModal";

interface CardsProps {
  onShowProfile: () => void;
}

const Cards: React.FC<CardsProps> = ({ onShowProfile }) => {
  const [showCards, setShowCards] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);

  const handleShowDownloadModal = () => setShowDownloadModal(true);
  const handleCloseDownloadModal = () => setShowDownloadModal(false);

  const handleShowProfile = () => setShowCards(false);

  if (showCards) {
    return <Cards onShowProfile={handleShowProfile} />;
  }

  return (
    <>
      <Row className="pt-3 ps-md-3 px-3 bg-white">
        <Col xs={12} md={6} className="mb-4 ">
          <Card className="border-color d-flex flex-column justify-content-between h-100 p-0 m-0">
            <Card.Body className="p-0">
              <div className="d-flex justify-content-between m-0 p-0 pt-2 align-items-center px-3">
                <p className="fs_20 fw-semibold m-0">Analytics</p>
                <Button
                  className="red_ff fs_16 rounded-1 mt-1 text-white py-2 px-3 border-0 button-color fw-medium"
                  onClick={handleShowDownloadModal}
                >
                  Download Card
                </Button>
              </div>
              <hr />
              <div className="d-lg-flex pt-2 bg-white px-3 justify-content-between">
                <div className="mb-4 red_ff">
                  <p className="fs_20 fw-semibold red_ff m-0 pb-3">Overview</p>
                  <p className="fs_14 m-0 font-color1 red_ff">
                    Current Balance
                  </p>
                  <div className="d-flex align-items-center gap-2">
                    <p className="fs_32 mb-4 fw-semibold red_ff">$12345.00</p>
                    <span className=" rounded-5 py-1 px-3 fs_13 mb-3 bg_yellow fw-medium ">
                      Prepaid
                    </span>
                  </div>
                  <div className="d-flex red_ff align-items-center gap-3 flex-wrap">
                    <div>
                      <p className="m-0 font-color1 red_ff">
                        Total Credit Used
                      </p>
                      <p className="fs_18 fw-semibold mt-1 red_ff">
                        $1000000.00
                      </p>
                    </div>
                    <div>
                      <p className="m-0 font-color1 red_ff">Cash Limit</p>
                      <p className="fs_18 fw-semibold mt-1 red_ff">$25000.00</p>
                    </div>
                  </div>
                </div>
                <div className="text-end p-0 m-0">
                  <Image
                    width={300}
                    className="mb-3 img-fluid"
                    src={HDFC_Card}
                    alt="Card"
                  />
                </div>
              </div>
              <hr />
              <div>
                <p className="ps-3 fs_20 fw-semibold red_ff">Card Details</p>
                <div className="d-flex align-items-center px-3 gap-3 justify-content-between flex-wrap">
                  <div>
                    <p className="m-0 fs_14 font-color1">Card Number</p>
                    <p className="fs_18 fw-semibold mt-1 red_ff">
                      1234 5678 0123 4567
                    </p>
                  </div>
                  <div>
                    <p className="m-0 fs_14 font-color1">Name on Card</p>
                    <p className="fs_18 fw-semibold mt-1 red_ff">
                      Andrew James
                    </p>
                  </div>
                  <div>
                    <p className="m-0 fs_14 font-color1">Card Type</p>
                    <p className="fs_18 fw-semibold mt-1 red_ff">Physical</p>
                  </div>
                  <div>
                    <p className="m-0 fs_14 font-color1">Issued On</p>
                    <p className="fs_18 fw-semibold mt-1 red_ff">02/24</p>
                  </div>
                </div>
              </div>
            </Card.Body>
            <Card.Footer className="d-flex gap-3 justify-content-end gap-3 mt-5 pt-5 flex-wrap bg-white border-0">
              <Button className=" top-up-button my-3 red_ff fs_16">
                Top-Up Card
              </Button>
              <Button className=" top-up-button my-3 red_ff fs_16">
                Manage Card
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <DownloadCardModal
          show={showDownloadModal}
          handleClose={handleCloseDownloadModal}
        />
        <Col xs={12} md={4} className="mb-4">
          <Card className="border-color d-flex flex-column h-100 p-0 m-0 bg-white">
            <Card.Body className="p-0">
              <div className="p-0 pt-3 px-3">
                <p className="fs_20 fw-semibold m-0">Card Preferences</p>
              </div>
              <hr />
              <p className="px-3 fs_18 pb-3 fw-semibold m-0">Color</p>
              <div className="d-flex flex-wrap px-3 justify-content-between">
                <span className="circle bg-0 rounded-circle d-flex justify-content-center align-content-center text-wrap">
                  <div className="d-flex justify-content-center align-items-center">
                    <Image width={25} src={Arrow} alt="" />
                  </div>
                </span>
                <span className="circle bg-1 rounded-circle"></span>
                <span className="circle bg-2 rounded-circle"></span>
                <span className="circle bg-3 rounded-circle"></span>
                <span className="circle bg-4 rounded-circle"></span>

                <span className="circle bg-5 rounded-circle"></span>
                <span className="circle bg-6 rounded-circle"></span>
              </div>
              <hr />
              <div className="px-3">
                <p className="fs_18 fw-semibold red_ff">Name on Card</p>
                <Form.Select
                  className="red_ff"
                  aria-label="Default select example"
                >
                  <option>Select Preference</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Cards;
