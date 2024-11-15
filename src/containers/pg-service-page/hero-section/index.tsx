import Header from '@/components/Header';
import ImageDescriptionPair from '@/components/ImageDescription';

function HeroSection() {
  return (
    <section className="flex flex-col responsive-container">
      <Header heading="PG 서비스" description="온라인 지불결제 서비스" />
      <div className="flex flex-col gap-[46px] md:gap-[96px] mb-[72px]">
        <ImageDescriptionPair
          imageSrc="/images/pg-1.jpg"
          heading="스마트한 온라인 결제 솔루션"
          description="이지크레더블의 PG 솔루션을 통해 고객의 결제 경험을 한층 업그레이드하세요. 신속하고 안전하게 결제를 지원합니다. 최신 보안 기술을 적용하여 고객의 정보를 안전하게 보호합니다. 안심하고 사용할 수 있는 결제 시스템을 구축하세요."
        />
        <ImageDescriptionPair
          imageSrc="/images/pg-2.jpg"
          heading="다양한 결제수단 지원"
          description="신용카드·계좌이체·가상계좌 등 다양한 결제 방식을 한 번에 지원하여 고객의 편의성을 높입니다. 간편한 결제 환경을 제공하세요. 실시간 거래 데이터를 한눈에 확인하고 관리할 수 있는 대시보드를 제공합니다. 간편한 관리로 비즈니스 운영을 효율화하세요."
          reverse
        />
      </div>
    </section>
  );
}

export default HeroSection;
