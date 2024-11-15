import Card from '@/components/Card';
import Header from '@/components/Header';
import { heroFeatures } from '@/constants/heroFeatures';

function FeaturesSection() {
  return (
    <section className="w-full mb-16 md:mb-24">
      <Header
        heading="특징 소개"
        description="이지크레더블 솔루션의 특징을 소개합니다."
        headingLevel={2}
      />
      <div
        className="
          grid
          grid-cols-1
          gap-[24px]
          sm:grid-cols-2
          lg:grid-cols-3
          lg:gap-[30px]
        "
      >
        {heroFeatures.map((card) => (
          <Card
            key={card.id}
            icon={card.icon}
            heading={card.heading}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;
