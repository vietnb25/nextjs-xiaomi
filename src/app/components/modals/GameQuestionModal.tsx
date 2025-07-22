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
      { id: "A", text: "60Hz", isCorrect: false, image: '/images/thin-bezel.png' },
      { id: "B", text: "120Hz AMOLED", isCorrect: true, image: '/images/amoled-display.png' }
    ]
  },
  {
    id: 2,
    text: "Redmi Note 13 Pro/Pro+ sở hữu camera chính có độ phân giải bao nhiêu?",
    options: [
      { id: "A", text: "108MP", isCorrect: false, image: '/images/camera-108mp.png' },
      { id: "B", text: "200MP", isCorrect: true, image: '/images/camera-200mp.png' }
    ]
  },
  {
    id: 3, 
    text: "Pin của Redmi Note 13 Pro+ có công suất sạc nhanh bao nhiêu?",
    options: [
      { id: "A", text: "67W", isCorrect: false, image: '/images/phone-charging.png' },
      { id: "B", text: "120W", isCorrect: true, image: '/images/fast-charging.png' }
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
    setShowCorrectAnswer(true);

    if (option.isCorrect) {
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
      }, 3000); // Cho phép nhìn thấy đáp án sai trong 1.5 giây rồi reset để chọn lại
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
        <div className="result-overlay position-fixed d-flex flex-column align-items-center justify-content-center">
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
      
      <Modal.Header closeButton className="border-0">
        <Modal.Title as="h4" className="w-100 text-center"></Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-4">
        <div className="position-relative">
          {/* Star Progress */}
          <div className="challenge-progress text-center mb-4">
            <div className="d-flex justify-content-center">
              <div className="star-badge">
                <img src="/images/star-icon.svg" alt="Star" width={20} height={22} />
                <span className="ms-2 fw-semibold">Thử thách {currentQuestion + 1}</span>
              </div>
            </div>
            <div className="progress-dots mt-2 d-flex justify-content-center gap-4">
              {questions.map((_, index) => (
                <div 
                  key={index} 
                  className={`progress-dot ${index === currentQuestion ? 'active' : ''} ${index <= currentQuestion ? 'completed' : ''}`}
                />
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
                className={`option-button ${selectedOption === option.id ? (option.isCorrect ? 'correct' : 'incorrect') : ''} ${showCorrectAnswer && option.isCorrect ? 'correct' : ''}`}
                onClick={() => handleOptionSelect(option)}
                disabled={showCorrectAnswer}
              >
                {option.text}
                {selectedOption === option.id && (
                  <div className="check-icon">
                    {option.isCorrect ? "✓" : "✕"}
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}