import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
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
}

const questions: Question[] = [
  {
    id: 1,
    text: "Màn hình của điện thoại Redmi Note 13/Redmi Note 13 Pro/Redmi Note 13 Pro+ có tần số quét là bao nhiêu?",
    options: [
      { id: "A", text: "60Hz", isCorrect: false, image: '/images/question1.png' },
      { id: "B", text: "120Hz AMOLED", isCorrect: true, image: '/images/question1.png' }
    ]
  },
  {
    id: 2,
    text: "Redmi Note 13 Pro/Pro+ sở hữu camera chính có độ phân giải bao nhiêu?",
    options: [
      { id: "A", text: "108MP", isCorrect: false, image: '/images/question1.png' },
      { id: "B", text: "200MP", isCorrect: true, image: '/images/question1.png' }
    ]
  },
  {
    id: 3, 
    text: "Pin của Redmi Note 13 Pro+ có công suất sạc nhanh bao nhiêu?",
    options: [
      { id: "A", text: "67W", isCorrect: false, image: '/images/question1.png' },
      { id: "B", text: "120W", isCorrect: true, image: '/images/question1.png' }
    ]
  }
];

interface GameQuestionModalProps {
  show: boolean;
  onHide: () => void;
  onComplete: () => void;
}

export default function GameQuestionModal({ show, onHide, onComplete }: GameQuestionModalProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  // Hàm reset game về trạng thái ban đầu
  const resetGame = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setShowCorrectAnswer(false);
  };

  const handleOptionSelect = (option: Option) => {
    setSelectedOption(option.id);
  };

  const handleContinue = () => {
    if (!selectedOption) return; // Không làm gì nếu chưa chọn đáp án
    
    const selectedOptionData = questions[currentQuestion].options.find(opt => opt.id === selectedOption);
    setShowCorrectAnswer(true);

    if (selectedOptionData?.isCorrect) {
      setTimeout(() => {
        setShowCorrectAnswer(false);
        setSelectedOption(null);
        if (currentQuestion < questions.length - 1) {
          setCurrentQuestion(prev => prev + 1);
        } else {
          // Hoàn thành tất cả câu hỏi
          resetGame();
          onComplete();
        }
      }, 3000);
    } else {
      setTimeout(() => {
        setShowCorrectAnswer(false);
        setSelectedOption(null);
      }, 3000); // Cho phép nhìn thấy đáp án sai trong 3 giây rồi reset để chọn lại
    }
  };

  // Xử lý khi đóng modal
  const handleModalHide = () => {
    resetGame();
    onHide();
  };

  return (
    <Modal show={show} onHide={handleModalHide} centered className="game-modal">
      {/* Result Overlay - covers entire modal */}
      {showCorrectAnswer && (
        <div className="result-overlay position-fixed d-flex flex-column align-items-center justify-content-center" style={{ zIndex: 1 }}>
          <div className="result-content text-center">
            {selectedOption && questions[currentQuestion].options.find(opt => opt.id === selectedOption)?.isCorrect ? (
              <>
                <div className="result-emoji mb-3">
                  <img src="/images/star-struck.png" alt="Happy" width={80} height={80} />
                </div>
                <div className="result-text text-white">
                 <img src="/images/yeah.png" alt="Sad" width={60} height={60} />
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
          {/* Star Progress */}
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
                    {/* Text hiển thị dưới dot hiện tại */}
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

          {/* Question */}
          <div className="question-text text-center mb-4">
            {questions[currentQuestion].text}
          </div>

          {/* Options */}
          <div className="d-flex flex-column gap-3">
            {questions[currentQuestion].options.map((option) => (
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
                {/* Option Image - phần ảnh full height */}
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
                
                {/* Text section - nền trắng ở dưới ảnh, compact */}
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
                
                {/* Check Icon - Dấu tích khi chọn */}
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

                {/* Result Icon - sau khi bấm tiếp tục */}
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
        </div>
      </Modal.Body>
      
      {/* Continue Button - ở dưới cùng modal */}
      <Modal.Footer className="border-0 justify-content-center">
        <button 
          className="btn btn-primary px-4 py-2"
          onClick={handleContinue}
          disabled={!selectedOption || showCorrectAnswer}
          style={{
            backgroundColor: selectedOption && !showCorrectAnswer ? '#ff6900' : '#ccc',
            border: 'none',
            borderRadius: '25px',
            fontWeight: '600',
            cursor: selectedOption && !showCorrectAnswer ? 'pointer' : 'not-allowed',
            width: '200px'
          }}
        >
          Tiếp tục
        </button>
      </Modal.Footer>
    </Modal>
  );
}