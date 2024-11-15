import Link from 'next/link';
import Logo from '../../../public/images/logo.svg';

function Footer() {
  return (
    <footer className="flex flex-col items-center w-full px-5 pt-9 pb-12 bg-charcoal sm:pt-[72px] sm:px-[120px] sm:pb-12">
      <section className="flex flex-col items-start gap-6 self-stretch">
        <div className="flex flex-col items-start self-stretch">
          <p className="font-notoSans text-[20px] font-semibold leading-[1.3] text-white tracking-wide mb-[18px]">
            당신의 비즈니스 성공을 응원합니다.
          </p>
          <hr className="w-full border-[rgba(255,255,255,0.3)]" />
        </div>
        <address className="flex flex-col self-stretch not-italic">
          <div className="flex items-center gap-x-[6px] mb-5">
            <Logo className="h-8" data-testid="logo" />
            <span className="font-notoSans text-[20px] text-white font-semibold">
              이지크레더블
            </span>
          </div>
          <p className="font-notoSans text-[16px] font-normal leading-[1.6] text-[rgba(255,255,255,0.7)] tracking-[0.32px]">
            상호 : 이지크레더블 <br />
            대표자 : 이승혁 <br /> 사업자등록번호 : 525-23-01832 <br />
            전화번호 : 02-1544-6508 <br />
          </p>
        </address>
        <hr className="w-full border-[rgba(255,255,255,0.3)]" />
        <nav className="flex justify-center items-center self-stretch font-notoSans text-[14px] leading-normal tracking-[0.28px] text-white md:justify-between">
          <p>
            &copy;{new Date().getFullYear()} All Rights Reserved by EZCREDIBLE
          </p>
          <ul className="hidden md:flex md:gap-x-6">
            <li className="hover:text-primary">
              <Link href="/contact-us">상담신청</Link>
            </li>
            <li className="hover:text-primary">
              <Link href="/privacy-policy">개인정보처리방침</Link>
            </li>
          </ul>
        </nav>
      </section>
    </footer>
  );
}

export default Footer;
