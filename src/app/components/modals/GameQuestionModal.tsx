import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import PhotoResultModal from './PhotoResultModal';
import './game.css';

interface Option {
  id: string;
  text: string;
  isCorrect: boolean;
  image?: string;
}

interface Question {
  id: number;
  text: string;
  options: Option[];
  type?: 'quiz' | 'upload';
}

const questions: Question[] = [
  {
    id: 1,
    type: 'quiz',
    text: "Màn hình của điện thoại Redmi Note 13/Redmi Note 13 Pro/Redmi Note 13 Pro+ có tần số quét là bao nhiêu?",
    options: [
      { id: "A", text: "60Hz", isCorrect: false, image: '/images/question1.png' },
      { id: "B", text: "120Hz AMOLED", isCorrect: true, image: '/images/question1.png' }
    ]
  },
  {
    id: 2,
    type: 'quiz',
    text: "Redmi Note 13 Pro/Pro+ sở hữu camera chính có độ phân giải bao nhiêu?",
    options: [
      { id: "A", text: "108MP", isCorrect: false, image: '/images/question1.png' },
      { id: "B", text: "200MP", isCorrect: true, image: '/images/question1.png' }
    ]
  },
  {
    id: 3,
    type: 'upload',
    text: "Upload ảnh selfie của bạn để hoàn thành thử thách",
    options: []
  }
];

interface GameQuestionModalProps {
  show: boolean;
  onHide: () => void;
  onComplete: () => void;
  userInfo?: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
}

export default function GameQuestionModal({ show, onHide, onComplete, userInfo }: GameQuestionModalProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [uploadedImage, setUploadedImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageValidation, setImageValidation] = useState<{
    isValid: boolean;
    message: string;
    type: 'success' | 'error' | 'info';
  }>({ isValid: false, message: '', type: 'info' });
  const [confirmFace, setConfirmFace] = useState(false);
  const [showPhotoResult, setShowPhotoResult] = useState(false);

  // Tạo tên đầy đủ từ userInfo
  const getUserName = () => {
    if (userInfo?.lastName) {
      return userInfo.lastName;
    } else if (userInfo?.firstName) {
      return userInfo.firstName;
    }
    return "bạn";
  };

  const resetGame = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowCorrectAnswer(false);
    setUploadedImage(null);
    setImagePreview(null);
    setImageValidation({ isValid: false, message: '', type: 'info' });
    setConfirmFace(false);
    setShowPhotoResult(false);
  };

  const validateImage = (file: File): Promise<{isValid: boolean, message: string, type: 'success' | 'error' | 'info'}> => {
    return new Promise((resolve) => {
      if (file.size > 5 * 1024 * 1024) {
        resolve({ isValid: false, message: '❌ File quá lớn. Vui lòng chọn ảnh dưới 5MB', type: 'error' });
        return;
      }

      if (!file.type.startsWith('image/')) {
        resolve({ isValid: false, message: '❌ Vui lòng chọn file ảnh hợp lệ', type: 'error' });
        return;
      }

      const img = new Image();
      img.onload = () => {
        if (img.width < 200 || img.height < 200) {
          resolve({ isValid: false, message: '❌ Ảnh quá nhỏ. Vui lòng chọn ảnh ít nhất 200x200px', type: 'error' });
        } else {
          resolve({ isValid: true, message: '✅ Ảnh hợp lệ! Vui lòng xác nhận ảnh chứa khuôn mặt của bạn', type: 'success' });
        }
      };
      img.onerror = () => {
        resolve({ isValid: false, message: '❌ Không thể đọc file ảnh', type: 'error' });
      };
      img.src = URL.createObjectURL(file);
    });
  };

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option.id);
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploadedImage(null);
    setImagePreview(null);
    setConfirmFace(false);
    setImageValidation({ isValid: false, message: 'Đang kiểm tra ảnh...', type: 'info' });

    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    const validation = await validateImage(file);
    setImageValidation(validation);

    if (validation.isValid) {
      setUploadedImage(file);
    }
  };

  const handleConfirmFaceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmFace(event.target.checked);
  };

  const handleContinue = () => {
    const currentQ = questions[currentQuestion];
    
    if (currentQ.type === 'upload') {
      if (!uploadedImage || !confirmFace) return;
      
      // Bỏ qua thông báo, nhảy thẳng sang PhotoResultModal
      setShowPhotoResult(true);
      return;
    }

    if (!selectedOption) return;
    
    const selectedOptionData = currentQ.options.find(opt => opt.id === selectedOption);
    setShowCorrectAnswer(true);

    if (selectedOptionData?.isCorrect) {
      setTimeout(() => {
        setShowCorrectAnswer(false);
        setSelectedOption(null);
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(prev => prev + 1);
        } else {
          resetGame();
          onComplete();
        }
      }, 3000);
    } else {
      setTimeout(() => {
        setShowCorrectAnswer(false);
        setSelectedOption(null);
      }, 3000);
    }
  };

  const handlePhotoResultClose = () => {
    setShowPhotoResult(false);
    setUploadedImage(null);
    setImagePreview(null);
    setConfirmFace(false);
    setImageValidation({ isValid: false, message: '', type: 'info' });
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      resetGame();
      onComplete();
    }
  };

  const handleBackToUpload = () => {
    setShowPhotoResult(false);
    // Giữ nguyên dữ liệu upload để user có thể chỉnh sửa
  };

  const handleModalHide = () => {
    resetGame();
    onHide();
  };

  const currentQ = questions[currentQuestion];
  const canContinue = currentQ.type === 'upload' 
    ? uploadedImage && imageValidation.isValid && confirmFace 
    : selectedOption;

  return (
    <>
      {/* Game Question Modal - chỉ hiện khi không show PhotoResult */}
      <Modal show={show && !showPhotoResult} onHide={handleModalHide} centered className="game-modal">
        {/* Result Overlay - chỉ cho quiz, không cho upload */}
        {showCorrectAnswer && currentQ.type === 'quiz' && (
          <div className="result-overlay position-fixed d-flex flex-column align-items-center justify-content-center" style={{ zIndex: 1 }}>
            <div className="result-content text-center">
              {selectedOption && questions[currentQuestion].options.find(opt => opt.id === selectedOption)?.isCorrect ? (
                <>
                  <div className="result-emoji mb-3">
                    <img src="/images/star-struck.png" alt="Happy" width={80} height={80} />
                  </div>
                  <div className="result-text text-white">
                    <img src="/images/yeah.png" alt="Success" width={60} height={60} />
                    <div className="result-subtitle">
                      Câu trả lời chính xác.<br />
                      Tiếp tục nào!
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="result-emoji mb-3">
                    <img src="/images/tired-face.png" alt="Sad" width={80} height={80} />
                  </div>
                  <div className="result-text text-white">
                    <img src="/images/oops.png" alt="Sad" width={60} height={60} />
                    <div className="result-subtitle">
                      Suy đúng rồi.<br />
                      Thử lại lần sau nhé!
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
        
        <Modal.Header closeButton className="border-0" style={{ position: 'relative', zIndex: 1050 }}>
          <Modal.Title as="h4" className="w-100 text-center"></Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4">
          <div className="position-relative">
            {/* Progress */}
            <div className="challenge-progress text-center mb-4">
              <div className="progress-dots d-flex justify-content-center align-items-center gap-0">
                {questions.map((_, index) => (
                  <React.Fragment key={index}>
                    <div 
                      className="position-relative d-flex align-items-center justify-content-center"
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        backgroundColor: index < currentQuestion ? '#6F64A4' : index === currentQuestion ? '#6F64A4' : '#E5E5E5',
                        border: '2px solid',
                        borderColor: index < currentQuestion ? '#6F64A4' : index === currentQuestion ? '#6F64A4' : '#E5E5E5'
                      }}
                    >
                      {index < currentQuestion ? (
                        <img src="/images/star-icon.svg" alt="Completed" width={20} height={20} />
                      ) : index === currentQuestion ? (
                        <img src="/images/star-icon.svg" alt="Current" width={20} height={20} />
                      ) : (
                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#A3A3A3' }} />
                      )}
                      {index === currentQuestion && (
                        <div 
                          className="position-absolute"
                          style={{
                            top: '50px',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          <span className="fw-semibold" style={{ color: '#6F64A4', fontSize: '16px' }}>
                            Thử thách {currentQuestion + 1}
                          </span>
                        </div>
                      )}
                    </div>
                    {index < questions.length - 1 && (
                      <div 
                        style={{
                          width: '40px',
                          height: '4px',
                          backgroundColor: index < currentQuestion ? '#6F64A4' : '#E5E5E5'
                        }}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="question-text text-center mb-4">
              {currentQ.text}
            </div>

            {currentQ.type === 'upload' ? (
              <div className="upload-section">
                <div className="upload-area text-center p-4 mb-3" 
                  style={{
                    border: '2px dashed #ddd',
                    borderRadius: '12px',
                    backgroundColor: '#f8f9fa',
                    minHeight: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {imagePreview ? (
                    <div className="uploaded-preview">
                      <img 
                        src={imagePreview} 
                        alt="Preview" 
                        style={{
                          maxWidth: '100%',
                          maxHeight: '150px',
                          borderRadius: '8px',
                          marginBottom: '10px'
                        }}
                      />
                      
                      {imageValidation.message && (
                        <p className="mb-2" style={{ 
                          color: imageValidation.type === 'success' ? '#28a745' : 
                                imageValidation.type === 'error' ? '#dc3545' : '#ff6900',
                          fontWeight: '600',
                          fontSize: '14px'
                        }}>
                          {imageValidation.message}
                        </p>
                      )}
                      
                      <button 
                        className="btn btn-outline-primary btn-sm"
                        onClick={() => document.getElementById('file-input')?.click()}
                      >
                        Thay đổi ảnh
                      </button>
                    </div>
                  ) : (
                    <div className="upload-placeholder">
                      <div className="mb-3">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="#6F64A4">
                          <path d="M9,9V15H15V9H9M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10.64 7.71,12.13 8.83,13.15L9.16,13.43L10,14.03V16H14V14.03L14.84,13.43L15.17,13.15C16.29,12.13 17,10.64 17,9A5,5 0 0,0 12,4Z" />
                        </svg>
                      </div>
                      <h5 className="mb-2" style={{ color: '#6F64A4' }}>Upload ảnh selfie</h5>
                      <p className="text-muted mb-3">
                        Ảnh phải chứa khuôn mặt của bạn
                        <br />
                        <small>Kéo thả ảnh vào đây hoặc click để chọn file</small>
                      </p>
                      <button 
                        className="btn btn-primary"
                        onClick={() => document.getElementById('file-input')?.click()}
                        style={{ backgroundColor: '#6F64A4', border: 'none' }}
                      >
                        Chọn ảnh
                      </button>
                    </div>
                  )}
                </div>
                
                <input
                  id="file-input"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  style={{ display: 'none' }}
                />

                {uploadedImage && imageValidation.isValid && (
                  <div className="face-confirmation mb-3 p-3" style={{
                    backgroundColor: '#f8f9fa',
                    borderRadius: '8px',
                    border: '1px solid #dee2e6'
                  }}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="confirmFace"
                        checked={confirmFace}
                        onChange={handleConfirmFaceChange}
                        style={{ accentColor: '#6F64A4' }}
                      />
                      <label className="form-check-label" htmlFor="confirmFace" style={{ fontSize: '14px' }}>
                        ✅ Tôi xác nhận ảnh này chứa khuôn mặt của tôi và đồng ý sử dụng ảnh này cho mục đích tham gia minigame
                      </label>
                    </div>
                  </div>
                )}
                
                <div className="upload-instructions text-center">
                  <small className="text-muted">
                    Chấp nhận: JPG, PNG, GIF. Kích thước tối đa: 5MB, tối thiểu: 200x200px
                    <br />
                    <strong>Lưu ý:</strong> Vui lòng đảm bảo ảnh chứa khuôn mặt rõ ràng
                  </small>
                </div>
              </div>
            ) : (
              <div className="d-flex flex-column gap-3">
                {currentQ.options.map((option) => (
                  <button
                    key={option.id}
                    className={`option-button position-relative ${selectedOption === option.id ? 'selected' : ''} ${showCorrectAnswer && selectedOption === option.id ? (option.isCorrect ? 'correct' : 'incorrect') : ''} ${showCorrectAnswer && option.isCorrect ? 'correct' : ''}`}
                    onClick={() => handleOptionSelect(option)}
                    disabled={showCorrectAnswer}
                    style={{ 
                      padding: '0',
                      textAlign: 'left',
                      border: selectedOption === option.id ? '2px solid #007bff' : '1px solid #ddd',
                      borderRadius: '12px',
                      background: 'white',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    {option.image && (
                      <div 
                        className="w-100 position-relative"
                        style={{
                          backgroundImage: `url(${option.image})`,
                          backgroundSize: 'contain',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center',
                          height: 'auto',
                          minHeight: '120px',
                          aspectRatio: 'auto'
                        }}
                      >
                        <img 
                          src={option.image} 
                          alt={option.text}
                          style={{ 
                            width: '100%', 
                            height: 'auto',
                            opacity: 0
                          }}
                        />
                      </div>
                    )}
                    
                    <div 
                      className="w-100"
                      style={{
                        backgroundColor: 'white',
                        color: '#333',
                        padding: '8px 12px'
                      }}
                    >
                      <span className="option-id fw-bold me-2" style={{ fontSize: '14px' }}>{option.id}.</span>
                      <span style={{ fontSize: '14px', fontWeight: '400' }}>{option.text}</span>
                    </div>
                    
                    {selectedOption === option.id && !showCorrectAnswer && (
                      <div 
                        className="position-absolute"
                        style={{
                          top: '10px',
                          right: '10px',
                          width: '24px',
                          height: '24px',
                          backgroundColor: '#007bff',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '14px',
                          fontWeight: 'bold'
                        }}
                      >
                        ✓
                      </div>
                    )}

                    {showCorrectAnswer && selectedOption === option.id && (
                      <div 
                        className="position-absolute"
                        style={{
                          top: '10px',
                          right: '10px',
                          width: '24px',
                          height: '24px',
                          backgroundColor: option.isCorrect ? '#28a745' : '#dc3545',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '14px',
                          fontWeight: 'bold'
                        }}
                      >
                        {option.isCorrect ? "✓" : "✕"}
                      </div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </Modal.Body>
        
        <Modal.Footer className="border-0 justify-content-center">
          <button 
            className="btn btn-primary px-4 py-2"
            onClick={handleContinue}
            disabled={!canContinue || showCorrectAnswer}
            style={{
              backgroundColor: canContinue && !showCorrectAnswer ? '#ff6900' : '#ccc',
              border: 'none',
              borderRadius: '25px',
              fontWeight: '600',
              cursor: canContinue && !showCorrectAnswer ? 'pointer' : 'not-allowed',
              width: '200px'
            }}
          >
            Tiếp tục
          </button>
        </Modal.Footer>
      </Modal>

      {/* Photo Result Modal */}
      <PhotoResultModal
        show={showPhotoResult}
        onHide={handlePhotoResultClose}
        uploadedImageUrl={imagePreview}
        userName={getUserName()}
        onBackToUpload={handleBackToUpload}
      />
    </>
  );
}