import Header from '@/components/Header';
import ListItem from '@/components/ListItem';
import { pgFeatures } from '@/constants/pgFeatures';

function FeaturesSection() {
  return (
    <section className="flex flex-col responsive-container mb-16 md:mb-[72px]">
      <Header
        heading="PG 특징들"
        description="KSNET & KIS정보통신 PG 서비스 특징"
      />
      <ol>
        {pgFeatures.map((pgFeature) => (
          <ListItem
            key={pgFeature.id}
            number={pgFeature.number}
            feature={pgFeature.feature}
            description={pgFeature.description}
          />
        ))}
      </ol>
    </section>
  );
}

export default FeaturesSection;
