interface BadgeProps {
  label: string;
  textColor?: string;
  borderColor?: string;
}

function Badge({
  label,
  textColor = 'text-charcoal',
  borderColor = 'border-charcoal',
}: Readonly<BadgeProps>) {
  return (
    <div
      className={`flex justify-center items-center px-5 py-2 rounded-[100px] border border-solid ${borderColor}`}
    >
      <span
        className={`font-notoSans text-[16px] font-normal leading-[1.5] tracking-[-0.32px] ${textColor}`}
      >
        {label}
      </span>
    </div>
  );
}

export default Badge;
