import CustomersSection from '@/containers/home-page/customers-section';
import FeaturesSection from '@/containers/home-page/features-section';
import HeroSection from '@/containers/home-page/hero-section';
import ProductSection from '@/containers/home-page/product-section';

export default function Home() {
  return (
    <div className="flex flex-col items-center responsive-container pt-14 md:pt-[76px]">
      <HeroSection />
      <FeaturesSection />
      <CustomersSection />
      <ProductSection />
    </div>
  );
}
