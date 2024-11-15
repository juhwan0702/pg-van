import { FaCalculator } from 'react-icons/fa';
import {
  MdCardMembership,
  MdCode,
  MdCreditCard,
  MdLock,
  MdPayment,
} from 'react-icons/md';

export const heroFeatures = [
  {
    id: 'features-1',
    icon: () => <MdLock className="text-[32px] md:text-[40px] text-primary" />,
    heading: '안전 결제 보장',
    description: '최고의 보안시스템',
  },
  {
    id: 'features-2',
    icon: () => (
      <MdCreditCard className="text-[32px] md:text-[40px] text-primary" />
    ),
    heading: '다양한 결제수단',
    description: '여러 결제방식을 한번에 해결',
  },
  {
    id: 'features-3',
    icon: () => <MdCode className="text-[32px] md:text-[40px] text-primary" />,
    heading: '쉽고 빠른 연동',
    description: '기존 시스템에 쉽게 통합',
  },
  {
    id: 'features-4',
    icon: () => (
      <MdPayment className="text-[32px] md:text-[40px] text-primary" />
    ),
    heading: '모든 카드 결제 승인',
    description: '365일 24시간 카드 결제 승인',
  },
  {
    id: 'features-5',
    icon: () => (
      <MdCardMembership className="text-[32px] md:text-[40px] text-primary" />
    ),
    heading: '멤버십 결제 및 적립',
    description: '다양한 멤버십 결제 및 적립',
  },
  {
    id: 'features-6',
    icon: () => (
      <FaCalculator className="text-[32px] md:text-[40px] text-primary" />
    ),
    heading: '정산관리 서비스',
    description: '가맹점 지원 서비스 제공',
  },
];
