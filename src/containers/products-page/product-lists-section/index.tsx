'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import { ProductTab, productTabs, productsData } from '@/constants/products';
import Badge from '@/components/Badge';
import Header from '@/components/Header';

interface Product {
  id: string;
  name: string;
  imageSrc: string;
  badges: string[];
}

const ProductListsSection = () => {
  const [activeTab, setActiveTab] = useState<ProductTab>(productTabs[0]);

  const products: Product[] = productsData[activeTab] || [];

  return (
    <section className="w-full overflow-hidden mb-16 md:mb-20">
      <Header
        heading="제품 소개"
        description="매장에 필요한 제품들을 직접 확인해보세요."
      />
      {/* 탭 섹션 */}
      <div className="relative overflow-x-auto">
        <div
          className="flex bg-[#FAFAFA] rounded-[28px] w-[1000px] md:w-[1200px] mx-auto"
          style={{
            maxWidth: '100%',
          }}
        >
          {productTabs.map((tab) => (
            <Button
              key={tab}
              className={`btn-md btn-mixed md:btn-lg flex-shrink-0 w-[200px] md:w-[240px] ${
                activeTab === tab ? 'bg-primary text-white' : ''
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </Button>
          ))}
        </div>
      </div>

      {/* 탭과 제품 리스트 사이의 간격 */}
      <div className="h-[64px]" />

      {/* 제품 리스트 섹션 */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-[30px] sm:gap-y-[30px] sm:gap-x-[30px] md:gap-y-[42px] md:gap-x-[30px] mx-auto"
        style={{
          maxWidth: '1200px',
        }}
      >
        {products.map((product) => (
          <div key={product.id}>
            {/* 제품 이미지 */}
            <div className="relative w-full overflow-hidden">
              <div className="relative w-full" style={{ aspectRatio: '1/1' }}>
                <Image
                  src={product.imageSrc}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover rounded-xl"
                />
              </div>
            </div>

            {/* 이미지와 배지 사이의 간격 */}
            <div className="h-[24px]" />

            {/* 배지 섹션 */}
            <div className="flex space-x-2">
              {product.badges.map((badge, index) => (
                <Badge
                  key={index}
                  label={badge}
                  textColor="text-primary"
                  borderColor="border-primary"
                />
              ))}
            </div>

            {/* 배지와 제품명 사이의 간격 */}
            <div className="h-[18px]" />

            {/* 제품명 */}
            <h3 className="font-notoSans font-medium text-[28px] leading-[1.2] text-charcoal">
              {product.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductListsSection;
