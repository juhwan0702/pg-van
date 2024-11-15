import { Fragment, ReactNode } from 'react';

interface HorizontalHeaderProps {
  heading: string;
  description: string;
  coloredText?: string;
  coloredClass?: string;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  children?: ReactNode;
}

function HorizontalHeader({
  heading,
  description,
  coloredText,
  coloredClass,
  headingLevel = 1,
  children,
}: Readonly<HorizontalHeaderProps>) {
  const Tag = `h${headingLevel}` as keyof JSX.IntrinsicElements;

  let content;

  if (coloredText) {
    const regex = new RegExp(`(${coloredText})`, 'g');
    const parts = heading.split(regex);

    content = (
      <Tag className="font-notoSans text-[42px] font-medium leading-[106%] tracking-[-1.26px] text-charcoal md:text-[64px] md:leading-[120%] md:tracking-[-1.28px]">
        {parts.map((part, index) =>
          part === coloredText ? (
            <span key={index} className={coloredClass}>
              {part}
            </span>
          ) : (
            <Fragment key={index}>{part}</Fragment>
          )
        )}
      </Tag>
    );
  } else {
    content = (
      <Tag className="font-notoSans text-[42px] font-medium leading-[106%] tracking-[-1.26px] text-charcoal md:text-[64px] md:leading-[120%] md:tracking-[-1.28px]">
        {heading}
      </Tag>
    );
  }

  // Split the description on <br /> tags (case-insensitive)
  const descriptionParts = description.split(/<br\s*\/?>/gi);

  return (
    <div className="flex flex-col w-full items-center gap-5 lg:flex-row lg:gap-[72px] lg:items-start">
      {/* 왼쪽 영역: 헤딩 */}
      <div className="lg:w-[460px] xl:w-[560px]">{content}</div>

      {/* 오른쪽 영역: 설명과 버튼 */}
      <div className="flex flex-col items-center gap-[32px] w-full text-center md:justify-between md:flex-1 lg:text-left lg:items-start">
        <p className="font-notoSans text-[16px] font-normal leading-[160%] tracking-[0.32px] text-[rgba(17,17,17,0.7)] md:text-[20px] md:tracking-[0.4px]">
          {descriptionParts.map((part, index) => (
            <Fragment key={index}>
              {part}
              {index < descriptionParts.length - 1 && <br />}
            </Fragment>
          ))}
        </p>
        {children}
      </div>
    </div>
  );
}

export default HorizontalHeader;
