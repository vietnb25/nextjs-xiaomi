import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface UserFormModalProps {
  show: boolean;
  onHide: () => void;
  onStartGame: () => void;
}

export default function UserFormModal({ show, onHide, onStartGame }: UserFormModalProps) {
  return (
    <Modal show={show} onHide={onHide} centered className="game-modal">
      <Modal.Header closeButton className="border-0">
        <Modal.Title as="h4" className="w-100 text-center">
          Thông tin nhận thưởng
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-4">
        <form className="game-form h-100 d-flex flex-column">
          <div className="flex-grow-1">
            <div className="form-group mb-4">
              <label className="fw-medium mb-2">Họ và tên đệm</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập họ và tên đệm"
              />
            </div>

            <div className="form-group mb-4">
              <label className="fw-medium mb-2">Tên</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập tên của bạn"
              />
            </div>

            <div className="form-group mb-4">
              <label className="fw-medium mb-2">Địa chỉ email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Nhập địa chỉ email của bạn"
              />
            </div>

            <div className="form-group mb-4">
              <label className="fw-medium mb-2">Số điện thoại</label>
              <input
                type="tel"
                className="form-control"
                placeholder="Nhập số điện thoại của bạn"
              />
            </div>

            <div className="d-flex gap-4 mb-4">
              <div className="flex-fill">
                <label className="fw-medium mb-2">Tỉnh/Thành phố</label>
                <select className="form-control form-select">
                  <option>Tp Hồ Chí Minh</option>
                </select>
              </div>
              <div className="flex-fill">
                <label className="fw-medium mb-2">Quận/Huyện</label>
                <select className="form-control form-select">
                  <option>Quận 1</option>
                </select>
              </div>
            </div>

            <div className="form-group mb-4">
              <label className="fw-medium mb-2">Phường/Xã</label>
              <select className="form-control form-select">
                <option>Phường 12</option>
              </select>
            </div>

            <div className="form-group mb-4">
              <label className="fw-medium mb-2">Địa chỉ</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập địa chỉ"
              />
            </div>
          </div>

          <div className="modal-footer-button py-4">
            <Button 
              variant="primary" 
              className="w-100"
              size="lg"
              onClick={onStartGame}
            >
              Bắt đầu chơi
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}
