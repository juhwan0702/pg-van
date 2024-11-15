'use client';

import Logo from '../../../public/images/logo.svg';
import Button from '../Button';
import Link from 'next/link';
import { navLinks } from '@/constants/navLinks';
import Sidebar from './Sidebar';
import { AiOutlineMenu } from 'react-icons/ai';
import useSidebar from '@/hooks/useSidebar';
import { IoArrowForward } from 'react-icons/io5';

function Navbar() {
  const { isSidebarOpen, openSidebar, closeSidebar, isActive } = useSidebar();

  return (
    <>
      <header className="w-full p-5 pt-8 border-b border-opacity-10 border-charcoal h-[100px] lg:h-[116px] lg:pt-10 lg:px-28 lg:pb-7">
        <nav className="flex justify-between h-12">
          <Link href="/" className="flex items-center gap-x-[6px]">
            <Logo className="h-7" />
            <span className="font-notoSans text-[16px] leading-relaxed text-charcoal font-medium">
              이지크레더블
            </span>
          </Link>
          <div className="flex items-center md:hidden">
            <Button
              onClick={openSidebar}
              className="btn-sm btn-solid w-[68px]"
              iconSvg={<AiOutlineMenu className="w-5 h-5" />}
            />
          </div>
          <div className="hidden md:flex md:items-center md:gap-x-2.5 lg:gap-x-4 md:h-12">
            <ul className="grid grid-cols-[auto_auto_auto_auto_auto] grid-rows-1 font-notoSans text-[16px] font-medium leading-5">
              {navLinks.map((navLink) => (
                <li key={navLink.href} className="md:px-4 lg:px-6">
                  <Link
                    href={navLink.href}
                    className={
                      isActive(navLink.href) ? 'text-primary' : 'text-charcoal'
                    }
                  >
                    {navLink.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button
              iconSvg={<IoArrowForward />}
              href="/contact-us"
              className="btn-md btn-outlined w-[143px]"
            >
              상담문의
            </Button>
          </div>
        </nav>
      </header>
      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
}

export default Navbar;
