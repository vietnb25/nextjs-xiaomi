import Header from './components/Header'
import HeroSection from './components/HeroSection'
import ProductFeatures from './components/ProductFeatures'
import GamingSection from './components/GamingSection'
import PromotionSection from './components/PromotionSection'
import Footer from './components/Footer'
import ProductFeatures2 from './components/ProductFeatures2'
import StoresSection from './components/StoresSection'
import ScrollToTop from './components/ScrollToTop'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProductFeatures />
        <ProductFeatures2 />
        <GamingSection />
        <PromotionSection />
        <StoresSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}

