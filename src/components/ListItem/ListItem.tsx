// components/ListItem.tsx

import { FaArrowRight } from 'react-icons/fa';

interface ListItemProps {
  number: string;
  feature: string;
  description: string;
}

const ListItem = ({ number, feature, description }: ListItemProps) => {
  return (
    <li className="group hover:bg-primary hover:rounded-md border-b border-[rgba(17,17,17,0.1)] grid items-start grid-cols-[60px_auto_50px] gap-x-3 px-4 py-5 md:px-5 md:py-9 md:gap-x-[var(--dynamic-gap)]">
      {/* Number */}
      <div className="font-notoSans text-[24px] font-semibold leading-[1.3] tracking-[0.48px] text-[rgba(17,17,17,0.7)] w-[60px] self-center md:text-[40px] md:tracking-[0.8px] group-hover:text-white">
        {number}
      </div>

      {/* Text */}
      <div className="flex flex-col items-start gap-2 self-center md:gap-3">
        <h3 className="font-notoSans text-[20px] font-semibold leading-[1.2] tracking-[-0.4px] text-[rgba(17,17,17,0.7)] md:text-[32px] md:tracking-[-0.64px] group-hover:text-white">
          {feature}
        </h3>
        <p className="font-notoSans text-[16px] font-normal leading-[1.5] tracking-[0.32px] text-[rgba(17,17,17,0.6)] md:text-[20px] md:tracking-[0.4px] group-hover:text-white">
          {description}
        </p>
      </div>

      {/* Icon */}
      <div className="hidden md:flex md:items-center md:justify-end md:w-[50px] md:self-center">
        <FaArrowRight className="text-[50px] text-[rgba(17,17,17,0.7)] group-hover:text-white" />
      </div>
    </li>
  );
};

export default ListItem;
