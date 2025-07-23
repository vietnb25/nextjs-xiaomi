import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';

interface PhotoResultModalProps {
  show: boolean;
  onHide: () => void;
  uploadedImageUrl: string | null;
  userName?: string;
}

const backgroundImages = [
  '/images/random_background_1.png',
  '/images/random_background_2.png',
  '/images/random_background_3.png'
];

const congratulationMessages = [

  "Tuyệt vời {name}! Hành trình selfie với Redmi Note 13 của bạn thật ấn tượng!",
  "Xuất sắc {name}! Bạn đã selfie thành công với Redmi Note 13 Series!",
  "Bravo {name}! Redmi Note 13 Series chính là lựa chọn hoàn hảo cho selfie!",
  "Fantastic {name}! Cảm ơn bạn đã selfie cùng Redmi Note 13 Series!"
];

export default function PhotoResultModal({ show, onHide, uploadedImageUrl, userName = "bạn" }: PhotoResultModalProps) {
  const [currentBackground, setCurrentBackground] = useState('');
  const [currentMessage, setCurrentMessage] = useState('');

  useEffect(() => {
    if (show) {
      // Random background
      const randomBg = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];
      setCurrentBackground(randomBg);
      
      // Random message với tên user
      const randomMsg = congratulationMessages[Math.floor(Math.random() * congratulationMessages.length)];
      setCurrentMessage(randomMsg.replace('{name}', userName));
    }
  }, [show, userName]);

  return (
    <Modal 
      show={show} 
      onHide={onHide} 
      centered 
      
      className="photo-result-modal"
      style={{ zIndex: 1060 }}
    >
      <Modal.Body className="p-0 position-relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="background-layer position-absolute w-100 h-100"
          style={{
            backgroundImage: `url(${currentBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            top: 0,
            left: 0,
            zIndex: 1
          }}
        />
        
        {/* Content */}
        <div 
          className="content-overlay position-relative d-flex flex-column align-items-center justify-content-center text-center p-4"
          style={{
            minHeight: '70vh',
            zIndex: 2
          }}
        >
          {/* Close Button */}
          <button
            type="button"
            className="btn-close position-absolute"
            aria-label="Close"
            onClick={onHide}
            style={{
              top: '20px',
              left: '20px',
              zIndex: 10,
              backgroundColor: 'transparent',
              border: 'none',
              fontSize: '24px',
              color: 'white'
            }}
          >
            ←
          </button>

          {/* Photo với Border Redmi */}
          <div className="photo-container mb-4">
            <div 
              className="photo-frame"
              style={{
                width: '320px',
                backgroundColor: 'rgba(255,255,255,0.95)',
                borderRadius: '20px',
                padding: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
              }}
            >
              {/* User Photo */}
              <div 
                className="user-photo mb-3"
                style={{
                  width: '100%',
                  height: '280px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  backgroundColor: '#f0f0f0'
                }}
              >
                {uploadedImageUrl && (
                  <img
                    src={uploadedImageUrl}
                    alt="User Selfie"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                )}
              </div>

              {/* Redmi Branding */}
              <div className="branding-section">
                <div className="d-flex align-items-center mb-2">
                  <div 
                    className="brand-logo me-2"
                    style={{
                      width: '40px',
                      height: '40px',
                      background: 'linear-gradient(135deg, #4CAF50, #2196F3, #9C27B0)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                      fontSize: '16px'
                    }}
                  >
                    13
                  </div>
                  <span 
                    style={{ 
                      fontSize: '18px', 
                      fontWeight: 'bold',
                      background: 'linear-gradient(135deg, #4CAF50, #2196F3, #9C27B0)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    Redmi Note 13 Series
                  </span>
                </div>
                
                <p 
                  style={{
                    fontSize: '14px',
                    color: '#666',
                    lineHeight: '1.4',
                    margin: 0,
                    textAlign: 'left'
                  }}
                >
                  {currentMessage}
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="action-buttons d-flex gap-3 w-100" style={{ maxWidth: '320px' }}>
            <button
              className="btn flex-fill"
              onClick={() => {
                if (navigator.share && uploadedImageUrl) {
                  navigator.share({
                    title: 'Redmi Note 13 Series Selfie',
                    text: currentMessage,
                    url: window.location.href
                  });
                }
              }}
              style={{
                backgroundColor: 'transparent',
                border: '2px solid rgba(255,255,255,0.8)',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '25px',
                fontWeight: '600',
                fontSize: '16px',
                backdropFilter: 'blur(10px)'
              }}
            >
              Chia sẻ
            </button>
            
            <button
              className="btn flex-fill"
              onClick={() => {
                // Logic nhận quà
                onHide();
              }}
              style={{
                backgroundColor: '#ff6900',
                border: '2px solid #ff6900',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '25px',
                fontWeight: '600',
                fontSize: '16px'
              }}
            >
              Nhận quà ngay
            </button>
          </div>

        </div>
      </Modal.Body>
    </Modal>
  );
}