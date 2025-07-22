'use client';
import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Image from 'next/image';

export default function PromotionSection() {
  return (
    <section id="program-rules" className="py-5 bg-light position-relative">
      <Container>
        {/* Background Images */}
        <div className="position-absolute start-0 bottom-0">
          <Image
            src="/images/promo-background.png"
            alt="Promotion Background"
            width={671}
            height={671}
            className="img-fluid"
          />
        </div>

        <div className="position-absolute end-0 top-0 opacity-60">
          <Image
            src="/images/gift-box.png"
            alt="Gift Box"
            width={344}
            height={503}
            className="img-fluid"
          />
        </div>

        {/* Content Card */}
        <Card className="glassmorphism border-0 mx-auto position-relative" style={{ maxWidth: '1000px', zIndex: 1 }}>
          <Card.Body className="p-5">
            <h2 className="text-center mb-4 fs-1 fw-bold text-primary gradient-text">
              Chi tiết chương trình
            </h2>

            <h3 className="text-center display-5 fw-bold mb-5">
              Trải Nghiệm Redmi Note 13 Series
            </h3>

            <div className="mx-auto" style={{ maxWidth: '800px' }}>
              <div className="mb-4">
                <p className="fs-4 fw-bold mb-2">
                  Chào đón siêu phẩm Redmi Note 13 Series, Xiaomi mang đến cho Quý khách chương trình
                </p>
                <p className="fs-4 fw-bold text-primary mb-2 gradient-text">
                  TRẢI NGHIỆM REDMI NOTE 13 SERIES - SĂN NGAY QUÀ KHỦNG.
                </p>
                <p className="text-muted">
                  Xem ngay chi tiết thể lệ chương trình cùng tham gia ngay thôi nào!!
                </p>
              </div>

              <div className="mb-4">
                <p className="fs-4 fw-bold mb-2">
                  Thời gian diễn ra chương trình
                </p>
                <p className="ms-4">
                  Từ ngày 3/1/2024 đến hết ngày 29/2/2024
                </p>
              </div>

              <div>
                <p className="fs-4 fw-bold mb-2">
                  Cách thức tham gia
                </p>
                <p className="ms-4 text-muted">
                  Trong thời gian diễn ra chương trình, khi khách hàng đến trải nghiệm sản phẩm Redmi Note 13 Series 
                  tại hệ thống cửa hàng, khách hàng sẽ có cơ hội nhận được ngay thẻ cào điện thoại 20k, 50k, 100k
                  (gửi ngay vào tài khoản).
                  <br /><br />
                  Mọi thắc mắc vui lòng liên hệ https://www.facebook.com/XiaomiVietnam hoặc 1800400410
                </p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
}
