import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface DeviceFormModalProps {
  show: boolean;
  onHide: () => void;
  onContinue: () => void;
}

export default function DeviceFormModal({ show, onHide, onContinue }: DeviceFormModalProps) {
  return (
    <Modal show={show} onHide={onHide} centered className="game-modal">
      <Modal.Header closeButton className="border-0">
        <Modal.Title as="h4" className="w-100 text-center">
          Nhập mã UQC cho thiết bị
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-4">
        <form className="game-form h-100 d-flex flex-column">
          <div className="flex-grow-1">
            <div className="form-group mb-4">
              <label className="fw-medium mb-2">Cửa hàng</label>
              <div className="input-with-icon">
                <select className="form-control form-select">
                  <option>CellphoneS Nguyễn Thái Học</option>
                </select>
              </div>
            </div>

            <div className="form-group mb-4">
              <label className="fw-medium mb-2">Thiết bị</label>
              <div className="input-with-icon">
                <select className="form-control form-select">
                  <option>Redmi Note 13 Pro+ 5G</option>
                </select>
              </div>
            </div>

            <div className="form-group mb-4">
              <label className="fw-medium mb-2">Code</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nhập mã code"
              />
            </div>
          </div>

          <div className="modal-footer-button py-4">
            <Button 
              variant="primary" 
              className="w-100"
              size="lg"
              onClick={onContinue}
            >
              Tiếp tục
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
}
