import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';

export default function StoresSection() {
  const retailStores = [
    { id: 1, src: '/images/thegioididonglogo.png', alt: 'FPT Shop', width: 156, height: 26 },
    { id: 2, src: '/images/store-logo-2.png', alt: 'Thế Giới Di Động', width: 106, height: 79 },
    { id: 3, src: '/images/viettellogo.png', alt: 'Viettel', width: 106, height: 79 },
    { id: 4, src: '/images/store-logo-3.png', alt: 'CellphoneS', width: 149, height: 44 },
    { id: 5, src: '/images/store-logo-4.svg', alt: 'Hoàng Hà Mobile', width: 144, height: 67 },
    { id: 6, src: '/images/store-logo-5.svg', alt: 'Mi Store', width: 48, height: 48 },
  ];

  const ecommerceStores = [
    { id: 1, src: '/images/ecommerce-logo-1.png', alt: 'Shopee', width: 176, height: 86 },
    { id: 2, src: '/images/ecommerce-logo-2.png', alt: 'Lazada', width: 178, height: 86 },
  ];

  return (
    <section id="stores" className="py-5">
      <Container>
        {/* Retail Stores */}
        <div className="mb-5">
          <h2 className="display-5 text-center fw-bold mb-4">
            Hệ thống <span className='gradient-text'>cửa hàng bán lẻ</span>
          </h2>

          <div className="d-flex flex-wrap justify-content-center gap-4">
            {retailStores.map((store) => (
              <div
                key={store.id}
                className="glassmorphism d-flex align-items-center justify-content-center p-4"
                style={{ width: '175px', height: '91px' }}
              >
                <Image
                  src={store.src}
                  alt={store.alt}
                  width={store.width}
                  height={store.height}
                  className="img-fluid"
                />
              </div>
            ))}
          </div>
        </div>

        {/* E-commerce Stores */}
        <div>
          <h2 className="display-5 text-center fw-bold mb-4">
            <span className='gradient-text'>Thương mại</span> điện tử
          </h2>

          <div className="d-flex flex-wrap justify-content-center gap-5">
            {ecommerceStores.map((store) => (
              <div key={store.id}>
                <Image
                  src={store.src}
                  alt={store.alt}
                  width={store.width}
                  height={store.height}
                  className="img-fluid"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
