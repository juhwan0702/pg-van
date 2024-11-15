import BusinessPanel from '@/components/BusinessPanel';
import Button from '@/components/Button';
import HorizontalHeader from '@/components/HorizontalHeader';
import { IoArrowForward } from 'react-icons/io5';
import { businessPanels } from '@/constants/businessPanels';

function CustomersSection() {
  return (
    <section className="flex flex-col gap-16 w-full mb-16 md:mb-20">
      <HorizontalHeader
        heading="함께하는 분들"
        description="다양한 기업들이 PG&VAN 솔루션을 통해, 스마트하고 편리한 결제 환경을 구축하고 있습니다. 기업이 경험하는 성장과 혁신을 확인해 보세요."
      >
        <Button
          iconSvg={<IoArrowForward />}
          className="btn-md btn-solid w-[140px] md:btn-lg md:w-[163px]"
          href="/contact-us"
        >
          상담문의
        </Button>
      </HorizontalHeader>
      {businessPanels.map((businessPanel, index) => (
        <BusinessPanel key={index} business={businessPanel} />
      ))}
    </section>
  );
}

export default CustomersSection;
