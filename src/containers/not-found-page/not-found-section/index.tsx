import Button from '@/components/Button'
import Error404 from '@/../public/images/error-404.svg';

function NotFoundSection() {
  return (
    <section className="w-[306px] md:w-[643px]">
      <div className="flex flex-col justify-center items-center gap-14 md:gap-24">
        <Error404 className="w-[320px] h-[102px] md:w-[571px] md:h-[182px]" />
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-col items-center gap-6">
            <h1 className="font-notoSans text-[36px] font-medium leading-[130%] text-charcoal text-center md:text-[64px] md:tracking-[-1.28px]">
              페이지가 없습니다.
            </h1>
            <p className="font-notoSans text-[20px] font-normal leading-[160%] tracking-[0.4px] text-[rgba(17,17,17,0.8)]">
              주소를 다시 한번 확인해주세요.
            </p>
          </div>
          <Button href="/" className="btn-lg btn-solid w-[208px]">
            홈으로 돌아가기
          </Button>
        </div>
      </div>
    </section>
  );
}

export default NotFoundSection;
