'use client';
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import GameRulesModal from './modals/GameRulesModal';
import DeviceFormModal from './modals/DeviceFormModal';
import UserFormModal from './modals/UserFormModal';
import GameQuestionModal from './modals/GameQuestionModal';

export default function GamingSection() {
  const [showRules, setShowRules] = useState(false);
  const [showDeviceForm, setShowDeviceForm] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);
  const [showGameQuestions, setShowGameQuestions] = useState(false);

  const handleCloseRules = () => setShowRules(false);
  const handleShowRules = () => setShowRules(true);
  const handleCloseDeviceForm = () => setShowDeviceForm(false);
  const handleShowDeviceForm = () => {
    setShowRules(false);
    setShowDeviceForm(true);
  };
  const handleCloseUserForm = () => setShowUserForm(false);
  const handleShowUserForm = () => {
    setShowDeviceForm(false);
    setShowUserForm(true);
  };
  const handleShowGameQuestions = () => {
    setShowUserForm(false);
    setShowGameQuestions(true);
  };
  const handleCloseGameQuestions = () => setShowGameQuestions(false);
  const handleGameComplete = () => {
    handleCloseGameQuestions();
    // Handle game completion (e.g., show rewards)
    console.log('Game completed!');
  };

  return (
    <>
      <section id="gaming" className="py-5 position-relative" 
        style={{ 
          backgroundImage: "url('/images/game-background.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '600px'
        }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="bg-white bg-opacity-40 px-4 py-2 rounded-pill d-inline-block mb-4">
                
                  <Button variant="outline-info"><span className="text-primary fw-semibold gradient-text">Minigame</span></Button>
              </div>

              <h2 className="display-5 fw-bold mb-4">
                Khuấy đảo <span className='gradient-text'>Minigame</span><br />
                Săn ngay quà khủng cùng <span className='gradient-text'>Xiaomi</span>
              </h2>

              <div className="mb-4">
                <p className="fs-5 mb-3">Thời gian còn lại</p>

                <div className="d-flex gap-3">
                  {[
                    { value: '13', label: 'Ngày' },
                    { value: '13', label: 'Giờ' },
                    { value: '13', label: 'Phút' },
                    { value: '13', label: 'Giây' }
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <div className="glassmorphism p-2 mb-2" style={{ width: '48px', height: '48px' }}>
                        <span className="fw-bold text-primary fs-4">{item.value}</span>
                      </div>
                      <span className="gradient-text">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="d-flex gap-3">
                <Button variant="primary" size="lg" onClick={handleShowRules}>
                  Chơi Ngay
                </Button>
                <Button variant="light" size="lg" className="d-flex align-items-center gap-2" onClick={handleShowRules}>
                  <Image
                    src="/images/arrow-right.png"
                    alt="Arrow"
                    width={24}
                    height={24}
                  />
                  Xem hướng dẫn
                </Button>
              </div>
            </Col>

            <Col lg={6}>
              <div className="position-relative mt-5 mt-lg-0">
                <Image
                  src="/images/game-light.png"
                  alt="Game Light Effect"
                  width={803}
                  height={624}
                  className="img-fluid"
                />
                <Image
                  src="/images/gift-image.png"
                  alt="Gift"
                  width={407}
                  height={423}
                  className="position-absolute bottom-0 end-0"
                  style={{ transform: 'translateY(10%)' }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Game Rules Modal */}
      <GameRulesModal 
        show={showRules}
        onHide={handleCloseRules}
        onStart={handleShowDeviceForm}
      />

      {/* Device Form Modal */}
      <DeviceFormModal
        show={showDeviceForm}
        onHide={handleCloseDeviceForm}
        onContinue={handleShowUserForm}
      />

      {/* User Form Modal */}
      <UserFormModal
        show={showUserForm}
        onHide={handleCloseUserForm}
        onStartGame={handleShowGameQuestions}
      />

      <GameQuestionModal 
        show={showGameQuestions}
        onHide={handleCloseGameQuestions}
        onComplete={handleGameComplete}
      />
    </>
  );
}
