// components/Features.tsx
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import styles from "./Features.module.css";

const featuresTop = ["/1.png", "/2.png"];
const featuresBottom = ["/3.png", "/4.png", "/5.png"];

export default function Features() {
    return (
        <section className={`${styles.featureSection} py-5`}>
            <div className="text-center text-white mb-5">
                <h2 className="fw-bold fs-2">Tính năng nổi bật</h2>
            </div>

            <div className={`${styles.containerCustom} container-fluid px-4 px-md-5`}>
                {/* 2 ảnh trên */}
                <Row className="mb-5 gx-4">
                    {featuresTop.map((src, index) => (
                        <Col md={6} xs={12} key={index} className="mb-4 px-2">
                            <div className={styles.featureBox}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={src}
                                        alt={`Feature ${index + 1}`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover rounded"
                                    />
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

                {/* 3 ảnh dưới */}
                <Row className="gx-4">
                    {featuresBottom.map((src, index) => (
                        <Col md={4} xs={12} key={index} className="mb-4 px-2">
                            <div className={styles.featureBox}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={src}
                                        alt={`Feature ${index + 3}`}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover rounded"
                                    />
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
}