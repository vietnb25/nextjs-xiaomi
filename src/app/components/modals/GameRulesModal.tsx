import React from 'react';
import { Modal, Button, Image } from 'react-bootstrap';

interface GameRulesModalProps {
  show: boolean;
  onHide: () => void;
  onStart: () => void;
}

export default function GameRulesModal({ show, onHide, onStart }: GameRulesModalProps) {
  return (
    <Modal show={show} onHide={onHide} centered size="lg" className="game-modal">
      <Modal.Header closeButton>
        <Modal.Title as="h4" className="w-100 text-center fw-bold">
          Luật chơi
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-4 pb-4">
        <div className="game-form h-100 d-flex flex-column">
        <div className="text-center mb-4">
          <Image
            src="/images/background-minigame.png"
            alt="Gift Box"
            style={{
              width: '100%',
              maxWidth: '450px',
              height: 'auto',
              objectFit: 'contain'
            }}
            className="mb-3 img-fluid"
          />
          <h5 className="fw-bold mb-3">Hướng dẫn tham gia</h5>
        </div>

        <ol className="game-rules">
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, in porro officiis ratione quo autem repellendus quasi ipsa incidunt rerum, reiciendis nobis? Ea molestias est officia enim sint. Id, hic?</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, in porro officiis ratione quo autem repellendus quasi ipsa incidunt rerum, reiciendis nobis? Ea molestias est officia enim sint. Id, hic?5</li>
          <li>Mỗi khách hàng chỉ được trúng thưởng 1 lần duy nhất</li>
          <li>Giải thưởng không có giá trị quy đổi thành tiền mặt</li>
          <li>BTC có quyền từ chối trao thưởng nếu phát hiện gian lận</li>
        </ol>
</div>
        
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
            onClick={onStart}
          >
            Bắt đầu chơi
          </Button>
        </Modal.Footer>
    </Modal>
  );
}
