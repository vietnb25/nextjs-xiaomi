'use client';
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <Navbar bg="white" expand="lg" className="border-bottom py-3 fixed-top">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>
            <Image
              src="/images/store-logo-5.svg"
              alt="Xiaomi Logo"
              width={40}
              height={40}
              priority
            />
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#product-info">Thông tin sản phẩm</Nav.Link>
            <Nav.Link href="#gaming">Chơi game</Nav.Link>
            <Nav.Link href="#program-rules">Thể lệ chương trình</Nav.Link>
            <Nav.Link href="#stores">Hệ thống cửa hàng</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
