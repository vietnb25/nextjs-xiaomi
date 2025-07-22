import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row className="gy-4">
          {/* Column 1 */}
          <Col md={3}>
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

          {/* Column 2 */}
          <Col md={3}>
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

          {/* Column 3 */}
          <Col md={3}>
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

          {/* Column 4 */}
          <Col md={3}>
            <h5 className="text-uppercase mb-4">Liên hệ</h5>
            <div className="mb-4">
              <h3 className="h4 mb-3">1800400168</h3>
              <h4 className="h5 mb-4">THEO DÕI MI</h4>
            </div>
            <div className="d-flex gap-3 mb-4">
              <Link href="#" className="text-light">
                <Image src="/images/facebook-icon.svg" alt="Facebook" width={24} height={24} />
              </Link>
              <Link href="#" className="text-light">
                <Image src="/images/tiktok-icon.svg" alt="TikTok" width={24} height={24} />
              </Link>
              <Link href="#" className="text-light">
                <Image src="/images/instagram-icon.svg" alt="Instagram" width={24} height={24} />
              </Link>
              <Link href="#" className="text-light">
                <Image src="/images/youtube-icon.svg" alt="YouTube" width={24} height={24} />
              </Link>
            </div>
            <Button variant="primary">Email Support</Button>
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
