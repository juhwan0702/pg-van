import ProductSection from '@/containers/home-page/product-section';
import FeaturesSection from '@/containers/van-service-page/features-section';
import HeroSection from '@/containers/van-service-page/hero-section';

function VanService() {
  return (
    <div className="flex flex-col items-center responsive-container pt-14 md:pt-[76px]">
      <HeroSection />
      <FeaturesSection />
      <ProductSection />
    </div>
  );
}

export default VanService;
