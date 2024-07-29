import React from 'react';
import { Modal, Button, Card, Row } from 'react-bootstrap';
import Apple_wallet from "../../../../public/assets/images/svg/apple-wallet.svg";
import Samsung_wallet from "../../../../public/assets/images/svg/samsung-wallet.svg";
import Google_wallet from "../../../../public/assets/images/svg/google_wallet.svg";
import Image from 'next/image';

interface DownloadCardModalProps {
  show: boolean;
  handleClose: () => void;
}

const DownloadCardModal: React.FC<DownloadCardModalProps> = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered >
      <Modal.Header closeButton className='border-0  m-0 p-0 pt-4 pe-4'></Modal.Header>
      <Modal.Body className='text-center dashboard-text-color'>
        <Modal.Title className='fs_24 fw-semibold text-center mb-2 m-0 p-0 red_ff dashboard-text-color'>Download Card</Modal.Title>
        <Row>
          <Card className='mb-2 border-0 m-0'>
            <Card.Body className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>
                <Image src={Apple_wallet} alt="Apple Wallet" className="me-3 ms-3" />
                <span className='fs-18 red_ff'>Apple Wallet</span>
              </div>
              <input type="radio" name="wallet" className='me-4 ' style={{width:"30px",height:"40px",backgroundColor:"white"}}/>
            </Card.Body>
          </Card>
          <Card className='mb-2 border-0 m-0'>
            <Card.Body className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>
                <Image src={Samsung_wallet} alt="Samsung Wallet" className="me-3 ms-3" />
                <span className="fs-18 red_ff"> Samsung Wallet</span>
              </div>
              <input type="radio" name="wallet" className='me-4 ' style={{width:"30px",height:"40px",backgroundColor:"white"}}/>
            </Card.Body>
          </Card>
          <Card className='mb-2 border-0 m-0'>
            <Card.Body className='d-flex justify-content-between align-items-center'>
              <div className='d-flex align-items-center'>
                <Image src={Google_wallet} alt="Google Wallet" className="me-3 ms-3"  />
                <span className='fs-18 red_ff'>Google Wallet</span>
              </div>
              <input type="radio" name="wallet" className='me-4 ' style={{width:"30px",height:"40px",backgroundColor:"white"}} />
            </Card.Body>
          </Card>
        </Row>
        <Button variant="primary" className='w-100 mt-3 py-3'>Download</Button>
      </Modal.Body>
    </Modal>
  );
};

export default DownloadCardModal;
