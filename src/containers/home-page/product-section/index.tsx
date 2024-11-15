import Button from '@/components/Button';
import HorizontalHeader from '@/components/HorizontalHeader';
import ResponsiveImageGallery from '@/components/ResponsiveImageGallery';
import { IoArrowForward } from 'react-icons/io5';

const ProductSection = () => {
  return (
    <section className="flex flex-col gap-14 w-full overflow-x-hidden mb-16 md:mb-20">
      <HorizontalHeader
        heading="제품 소개"
        description="매장에 필요한 제품들을 직접 확인해보세요."
      >
        <Button
          iconSvg={<IoArrowForward />}
          className="btn-md btn-solid w-[140px] md:btn-lg md:w-[163px]"
          href="/products"
        >
          제품소개
        </Button>
      </HorizontalHeader>
      <ResponsiveImageGallery />
    </section>
  );
};

export default ProductSection;
