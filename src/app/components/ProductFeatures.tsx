'use client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

export default function ProductFeatures() {
  return (
    <section className="py-5 bg-light" id="product-info" style={{backgroundImage: "url('/images/Background1.png')", backgroundSize: 'cover'}}>
      <Container>
        <h2 className="text-center display-4 fw-bold mb-5" style={{ color: '#fff' }}>
          Redmi Note <span style={{color:"red"}}>13</span> Pro+ 5G
        </h2>

        <Row className="g-4">
          {/* Top Row - 2 Features */}
          <Col md={6}>
            <div 
              className="feature-card h-100"
              style={{
                background: 'transparent',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                overflow: 'hidden'
              }}
            >
              <Image
                src="/images/1.png"
                alt="AMOLED Display"
                width={460}
                height={460}
                className="img-fluid"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '20px'
                }}
              />
            </div>
          </Col>

          <Col md={6}>
            <div 
              className="feature-card h-100"
              style={{
                background: 'transparent',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                overflow: 'hidden'
              }}
            >
              <Image
                src="/images/2.png"
                alt="200MP Camera"
                width={460}
                height={460}
                className="img-fluid"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '20px'
                }}
              />
            </div>
          </Col>

          {/* Bottom Row - 3 Features */}
          <Col md={4}>
            <div 
              className="feature-card h-100"
              style={{
                background: 'transparent',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                overflow: 'hidden'
              }}
            >
              <Image
                src="/images/3.png"
                alt="Design Feature"
                width={360}
                height={360}
                className="img-fluid"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '20px'
                }}
              />
            </div>
          </Col>

          <Col md={4}>
            <div 
              className="feature-card h-100"
              style={{
                background: 'transparent',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                overflow: 'hidden'
              }}
            >
              <Image
                src="/images/4.png"
                alt="Waterproof Feature"
                width={360}
                height={360}
                className="img-fluid"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '20px'
                }}
              />
            </div>
          </Col>

          <Col md={4}>
            <div 
              className="feature-card h-100"
              style={{
                background: 'transparent',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(10px)',
                overflow: 'hidden'
              }}
            >
              <Image
                src="/images/5.png"
                alt="Fast Charging"
                width={360}
                height={360}
                className="img-fluid"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '20px'
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}