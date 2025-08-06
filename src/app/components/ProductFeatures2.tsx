import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';

export default function ProductFeatures2() {
    return (
        <>
            
            <div id='product-features'
                style={{
                    backgroundImage: "url('/images/Background3.png')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '40px 0',
                    height: 'auto',
                
                }}>
            <Container className="my-3">
              <Row className="text-center mb-4">
                     <h1>Redmi Note  <span style={{ color: 'red', fontWeight: 'bold' }}> 13 </span> Pro+ 5G</h1>
                </Row>
                {/* Hàng 1 - Responsive wrapper */}
                <div className="feature-wrapper" style={{ 
                    width: '100%',
                    maxWidth: '80%',
                    margin: '0 auto 10px auto'
                }}>
                    <Row className="g-3" style={{ marginBottom: '20px' }}>
                    {/* Triple Camera 108MP */}
                    <Col lg={4} md={6}>
                        <div className="image-card h-100" style={{
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }}>
                            <img
                                src="/images/feature1.png"
                                alt="Màn hình AMOLED"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                    </Col>

                    {/* Curved Display */}
                    <Col lg={4} md={6}>
                        <div className="image-card h-100" style={{
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }}>
                            <img
                                src="/images/feature2.png"
                                alt="Góc nhìn ấn tượng viền siêu mỏng"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                    </Col>

                    {/* Performance Section */}
                    <Col lg={4} md={12}>
                        <Row className="g-4 h-100">
                            {/* AMOLED 120Hz */}
                            <Col md={12}>
                                <div className="image-card" style={{
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                }}>
                                    <img
                                        src="/images/feature3.png"
                                        alt="Màn hình AMOLED 120Hz"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                            </Col>

                            {/* Snapdragon Performance */}
                            <Col md={12}>
                                <div className="image-card" style={{
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                }}>
                                    <img
                                        src="/images/feature4.png"
                                        alt="Hiệu suất Snapdragon mạnh mẽ"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                </div>

                <Row className="text-center mb-4">
                    <h1>
                        Redmi Note
                        <span style={{ color: 'red', fontWeight: 'bold' }}> 13 </span>

                    </h1>
                </Row>
                {/* Hàng thứ hai - Responsive wrapper */}
                <div className="feature-wrapper" style={{ 
                    width: '85%',
                    maxWidth: '80%',
                    margin: '0 auto 10px auto'
                }}>
                    <Row className="g-3" style={{ marginBottom: '20px' }}>
                    {/* Pin 5100mAh */}
                    <Col lg={4} md={6}>
                        <div className="image-card h-100" style={{
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }}>
                            <img
                                src="/images/feature5.png"
                                alt="Pin 5100mAh"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                    </Col>

                    {/* Màn hình 120Hz */}
                    <Col lg={4} md={6}>
                        <div className="image-card h-100" style={{
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                        }}>
                            <img
                                src="/images/feature6.png"
                                alt="Màn hình 120Hz"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                    </Col>

                    {/* Performance Section */}
                    <Col lg={4} md={12}>
                        <Row className="g-4 h-100">
                            {/* AMOLED 120Hz */}
                            <Col md={12}>
                                <div className="image-card" style={{
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                }}>
                                    <img
                                        src="/images/feature7.png"
                                        alt="Hiệu suất Snapdragon mạnh mẽ"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                            </Col>

                            {/* Snapdragon Performance */}
                            <Col md={12}>
                                <div className="image-card" style={{
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                                }}>
                                    <img
                                        src="/images/feature8.png"
                                        alt="Hiệu suất Snapdragon mạnh mẽ"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                </div>
            </Container>
        </div>
        </>

    );
}
