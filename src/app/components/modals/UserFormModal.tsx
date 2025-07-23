import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

interface UserFormModalProps {
  show: boolean;
  onHide: () => void;
  onStartGame: (userInfo: { firstName: string; lastName: string; email: string; phone: string }) => void;
}

export default function UserFormModal({ show, onHide, onStartGame }: UserFormModalProps) {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: 'Tp Hồ Chí Minh',
    district: 'Quận 1',
    ward: 'Phường 12',
    address: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setUserInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleStartGame = () => {
    onStartGame({
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      email: userInfo.email,
      phone: userInfo.phone
    });
  };

  return (
    <Modal 
      show={show} 
      onHide={onHide} 
      centered 
      className="game-modal"
      scrollable
      dialogClassName="modal-dialog-centered-custom"
      style={{ 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        margin: 0
      }}
    >
      <div 
        className="modal-content"
        style={{
          width: '90vw',
          maxWidth: '500px',
          maxHeight: '90vh',
          margin: 'auto',
          position: 'relative'
        }}
      >
        <Modal.Header closeButton className="border-0">
          <Modal.Title as="h4" className="w-100 text-center">
            Thông tin nhận thưởng
          </Modal.Title>
        </Modal.Header>
        <Modal.Body 
          className="px-4" 
          style={{ 
            maxHeight: '70vh', 
            overflowY: 'auto',
            paddingBottom: '80px'
          }}
        >
          <form className="game-form">
            <div className="form-group mb-4">
              <label className="fw-medium mb-2">Họ và tên đệm</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập họ và tên đệm"
                value={userInfo.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
              />
            </div>

            <div className="form-group mb-4">
              <label className="fw-medium mb-2">Tên</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập tên của bạn"
                value={userInfo.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
              />
            </div>

            <div className="form-group mb-4">
              <label className="fw-medium mb-2">Địa chỉ email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Nhập địa chỉ email của bạn"
                value={userInfo.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            </div>

            <div className="form-group mb-4">
              <label className="fw-medium mb-2">Số điện thoại</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Nhập số điện thoại của bạn"
                value={userInfo.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
              />
            </div>

            <div className="d-flex gap-4 mb-4">
              <div className="flex-fill">
                <label className="fw-medium mb-2">Tỉnh/Thành phố</label>
                <select 
                  className="form-control form-select"
                  value={userInfo.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                >
                  <option>Tp Hồ Chí Minh</option>
                </select>
              </div>
              <div className="flex-fill">
                <label className="fw-medium mb-2">Quận/Huyện</label>
                <select 
                  className="form-control form-select"
                  value={userInfo.district}
                  onChange={(e) => handleInputChange('district', e.target.value)}
                >
                  <option>Quận 1</option>
                </select>
              </div>
            </div>

            <div className="form-group mb-4">
              <label className="fw-medium mb-2">Phường/Xã</label>
              <select 
                className="form-control form-select"
                value={userInfo.ward}
                onChange={(e) => handleInputChange('ward', e.target.value)}
              >
                <option>Phường 12</option>
              </select>
            </div>

            <div className="form-group mb-4">
              <label className="fw-medium mb-2">Địa chỉ</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập địa chỉ"
                value={userInfo.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        
        <Modal.Footer 
          className="border-0 px-4"
          style={{
            position: 'sticky',
            bottom: 0,
            backgroundColor: 'white',
            zIndex: 1000
          }}
        >
          <Button 
            variant="primary" 
            className="w-100"
            size="lg"
            onClick={handleStartGame}
          >
            Bắt đầu chơi
          </Button>
        </Modal.Footer>
      </div>
    </Modal>
  );
}