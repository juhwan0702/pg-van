import Image from 'next/image';
import Badge from '../Badge';

interface Business {
  companyName: string;
  introLines: string[];
  description: string;
  badges: string[];
  imageSrc: string;
}

interface BusinessPanelProps {
  business: Business;
}

function BusinessPanel({ business }: Readonly<BusinessPanelProps>) {
  const { companyName, introLines, description, badges, imageSrc } = business;

  return (
    <div className="flex flex-col items-start pb-8 border-b border-solid border-[rgba(17,17,17,0.1)] font-notoSans">
      <div className="grid grid-cols-1 items-start w-full mb-8 gap-8 lg:grid-cols-[minmax(auto,300px)_auto_180px] lg:gap-10 xl:gap-[72px]">
        <div className="flex flex-col items-start gap-5">
          <p className="text-[22px] font-medium leading-[1.3] tracking-[0.44px] text-primary">
            {companyName}
          </p>
          <ul className="text-[18px] font-normal leading-[1.5] tracking-[0.36px] text-[rgba(3,7,18,0.5)] list-inside list-disc">
            {introLines.map((line, index) => (
              <li key={index}>{line}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[18px] font-normal leading-[1.5] tracking-[0.36px] text-[rgba(17,17,17,0.6)]">
            {description}
          </p>
        </div>
        <div className="flex items-start justify-end gap-2">
          {badges.map((label, index) => (
            <Badge key={index} label={label} />
          ))}
        </div>
      </div>
      <div className="relative w-full h-[512px]">
        <Image
          src={imageSrc}
          alt={companyName}
          fill
          priority
          className="object-cover rounded-[20px]"
        />
      </div>
    </div>
  );
}

export default BusinessPanel;
