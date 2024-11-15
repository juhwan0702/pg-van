import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

function useSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const isTabletOrBigger = useMediaQuery({
    query: '(min-width: 768px)',
  });

  // 뷰포트 크기가 768px 이상이면 Sidebar 닫음
  useEffect(() => {
    if (isTabletOrBigger) {
      setIsSidebarOpen(false);
    }
  }, [isTabletOrBigger]);

  // 페이지 이동 시 Sidebar를 자동으로 닫기
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [pathname]);

  // Sidebar 열기/닫기 함수
  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  // 현재 링크가 활성화 상태인지 확인
  const isActive = (href: string) => pathname === href;

  return {
    isSidebarOpen,
    openSidebar,
    closeSidebar,
    isActive,
  };
}

export default useSidebar;
