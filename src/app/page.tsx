import Image from 'next/image';
import { Row, Col } from 'react-bootstrap';
import HeroSection from './component/herosection';
import ProductInfo from './component/ProducInfo';
import Features from './component/features';
import ProductFeatures from './component/ProductFeatures';
export default function Home() {
  return (
    <div>
      <HeroSection />

      <ProductInfo />
      <ProductFeatures />
    </div>

  );
}
