import Image from 'next/image';
import { introProducts } from '@/constants/introProducts';

function ResponsiveImageGallery() {
  return (
    <div className="relative overflow-x-auto">
      <div
        className="flex"
        style={{
          maxWidth: '100%',
          gap: 'clamp(20px, calc((100vw - 375px) * ((30 - 20) / (1440 - 375)) + 20px), 30px)',
          width:
            'clamp(775px, calc((100vw - 375px) * ((1200 - 775) / (1440 - 375)) + 775px), 1200px)',
          height:
            'clamp(256.65px, calc((100vw - 375px) * ((398 - 256.65) / (1440 - 375)) + 256.65px), 398px)',
        }}
      >
        {introProducts.map((image, index) => (
          <div
            key={index}
            className="relative h-full flex-shrink-0 rounded-[20px]"
            style={{
              width:
                'clamp(245px, calc((100vw - 375px) * ((380 - 245) / (1440 - 375)) + 245px), 380px)',
            }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-[20px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResponsiveImageGallery;
