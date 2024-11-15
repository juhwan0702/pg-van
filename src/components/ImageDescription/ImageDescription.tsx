import Image from 'next/image';
import Button from '@/components/Button';
import { IoArrowForward } from 'react-icons/io5';

interface ImageDescriptionPairProps {
  imageSrc: string;
  heading: string;
  description: string;
  reverse?: boolean;
}

const ImageDescriptionPair = ({
  imageSrc,
  heading,
  description,
  reverse,
}: ImageDescriptionPairProps) => {
  return (
    <div
      className={`flex flex-col md:flex-row gap-[36px] md:gap-[45px] ${
        reverse ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* 이미지 */}
      <div className="relative w-full h-[367px] md:h-auto md:w-[583px]">
        <Image
          src={imageSrc}
          alt="서비스 설명 관련 이미지"
          fill
          priority
          className="object-cover rounded-[13px]"
        />
      </div>
      {/* 설명과 버튼 */}
      <div className="w-full md:w-[572px] h-auto">
        <h2 className="font-notoSans font-medium text-[34px] leading-[1.26] tracking-[-1.02px] text-charcoal mb-5 md:mb-9 md:text-[40px] md:leading-[1.3]">
          {heading}
        </h2>
        <p className="font-notoSans font-normal text-[16px] leading-[1.6] tracking-[-0.32px] text-[rgba(17,17,17,0.7)] mb-6 md:mb-16 md:text-[20px] md:tracking-[0.4px]">
          {description}
        </p>
        <Button
          iconSvg={<IoArrowForward />}
          className="btn-md btn-solid w-[140px] md:btn-lg md:w-[163px]"
          href="/contact-us"
        >
          상담문의
        </Button>
      </div>
    </div>
  );
};

export default ImageDescriptionPair;
