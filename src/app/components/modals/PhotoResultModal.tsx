import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import CongratulationsModal from './CongratulationsModal';

interface PhotoResultModalProps {
  show: boolean;
  onHide: () => void;
  uploadedImageUrl: string | null;
  userName?: string;
  onBackToUpload?: () => void;
}

const backgroundImages = [
  '/images/random_background_1.png',
  '/images/random_background_2.png',
  '/images/random_background_3.png'
];

const congratulationMessages = [
  "Này {name}, Hôm nay có lẽ là ngày bạn tràng gồng để nhật - có lẽ là do selfie bằng Redmi Note 13 Pro đó.",
  "Tuyệt vời {name}! Hành trình selfie với Redmi Note 13 của bạn thật ấn tượng!",
  "Xuất sắc {name}! Bạn đã selfie thành công với Redmi Note 13 Series!",
  "Bravo {name}! Redmi Note 13 Series chính là lựa chọn hoàn hảo cho selfie!",
  "Fantastic {name}! Cảm ơn bạn đã selfie cùng Redmi Note 13 Series!"
];

export default function PhotoResultModal({ show, onHide, uploadedImageUrl, userName = "bạn", onBackToUpload }: PhotoResultModalProps) {
  const [currentBackground, setCurrentBackground] = useState('');
  const [currentMessage, setCurrentMessage] = useState('');
  const [showCongratulations, setShowCongratulations] = useState(false);

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

  const handleBackToUpload = () => {
    if (onBackToUpload) {
      onBackToUpload();
    } else {
      onHide();
    }
  };

  return (
    <>
      <Modal 
        show={show} 
        onHide={onHide} 
        centered 

        className="photo-result-modal"
        style={{ zIndex: 1070 }} // Tăng z-index để đảm bảo hiển thị trên cùng
        backdrop="static" // Không cho click ra ngoài để đóng
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
          className="content-overlay position-relative d-flex flex-column align-items-center justify-content-between text-center"
          style={{
            minHeight: '90vh', // Tăng height để đảm bảo full screen
            zIndex: 2,
            padding: '0'
          }}
        >
          {/* Top Bar - White div with back button */}
          <div 
            className="top-bar w-100 d-flex align-items-center"
            style={{
              backgroundColor: 'rgba(255,255,255,0.98)', // Tăng opacity
              padding: '15px 20px',
              backdropFilter: 'blur(15px)' // Tăng blur
            }}
          >
            <button
              type="button"
              className="btn p-0 d-flex align-items-center"
              onClick={handleBackToUpload}
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                fontSize: '20px',
                color: '#333'
              }}
            >
              ←
            </button>
          </div>

          {/* Main Content - Photo và text */}
          <div className="main-content flex-grow-1 d-flex flex-column align-items-center justify-content-center p-4">
            {/* Photo với Border Redmi */}
            <div className="photo-container mb-4">
              <div 
                className="photo-frame"
                style={{
                  width: '320px',
                  backgroundColor: 'rgba(255,255,255,0.98)', // Tăng opacity
                  borderRadius: '20px',
                  padding: '20px',
                  boxShadow: '0 15px 40px rgba(0,0,0,0.4)' // Tăng shadow
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
          </div>

          {/* Bottom Bar - White div with action buttons */}
          <div 
            className="bottom-bar w-100"
            style={{
              backgroundColor: 'rgba(255,255,255,0.98)', // Tăng opacity
              padding: '20px',
              backdropFilter: 'blur(15px)' // Tăng blur
            }}
          >
            <div className="action-buttons d-flex gap-3 justify-content-center">
              <button
                className="btn"
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
                  border: '2px solid #ddd',
                  color: '#333',
                  padding: '12px 32px',
                  borderRadius: '25px',
                  fontWeight: '600',
                  fontSize: '16px',
                  minWidth: '140px'
                }}
              >
                Chia sẻ
              </button>
              
              <button
                className="btn"
                onClick={() => {
                  setShowCongratulations(true);
                }}
                style={{
                  backgroundColor: '#ff6900',
                  border: '2px solid #ff6900',
                  color: 'white',
                  padding: '12px 32px',
                  borderRadius: '25px',
                  fontWeight: '600',
                  fontSize: '16px',
                  minWidth: '140px'
                }}
              >
                Nhận quà ngay
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
    
    <CongratulationsModal 
      show={showCongratulations}
      onHide={() => {
        setShowCongratulations(false);
        onHide(); // Close all modals when congratulations is done
      }}
      onBackHome={() => {
        setShowCongratulations(false);
        onHide(); // Close all modals and return to home
      }}
    />
    </>
  );
}