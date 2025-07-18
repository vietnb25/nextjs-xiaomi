import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

export default function ProductInfo() {
    return (
        <div
            id='product-info'
            style={{
                backgroundImage: "url('/Background2.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '40px 0',
                height: 'auto'
            }}
        >
            <Container>
                <Row className="text-center mb-4">
                    <h2 className="text-white">Redmi Note 13 Pro+ 5G</h2>
                </Row>
                <Row className="text-center g-4">
                    {/* 2 images on top, each taking half width */}
                    <Col xs={12} md={6} className="mb-4">
                        <div className="product-card" style={{ padding: '10px' }}>
                            <Image
                                src="/1.png" // ảnh 1
                                alt="Màn hình AMOLED"
                                width={600} // original width
                                height={400} // original height
                                style={{ width: '100%' }} // Make image responsive
                                className="img-fluid"
                            />
                        </div>
                    </Col>

                    <Col xs={12} md={6} className="mb-4">
                        <div className="product-card" style={{ padding: '10px' }}>
                            <Image
                                src="/2.png" // ảnh 2
                                alt="Camera 200MP"
                                width={600} // original width
                                height={400} // original height
                                style={{ width: '100%' }} // Make image responsive
                                className="img-fluid"
                            />
                        </div>
                    </Col>
                </Row>

                <Row className="text-center g-4">
                    {/* 3 images on bottom, each taking one-third width */}
                    <Col xs={12} md={4} className="mb-4">
                        <div className="product-card" style={{ padding: '10px' }}>
                            <Image
                                src="/3.png" // ảnh 3
                                alt="Kiểu dáng hiện đại"
                                width={400} // original width
                                height={300} // original height
                                style={{ width: '100%' }} // Make image responsive
                                className="img-fluid"
                            />
                        </div>
                    </Col>

                    <Col xs={12} md={4} className="mb-4">
                        <div className="product-card" style={{ padding: '10px' }}>
                            <Image
                                src="/4.png" // ảnh 4
                                alt="IP68"
                                width={400} // original width
                                height={300} // original height
                                style={{ width: '100%' }} // Make image responsive
                                className="img-fluid"
                            />
                        </div>
                    </Col>

                    <Col xs={12} md={4} className="mb-4">
                        <div className="product-card" style={{ padding: '10px' }}>
                            <Image
                                src="/5.png" // ảnh 5
                                alt="120W HyperCharge"
                                width={400} // original width
                                height={300} // original height
                                style={{ width: '100%' }} // Make image responsive
                                className="img-fluid"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
