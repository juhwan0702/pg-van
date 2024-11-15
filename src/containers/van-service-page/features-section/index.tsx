import Header from '@/components/Header';
import ListItem from '@/components/ListItem';
import { vanFeatures } from '@/constants/vanFeatures';

function FeaturesSection() {
  return (
    <section className="flex flex-col responsive-container mb-16 md:mb-[72px]">
      <Header heading="VAN 특징들" description="이지크레더블 VAN 서비스 특징" />
      <ol>
        {vanFeatures.map((vanFeature) => (
          <ListItem
            key={vanFeature.id}
            number={vanFeature.number}
            feature={vanFeature.feature}
            description={vanFeature.description}
          />
        ))}
      </ol>
    </section>
  );
}

export default FeaturesSection;
