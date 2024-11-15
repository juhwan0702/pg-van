export const productTabs = [
  '유선 결제단말기',
  '무선 결제단말기',
  'POS',
  '간편 결제기',
  '서명패드',
] as const;

export type ProductTab = (typeof productTabs)[number];

export const productsData = {
  '유선 결제단말기': [
    {
      id: 'product-ks9000',
      name: 'KS9000',
      imageSrc: '/images/ksnet/KS9000.png',
      badges: ['터치스크린', '올인원 제품'],
    },
    {
      id: 'product-ks1060',
      name: 'KS1060',
      imageSrc: '/images/ksnet/KS1060.jpg',
      badges: ['빠른승인', 'USB&무선랜 지원'],
    },
    {
      id: 'product-ks1050',
      name: 'KS1050',
      imageSrc: '/images/ksnet/KS1050.jpg',
      badges: ['무선LTE', '일체형'],
    },
    {
      id: 'product-kis2200',
      name: 'KIS-2200',
      imageSrc: '/images/kis/KIS2200.jpg',
      badges: ['소규모 매장', '다양한 결제방식'],
    },
    {
      id: 'product-kis1421',
      name: 'KIS-1421',
      imageSrc: '/images/kis/KIS1421.jpg',
      badges: ['대화면 컬러 LCD', 'IC카드 최적화'],
    },
    {
      id: 'product-ms1000c',
      name: 'KIS-1421',
      imageSrc: '/images/kis/MS1000C.jpg',
      badges: ['SK주유소 전용', 'POS 전표사용'],
    },
  ],
  '무선 결제단말기': [
    {
      id: 'product-kis8310',
      name: 'KIS8310',
      imageSrc: '/images/kis/KIS8310.jpg',
      badges: ['전자서명 기능', 'IC카드 결제'],
    },
    {
      id: 'product-kis8615S',
      name: 'KIS8615S',
      imageSrc: '/images/kis/KIS8615S.jpg',
      badges: ['전자서명 기능', 'QR옵션'],
    },
    {
      id: 'product-kis8611',
      name: 'KIS8611',
      imageSrc: '/images/kis/KIS8611.jpg',
      badges: ['전자서명 기능', '터치스크린'],
    },
    {
      id: 'product-kis8700',
      name: 'KIS8700',
      imageSrc: '/images/kis/KIS8611.jpg',
      badges: ['대화면 컬러LCD', '터치스크린'],
    },
    {
      id: 'product-ct1000q',
      name: 'CT1000Q',
      imageSrc: '/images/ksnet/CT1000Q.jpg',
      badges: ['제로페이·간편결제'],
    },
    {
      id: 'product-KS1200',
      name: 'KS1200',
      imageSrc: '/images/ksnet/KS1200.jpg',
      badges: ['빠른 결제 속도', '대용량 배터리'],
    },
  ],
  POS: [
    {
      id: 'product-zed-2',
      name: 'ZED-2',
      imageSrc: '/images/ksnet/ZED-2.png',
      badges: ['주문형 POS', '멀티 터치'],
    },
    {
      id: 'product-cb-ts201',
      name: 'CB-TS201',
      imageSrc: '/images/ksnet/CB-TS201.jpg',
      badges: ['New', 'Hot'],
    },
    {
      id: 'product-hitplus-17',
      name: 'HITPLUS-17',
      imageSrc: '/images/ksnet/HITPLUS-17.jpg',
      badges: ['듀얼 모니터', '컴팩트 사이즈'],
    },
    {
      id: 'product-optimus',
      name: 'OPTIMUS',
      imageSrc: '/images/kis/OPTIMUS.jpg',
      badges: ['IC카드 양면인식', '터치스크린'],
    },
    {
      id: 'product-apexa-gl',
      name: 'APEXA-GL',
      imageSrc: '/images/kis/APEXA-GL.jpg',
      badges: ['외식업 최적화', '선명한 화면'],
    },
    {
      id: 'product-zedpos',
      name: 'ZEDPOS',
      imageSrc: '/images/kis/ZEDPOS.jpg',
      badges: ['속도 최적화', '무소음·저발열'],
    },
  ],
  '간편 결제기': [
    {
      id: 'product-kis-btr1100',
      name: 'KIS-BTR1100',
      imageSrc: '/images/kis/KIS-BTR1100.jpg',
      badges: ['모든 기종 지원', '초경량 무게'],
    },
    {
      id: 'product-kis-btpr',
      name: 'KIS-BTPR',
      imageSrc: '/images/kis/KIS-BTPR.jpg',
      badges: ['IC카드 결제', '프린터 일체형'],
    },
    {
      id: 'product-kis-cbp2000',
      name: 'KIS-CBP2000',
      imageSrc: '/images/kis/KIS-CBP2000.jpg',
      badges: ['Micro5핀방식 충전지원', '프린터 일체형'],
    },
    {
      id: 'product-kis-btr2000',
      name: 'KIS-BTR2000',
      imageSrc: '/images/kis/KIS-BTR2000.jpg',
      badges: ['IC·MSR리더기', '높은 휴대성'],
    },
  ],
  서명패드: [
    {
      id: 'product-kis-np20',
      name: 'KIS-NP20',
      imageSrc: '/images/kis/KIS-NP20.jpg',
      badges: ['컬러LCD', '밝은 이미지'],
    },
    {
      id: 'product-kis-sp120',
      name: 'KIS-SP120',
      imageSrc: '/images/kis/KIS-SP120.jpg',
      badges: ['컬러LCD', '삼성페이 지원'],
    },
    {
      id: 'product-kis-sp410',
      name: 'KIS-SP410',
      imageSrc: '/images/kis/KIS-SP410.jpg',
      badges: ['컬러LCD', '삼성페이 지원'],
    },
    {
      id: 'product-kis-sp300qr',
      name: 'KIS-SP300QR',
      imageSrc: '/images/kis/KIS-SP300QR.jpg',
      badges: ['컬러LCD', 'QR 결제지원'],
    },
    {
      id: 'product-ksp-s4',
      name: 'KSP-S4',
      imageSrc: '/images/ksnet/KSP-S4.jpg',
      badges: ['케이블 분리형', '현금영수증 가능'],
    },
    {
      id: 'product-ksp-s6',
      name: 'KSP-S6',
      imageSrc: '/images/ksnet/KSP-S6.jpg',
      badges: ['IC리더기 겸용', '삼성페이 지원'],
    },
  ],
};
