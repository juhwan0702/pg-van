import Form from '@/components/Form';
import Header from '@/components/Header';

function ContactUsSection() {
  return (
    <section>
      <Header heading="상담문의" description="신속하게 답변드리겠습니다" />
      <div className="flex flex-col items-center responsive-container mb-16 md:mb-[76px]">
        <Form />
      </div>
    </section>
  );
}

export default ContactUsSection;
