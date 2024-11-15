'use client';

import Button from '@/components/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiOutlineClose } from 'react-icons/ai';
import { FaArrowRightToBracket } from 'react-icons/fa6';
import { navLinks } from '@/constants/navLinks';
import { useEffect, useRef } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

function Sidebar({ isOpen, onClose }: Readonly<SidebarProps>) {
  const pathname = usePathname();
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  // 현재 링크가 활성화 상태인지 확인
  const isActive = (href: string) => pathname === href;

  // Sidebar 외부 클릭 시 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Sidebar가 렌더링되어 있고, 클릭한 요소가 Sidebar 외부일 경우에만 onClose 호출
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    // Sidebar가 열렸을 때, 외부 클릭 감지
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // 컴포넌트가 언마운트되거나 Sidebar가 닫힐 때 이벤트 리스너 제거
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <aside
      ref={sidebarRef}
      className={`fixed z-10 top-0 right-0 w-[320px] h-full bg-graphite transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center w-full px-4 pt-8 pb-5">
        <span className="font-notoSans text-[18px] font-medium leading-[1.4] text-white">
          모바일 메뉴
        </span>
        <button onClick={onClose} aria-label="닫기 버튼">
          <AiOutlineClose className="text-white text-[20px]" />
        </button>
      </div>
      <div className="p-5">
        <Button
          href="/contact-us"
          className="btn-lg btn-solid w-full"
          iconSvg={
            <FaArrowRightToBracket className="relative top-[1px] text-[18px]" />
          }
        >
          상담문의
        </Button>
      </div>
      <ul>
        {navLinks.map((navLink) => (
          <li
            key={navLink.href}
            className="border border-white border-opacity-5 border-solid"
          >
            <Link
              href={navLink.href}
              className={`font-notoSans text-[16px] font-medium leading-5 block px-6 py-4 ${
                isActive(navLink.href) ? 'text-primary' : 'text-white'
              }`}
            >
              {navLink.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="fixed bottom-0 w-[320px] p-5">
        <Button
          href="/privacy-policy"
          className="btn-lg btn-solid w-full"
          iconSvg={
            <FaArrowRightToBracket className="relative top-[1px] text-[18px]" />
          }
        >
          개인정보처리방침
        </Button>
      </div>
    </aside>
  );
}

export default Sidebar;
