import { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';

interface BaseButtonProps {
  iconSvg?: ReactNode;
}

type ButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>; // Button용 타입
type AnchorProps = BaseButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>; // Link용 타입

type Props = ButtonProps | AnchorProps;

function Button({
  iconSvg,
  children,
  className = '',
  href,
  ...props
}: Readonly<Props & { href?: string }>) {
  if (href) {
    return (
      <Link
        href={href}
        className={`btn ${className}`}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        <span>{children}</span>
        {iconSvg && <span>{iconSvg}</span>}
      </Link>
    );
  }

  return (
    <button
      className={`btn ${className}`}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      <span>{children}</span>
      {iconSvg && <span>{iconSvg}</span>}
    </button>
  );
}

export default Button;
