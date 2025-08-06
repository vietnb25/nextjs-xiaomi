// HeroSection.tsx
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

export default function HeroSection() {
    return (
        <div style={{ backgroundImage: "url('/Background.png')", backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: 'auto', overflow: 'hidden' }}>
            <Container fluid className="pt-5 px-2 px-md-4 mt-5">
                <Row className="align-items-center justify-content-center flex-column-reverse flex-md-row">
                    <Col
                        md={6}
                        className="d-flex justify-content-center align-items-center position-relative mt-4 mt-md-0"
                        style={{ zIndex: 2, marginTop: '-40px' }}
                    >
                        <div
                            style={{
                                transform: 'translateX(-20px)',
                                width: '100%',
                                maxWidth: '713px'
                            }}
                        >
                            <Image
                                src="/images/tap1left.png"
                                alt="Redmi Note 13"
                                width={713}
                                height={641}
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>

                    </Col>

                    <Col md={6} className="d-flex flex-column justify-content-center align-items-center" style={{ paddingTop: '20px' }}>
                        <div style={{ maxWidth: 456, width: '100%' }}>
                            <Image
                                src="/images/tap1right.png"
                                alt="Redmi Note 13 Info"
                                width={456}
                                height={322}
                                style={{ width: '100%', height: 'auto' }}
                            />
                            <p className="text-muted text-end mt-2" style={{ fontSize: '12px', lineHeight: '1.6' }}>
                                Hình ảnh chỉ mang tính chất minh họa.<br />
                                Vui lòng liên hệ nhân viên tư vấn khi mua hàng.<br />
                                Tính năng có thể khác nhau tùy theo mỗi dòng máy.
                            </p>
                        </div>
                    </Col>
                    {/* <div className="d-flex justify-content-center">
                        <span
                            style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                backgroundColor: '#4B3FA7',
                                margin: '0 6px'
                            }}
                        ></span>
                        <span
                            style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                backgroundColor: '#dcddea',
                                margin: '0 6px'
                            }}
                        ></span>
                        <span
                            style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                backgroundColor: '#dcddea',
                                margin: '0 6px'
                            }}
                        ></span>
                    </div> */}


                </Row>


            </Container>
        </div>
    );
}
