import Button from '@/components/Button';
import Header from '@/components/Header';
import Image from 'next/image';
import { IoArrowForward } from 'react-icons/io5';

const HeroSection = () => {
  return (
    <section className="w-full overflow-x-hidden mb-16 md:mb-24">
      <Header
        heading="당신의 결제솔루션"
        description="KSNET & KIS정보통신과 함께하세요!"
        coloredText="결제솔루션"
        coloredClass="text-primary"
      >
        <div className="flex gap-x-4 mt-4 md:mt-7">
          <Button
            iconSvg={<IoArrowForward />}
            href="/contact-us"
            className="btn-md btn-solid w-[140px] md:btn-lg md:w-[163px]"
          >
            상담문의
          </Button>
          <Button
            href="/products"
            className="btn-md btn-outlined w-[140px] md:btn-lg md:w-[163px]"
          >
            제품소개
          </Button>
        </div>
      </Header>
      <div className="relative overflow-x-auto">
        <div
          className="flex gap-[10px] xl:gap-[20px]"
          style={{
            maxWidth: '100%',
            width:
              'clamp(604px, calc((100vw - 375px) * ((1200 - 604) / (1440 - 375)) + 604px), 1200px)',
            height:
              'clamp(266px, calc((100vw - 375px) * ((528 - 266) / (1440 - 375)) + 266px), 528px)'
          }}
        >
          <div
            className="relative h-full flex-shrink-0 rounded-[20px]"
            style={{
              width:
                'clamp(190px, calc((100vw - 375px) * ((378 - 190) / (1440 - 375)) + 190px), 378px)'
            }}
          >
            <Image
              src="/images/left.jpg"
              alt="hero left"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-[20px]"
            />
          </div>
          <div
            className="relative h-full flex-shrink-0 rounded-[20px]"
            style={{
              width:
                'clamp(404px, calc((100vw - 375px) * ((802 - 404) / (1440 - 375)) + 404px), 802px)'
            }}
          >
            <Image
              src="/images/right.jpg"
              alt="hero right"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
