import Image from 'next/image';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function Header() {
    return (
        <Navbar
            expand="lg"
            className="bg-body-tertiary fixed-top" // Sử dụng fixed-top để cố định
            style={{ zIndex: 1000 }} // Đảm bảo header nằm trên các phần khác
        >
            <Container>
                {/* Logo bên trái */}
                <Navbar.Brand href="/">
                    <Image src="/logo.png" alt="Logo" width={50} height={50} />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Nav bên phải */}
                    <Nav className="ms-auto">
                        <Nav.Link href="#product-info">Thông tin sản phẩm</Nav.Link>
                        <Nav.Link href="#product-features">Chơi game</Nav.Link> {/* Sửa lỗi đánh máy "gamne" thành "game" */}
                        <Nav.Link href="#thele">Thể lệ chương trình</Nav.Link>
                        <Nav.Link href="#hethong">Hệ thống cửa hàng</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}