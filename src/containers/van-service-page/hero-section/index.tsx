import Header from '@/components/Header';
import ImageDescriptionPair from '@/components/ImageDescription';

function HeroSection() {
  return (
    <section className="flex flex-col responsive-container">
      <Header heading="VAN 서비스" description="신용카드 결제대행 서비스" />
      <div className="flex flex-col gap-[46px] md:gap-[96px] mb-[72px]">
        <ImageDescriptionPair
          imageSrc="/images/van-1.jpg"
          heading="종합결제 서비스"
          description="신용카드, 직불카드, 체크카드 등 종류에 관계없이 모든 카드 결제 및 승인이 가능합니다. 365일 연중무휴 24시간 서비스가 제공되기 때문에, 신속하고 안전하게 거래를 처리합니다."
        />
        <ImageDescriptionPair
          imageSrc="/images/van-2.jpg"
          heading="맞춤형 서비스 제공"
          description="현금영수증 발급 및 다양한 멤버십 결제 및 적립 기능을 제공합니다. 매출·입금 등 정산관리에 필요한 인터넷 서비스도 지원하고 있어, 매출 현황, 카드사별 현황, 입금액 확인, 부가세 신고 등을 손쉽게 처리할 수 있습니다."
          reverse
        />
      </div>
    </section>
  );
}

export default HeroSection;
