import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row className="gy-4">
          {/* Left Column on Mobile - Tìm hiểu thêm & Hỗ trợ */}
          <Col md={3} xs={6}>
            <h5 className="text-uppercase mb-4">Tìm hiểu thêm</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="#" className="text-light text-decoration-none">Xiaomi 11T Pro | 5G</Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-light text-decoration-none">Xiaomi 11T | 5G</Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-light text-decoration-none">Xiaomi 11T Lite 5G NE</Link>
              </li>
            </ul>
          </Col>

          {/* Right Column on Mobile - Combined Hỗ trợ */}
          <Col md={3} xs={6}>
            <h5 className="text-uppercase mb-4">Hỗ trợ</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="#" className="text-light text-decoration-none">Bảo hành</Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-light text-decoration-none">Mua hàng</Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-light text-decoration-none">Trung tâm dịch vụ</Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-light text-decoration-none">Xác thực Sản Phẩm</Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-light text-decoration-none">Hướng dẫn sử dụng</Link>
              </li>
            </ul>
          </Col>

          {/* Left Column Second Row on Mobile - Giới thiệu */}
          <Col md={3} xs={6}>
            <h5 className="text-uppercase mb-4">Giới thiệu</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link href="#" className="text-light text-decoration-none">Xiaomi</Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-light text-decoration-none">Chính sách riêng tư</Link>
              </li>
              <li className="mb-2">
                <Link href="#" className="text-light text-decoration-none">Toàn vẹn & Tuân thủ</Link>
              </li>
            </ul>
          </Col>

          {/* Right Column Second Row on Mobile - Liên hệ */}
          <Col md={3} xs={6}>
            <h5 className="text-uppercase mb-4">Liên hệ</h5>
            <div className="mb-3">
              <h3 className="h5 mb-2">1800400168</h3>
              <p className="small mb-3">Thứ 2 đến thứ 6</p>
            </div>
            <div className="mb-3">
              <h4 className="h6 mb-3">THEO DÕI MI</h4>
              <div className="d-flex gap-2 mb-3">
                <Link href="#" className="text-light">
                  <Image src="/images/facebook-icon.svg" alt="Facebook" width={20} height={20} />
                </Link>
                <Link href="#" className="text-light">
                  <Image src="/images/tiktok-icon.svg" alt="TikTok" width={20} height={20} />
                </Link>
                <Link href="#" className="text-light">
                  <Image src="/images/instagram-icon.svg" alt="Instagram" width={20} height={20} />
                </Link>
                <Link href="#" className="text-light">
                  <Image src="/images/youtube-icon.svg" alt="YouTube" width={20} height={20} />
                </Link>
              </div>
            </div>
            <Button variant="primary" size="sm">Email Support</Button>
          </Col>
        </Row>

        <hr className="my-4 opacity-25" />

        <div className="text-center">
          <p className="mb-0">Copyright © 2010 - 2024 Xiaomi. All Rights Reserved</p>
        </div>
      </Container>
    </footer>
  );
}
