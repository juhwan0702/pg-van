import { ReactNode } from 'react';

interface CardProps {
  icon: () => ReactNode;
  heading: string;
  description: string;
}

function Card({
  icon: IconComponent,
  heading,
  description,
}: Readonly<CardProps>) {
  return (
    <div className="flex flex-col items-start w-full p-6 gap-6 rounded-xl border border-[rgba(17,17,17,0.06)] md:p-7 md:gap-7">
      <div className="flex justify-center items-center w-[70px] h-[70px] bg-[rgba(19,100,254,0.05)] rounded-full md:w-20 md:h-20">
        <IconComponent />
      </div>
      <div className="flex flex-col items-start gap-3 font-notoSans md:gap-[14px]">
        <h3 className="text-[18px] font-medium leading-[1.2] text-[rgba(17,17,17,0.8)] md:text-[20px]">
          {heading}
        </h3>
        <p className="text-[14px] font-normal leading-[1.4] tracking-[-0.282px] text-[rgba(17,17,17,0.6)] md:text-[16px] md:tracking-[-0.32px]">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Card;
