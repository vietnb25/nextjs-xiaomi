import React from 'react';
import { Modal } from 'react-bootstrap';

interface CongratulationsModalProps {
  show: boolean;
  onHide: () => void;
  onBackHome: () => void;
}

export default function CongratulationsModal({ show, onHide, onBackHome }: CongratulationsModalProps) {
  return (
    <Modal 
      show={show} 
      onHide={onHide} 
      centered 

      className="congratulations-modal"
      style={{ zIndex: 1080 }}
      backdrop="static"
    >
      <Modal.Body className="p-0 position-relative overflow-hidden">
        {/* Background */}
        <div 
          className="background-layer position-absolute w-100 h-100"
          style={{
            background: '#ffffff',
            top: 0,
            left: 0,
            zIndex: 1
          }}
        />
        
        {/* Content */}
        <div 
          className="content-overlay position-relative d-flex flex-column align-items-center justify-content-between text-center"
          style={{
            minHeight: '90vh',
            zIndex: 2,
            padding: '0'
          }}
        >
          {/* Top Bar - White div with close button */}
          <div 
            className="top-bar w-100 d-flex align-items-center justify-content-end"
            style={{
              backgroundColor: 'rgba(255,255,255,0.98)',
              padding: '15px 20px',
              backdropFilter: 'blur(15px)'
            }}
          >
            <button
              type="button"
              className="btn p-0 d-flex align-items-center btn-close"
              onClick={onHide}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                fontSize: '20px',
                color: '#333'
              }}
            >
              ✕
            </button>
          </div>

          {/* Cover Image with Text Overlay - Outside all containers */}
          <div className="cover-section position-relative w-100" style={{ margin: 0 }}>
            <img
              src="/images/Cover1.png"
              alt="Cover"
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                display: 'block'
              }}
            />
            
            {/* Text Overlay on Cover Image */}
            <div 
              className="text-overlay position-absolute"
              style={{
                top: '30px',
                left: '25px',
                zIndex: 10,
                maxWidth: '60%'
              }}
            >
              <div 
                className="minigame-label mb-2"
                style={{
                  color: '#666',
                  fontSize: '12px',
                  fontWeight: '500',
                  letterSpacing: '0.5px'
                }}
              >
                Minigame
              </div>
              <h2 
                className="overlay-title"
                style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#333',
                  lineHeight: '1.3',
                  margin: 0
                }}
              >
                Khuấy đảo <span style={{ color: '#00BCD4' }}>Minigame</span>
                <br />
                Săn ngay quà khủng
                <br />
                cùng <span style={{ color: '#00BCD4' }}>Xiaomi</span>
              </h2>
            </div>
          </div>

          {/* Main Content */}
          <div className="main-content flex-grow-1 d-flex flex-column align-items-center justify-content-center">

            {/* Content with padding */}
            <div className="px-4">
              {/* Congratulations Text */}
              <div className="congratulations-section mb-4 gift-section">
                <div className="celebration-emoji mb-3">
                  🎉🎊
                </div>
                <h3 
                  className="congratulations-text mb-3"
                  style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#333',
                    lineHeight: '1.4'
                  }}
                >
                  Chúc mừng bạn đã hoàn thành tất cả các
                  <br />
                  thử thách của chúng tôi. Bạn sẽ nhận được
                  <br />
                  phần thưởng trị giá:
                </h3>
                
                {/* Prize Amount */}
                <div 
                  className="prize-amount mb-3"
                  style={{
                    fontSize: '32px',
                    fontWeight: 'bold',
                    color: '#4b65dcff',
                    border: '2px solid white',
                    borderRadius: '15px',
                    padding: '10px 20px',
                    display: 'inline-block',
                    backgroundColor: 'rgba(137, 137, 137, 0.1)'
                  }}
                >
                  20.000 VND
                </div>
                
                {/* Prize Details */}
                <p 
                  className="prize-details"
                  style={{
                    fontSize: '14px',
                    color: '#666',
                    lineHeight: '1.4',
                    maxWidth: '300px',
                    margin: '0 auto'
                  }}
                >
                  Bạn sẽ nhận được tiền nạp vào số điện thoại
                  <br />
                  <strong>0234672343</strong> trong vòng 24 giờ làm việc
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="bottom-section w-100 p-4 action-buttons">
            {/* Back Home Button */}
            <button
              className="btn w-100 mb-3"
              onClick={onBackHome}
              style={{
                backgroundColor: 'transparent',
                border: '2px solid #ddd',
                color: '#333',
                padding: '12px 32px',
                borderRadius: '25px',
                fontWeight: '600',
                fontSize: '16px',
                maxWidth: '300px',
                margin: '0 auto',
                display: 'block'
              }}
            >
              Trở về trang home
            </button>
            
            {/* Footer Text */}
            <p 
              className="footer-text text-center"
              style={{
                fontSize: '12px',
                color: '#666',
                margin: '0',
                lineHeight: '1.4'
              }}
            >
              Mọi thắc mắc vui lòng liên hệ{' '}
              <a 
                href="https://www.facebook.com/XiaomiVietnam" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#2196F3', textDecoration: 'none' }}
              >
                https://www.facebook.com/XiaomiVietnam
              </a>
              {' '}hoặc 19000118.
            </p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}
