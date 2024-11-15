import Header from '@/components/Header';

function PrivacyPolicySection() {
  return (
    <section>
      <Header
        heading="개인정보처리방침"
        description="고객님의 정보를 소중하게 다룹니다"
      />
      <div className="flex flex-col gap-y-12 responsive-container mb-16 md:mb-[76px] font-notoSans">
        <p className="px-5 py-8 bg-[#F3F7FF] text-[18px] font-medium leading-normal text-charcoal">
          이지크레더블(이하 ＇회사＇ 라 한다)은 이용자의 개인정보 보호를 매우
          중요시하며, 이용자가 이지크레더블 웹 사이트(이하 ＇본 사이트＇ 라
          한다)를 이용함과 동시에 온라인 상에서 회사에 제공한 개인정보가
          보호받을 수 있도록 최선을 다하고 있습니다. 이에 회사는「개인정보
          보호법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」등 관련
          법규를 준수하기 위해 개인정보처리방침(이하 ＇본 방침＇ 이라 한다)을
          제정하고 이를 준수하고 있습니다.
        </p>
        <div className="flex flex-col gap-6">
          <h2 className="text-[28px] font-medium leading-[130%] text-charcoal">
            1. 총칙
          </h2>
          <p className="text-[16px] font-normal leading-[160%] tracking-[0.32px] text-[rgba(17,17,17,0.8)] md:text-[20px] md:tracking-[0.4px]">
            회사는 본 방침을 통하여 이용자가 제공하는 개인정보가 어떠한 용도와
            방식으로 이용되고 있으며 개인정보 보호를 위해 어떠한 조치가 취해지고
            있는지 알려 드리며, 본 사이트 첫 화면에 공개함으로써 이용자가 본
            방침을 언제나 용이하게 보실 수 있도록 조치하고 있습니다. 본 방침은
            관련 법률 및 지침의 변경, 회사 내부 운영방침의 변경 등으로 인하여
            수시로 변경될 수 있고, 이에 따른 지속적인 개선을 위하여 필요한
            절차를 정하고 있습니다. 본 방침을 개정하는 경우 회사는 그 변경사항에
            대해 즉시 본 사이트를 통하여 게시하여 이용자들이 확인할 수 있도록
            하고 있습니다. 이용자들께서는 본 사이트 방문 시 수시로 확인하여
            주시기 바랍니다.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-[28px] font-medium leading-[130%] text-charcoal">
            2. 수집하는 개인정보 항목 및 수집 방법
          </h2>
          <div className="text-[16px] font-normal leading-[160%] tracking-[0.32px] text-[rgba(17,17,17,0.8)] md:text-[20px] md:tracking-[0.4px]">
            본 사이트는 별도의 개인정보 등록과 절차 없이 자유롭게 접근할 수
            있습니다. 다만, 다음의 서비스는 보다 향상된 양질의 서비스를 제공하기
            위하여 최소한의 개인정보를 처리하고 있습니다.
            <br />
            <br /> 즉, 회사는 이용자의 개인정보를 수집하기 위하여 별도의 동의
            절차를 마련하고 있습니다. 회사는 이용자가 성명, 연락처, 회사명,
            사업자 등록번호 정보 입력 시 개인정보 수집 및 이용에 관한 동의여부를
            선택할 수 있는 장치 (「개인정보 수집 및 이용 동의」버튼)를 마련하여
            이용자가「개인정보 수집 및 이용 동의」버튼을 클릭하는 경우 개인정보
            수집 및 이용에 대하여 동의한 것으로 봅니다.
            <br />
            <br /> 회사는 개인정보보호법에 근거하여 아래와 같이 개인정보를
            수집하고 이용합니다.
            <br />
            <br />
            <ol>
              <li>1. 수집 항목: 성명, 연락처, 회사명, 사업자 등록번호</li>
              <li>
                2. 이용 목적: 상담 목적에 따른 본인 식별, 상담 목적을 위한
                제3자에게 제공, 문의 사항에 대한 회신
              </li>
              <li>3. 보유 기간: 5년 보유 후 파기</li>
            </ol>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-[28px] font-medium leading-[130%] text-charcoal">
            3. 개인정보의 수집 및 이용 목적
          </h2>
          <p className="text-[16px] font-normal leading-[160%] tracking-[0.32px] text-[rgba(17,17,17,0.8)] md:text-[20px] md:tracking-[0.4px]">
            회사는 수집한 개인정보를 고객 상담 및 사업 제안 시 본인 확인 및
            신속한 대응의 목적으로만 이용하며, 이용 목적이 변경되는 경우 관련
            법규에 따라 별도의 동의를 받는 등 필요한 조치를 이행합니다.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-[28px] font-medium leading-[130%] text-charcoal">
            4. 개인정보 운영
          </h2>
          <div className="text-[16px] font-normal leading-[160%] tracking-[0.32px] text-[rgba(17,17,17,0.8)] md:text-[20px] md:tracking-[0.4px]">
            회사는 이용자가 서비스의 유지 및 관리를 위하여 업무를 운영하고
            있습니다.
            <br />
            <br />
            <ol>
              <li>1. 개인정보 처리자: 이지크레더블</li>
              <li>
                2. 업무 내용: 정보전산처리 및 유지관리, 본 사이트 운영관리
              </li>
            </ol>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-[28px] font-medium leading-[130%] text-charcoal">
            5. 개인정보의 처리, 보유기간 및 파기 방법
          </h2>
          <p className="text-[16px] font-normal leading-[160%] tracking-[0.32px] text-[rgba(17,17,17,0.8)] md:text-[20px] md:tracking-[0.4px]">
            회사는 이용자가 고객 상담이나 사업 제안 등 회사에서 제공하는
            서비스를 이용하는 동안 이용자들의 개인정보를 처리, 보유하며, 이용
            목적이 달성되는 등 이용자의 개인정보가 불필요하게 되었을 때에는
            지체없이 개인정보를 파기합니다. 다만, 상법 등 관련 법령의 규정에
            의거하여, 거래 관련 권리 의무 관계의 확인 등을 목적으로 다음과 같이
            일정기간 개인정보를 보유할 수 있습니다.
            <br />
            <br /> - 소비자의 불만 또는 분쟁처리에 관한 기록 : 3년
            <br />
            <br /> 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는
            기술적 방법을 사용하여 삭제합니다. 개인정보를 담은 종이는 분쇄기로
            분쇄하거나 소각을 통하여 파기합니다.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-[28px] font-medium leading-[130%] text-charcoal">
            6. 개인정보 자동수집 장치의 설치, 운영 및 거부에 관한 사항
          </h2>
          <p className="text-[16px] font-normal leading-[160%] tracking-[0.32px] text-[rgba(17,17,17,0.8)] md:text-[20px] md:tracking-[0.4px]">
            본 사이트는 &apos;쿠키 (cookie)&apos; 를 사용하지 않습니다.
            &apos;쿠키 (cookie)&apos; 는 HTTP 서버에서 사용자의 브라우저에
            보내는 조그마한 데이터 꾸러미로서 회원의 컴퓨터 하드드라이브에
            저장됩니다. 이용자는 브라우저 옵션을 조정하여 모든 쿠키를
            받아들이거나, 쿠키가 설치될 때 통지를 보내도록 하거나, 아니면 모든
            쿠키를 거부할 수 있습니다. &apos;쿠키 (cookie)&apos; 는 브라우저
            종료 시 만료됩니다.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-[28px] font-medium leading-[130%] text-charcoal">
            7. 비밀유지
          </h2>
          <div className="text-[16px] font-normal leading-[160%] tracking-[0.32px] text-[rgba(17,17,17,0.8)] md:text-[20px] md:tracking-[0.4px]">
            회사는 직무상 지득하게 되었거나, 귀하가 제공한 개인 관련 정보의
            내용을 누설하지 아니하며, 비밀을 유지하기 위하여 적절한 조치를 취할
            것입니다. 다만, 다음 각 호의 경우에는 그러하지 않습니다.
            <br />
            <br />
            <ol>
              <li>1. 본 사이트에 제공되기 전에 이미 일반에 공개된 정보</li>
              <li>2. 본 사이트의 행위에 의하지 아니하고 공개된 정보</li>
              <li>3. 본 사이트가 제3자로부터 적법하게 취득한 정보</li>
              <li>4. 이용자와 상관없이 본 사이트가 독자적으로 개발한 정보</li>
              <li>5. 이용자가 서면으로 공개를 승인한 정보</li>
              <li>6. 기타 관계법령에서 허용하는 경우</li>
            </ol>
            <br />
            예외 사항의 경우에도 본래의 수집목적 및 이용목적에 반하여 무분별하게
            정보가 제공되지 않도록 최대한 노력하겠습니다.
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-[28px] font-medium leading-[130%] text-charcoal">
            8. 링크 사이트
          </h2>
          <p className="text-[16px] font-normal leading-[160%] tracking-[0.32px] text-[rgba(17,17,17,0.8)] md:text-[20px] md:tracking-[0.4px]">
            본 사이트는 이용자에게 다른 회사의 웹사이트 또는 자료에 대한 링크를
            제공할 수 있습니다. 이 경우 본 사이트는 외부 사이트 및 자료에 대한
            아무런 통제권이 없으므로 그로부터 제공받는 서비스나 자료의 유용성에
            대해 책임질 수 없으며 보증할 수 없습니다.
            <br />
            <br />본 사이트 홈페이지에 포함하고 있는 링크를 클릭하여 타 사이트의
            페이지로 옮겨갈 경우 해당 사이트의 개인정보처리방침은 본 사이트와
            무관하므로 새로 방문한 사이트의 정책을 검토해 보시기 바랍니다.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-[28px] font-medium leading-[130%] text-charcoal">
            9. 개인정보의 열람, 갱신, 수정 및 동의 철회
          </h2>
          <p className="text-[16px] font-normal leading-[160%] tracking-[0.32px] text-[rgba(17,17,17,0.8)] md:text-[20px] md:tracking-[0.4px]">
            이용자는 언제든지 본 사이트를 통해 제공한 자신의 개인정보를
            정정하거나 삭제 요청할 수 있으며, 삭제 요청은 &quot;12. 개인정보관리
            담당자&quot;에서 정한 자에게 전화 또는 이메일로 할 수 있습니다.
            <br />
            <br />
            이용자가 개인정보의 오류에 대한 정정을 요청한 경우, 정정을 완료하기
            전까지 당해 개인정보를 처리 또는 제공하지 않습니다.
            <br />
            <br />
            잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를
            제3자에게 지체 없이 통지하여 정정하도록 조치하겠습니다.
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-[28px] font-medium leading-[130%] text-charcoal">
            10. 개인정보의 안전성 확보조치
          </h2>
          <div className="text-[16px] font-normal leading-[160%] tracking-[0.32px] text-[rgba(17,17,17,0.8)] md:text-[20px] md:tracking-[0.4px]">
            회사는 개인정보보호법에 제 29조에 따라 다음과 같이 안전성 확보에
            필요한 기술적/관리적 및 물리적 조치를 취하고 있습니다.
            <br />
            <br />
            <ol className="space-y-3">
              <li className="flex">
                <div>1.&nbsp;</div>
                <div>
                  개인정보 처리인력의 최소화
                  <br />
                  개인정보 보호를 위해 개인정보 처리자에 대한 권한을 최소화하고
                  있습니다.
                </div>
              </li>
              <li className="flex">
                <div>2.&nbsp;</div>
                <div>
                  내부 점검 정기적 시행
                  <br />
                  개인정보의 처리 관련 안전성 확보를 위해 정기적으로 자체 점검을
                  실시하고 있습니다.
                </div>
              </li>
              <li className="flex">
                <div>3.&nbsp;</div>
                <div>
                  내부 관리계획의 수립 및 시행
                  <br />
                  개인정보의 안전한 처리 및 관리를 위해 내부관리계획을 수립하여
                  시행하고 있습니다.
                </div>
              </li>
              <li className="flex">
                <div>4.&nbsp;</div>
                <div>
                  해킹 등에 대비한 기술적 대책
                  <br />
                  회사는 해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및
                  훼손을 막기 위하여 보안프로그램을 설치하고 주기적인
                  갱신/점검을 하고 있습니다. 외부로부터 접근이 통제된 구역에
                  시스템을 설치하고 기술적, 물리적으로 감시 및 차단하고
                  있습니다.
                </div>
              </li>
              <li className="flex">
                <div>5.&nbsp;</div>
                <div>
                  개인정보에 대한 접근 제한
                  <br />
                  개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여,
                  변경, 말소를 통하여 개인정보에 대한 접근통제를 위하여 필요한
                  조치를 하고 있습니다. 침입차단시스템을 이용하여 외부로부터의
                  무단 접근을 통제하고 있습니다.
                </div>
              </li>
              <li className="flex">
                <div>6.&nbsp;</div>
                <div>
                  접속기록의 보관 및 위변조 방지
                  <br />
                  개인정보 처리시스템에 접속한 기록을 최소 6개월 이상 보관,
                  관리하고 있으며, 접속 기록이 위변조 및 도난, 분실되지 않도록
                  보안기능을 사용하고 있습니다.
                </div>
              </li>
              <li className="flex">
                <div>7.&nbsp;</div>
                <div>
                  문서보안을 위한 잠금장치 사용
                  <br />
                  개인정보가 포함된 서류, 보조저장매체 등을 잠금장치가 있는
                  안전한 장소에 보관하고 있습니다.
                </div>
              </li>
              <li className="flex">
                <div>8.&nbsp;</div>
                <div>
                  비인가자에 대한 출입 통제
                  <br />
                  개인정보를 보관하고 있는 물리적 보관 장소를 별도로 두고 이에
                  대해 출입통제 절차를 수립, 운영하고 있습니다.
                </div>
              </li>
              <li className="flex">
                <div>9.&nbsp;</div>
                <div>
                  재해, 재난 대비 안전조치
                  <br />
                  천재지변을 비롯한 재해, 재난 발생에 대비하여 위기대응 매뉴얼
                  등 대응절차를 마련하고 점검하고 있습니다.
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-[28px] font-medium leading-[130%] text-charcoal">
            11. 의견수렴 및 불만처리
          </h2>
          <div className="text-[16px] font-normal leading-[160%] tracking-[0.32px] text-[rgba(17,17,17,0.8)] md:text-[20px] md:tracking-[0.4px]">
            본 사이트는 이용자의 의견을 소중하게 생각하며, 이용자는
            의문사항으로부터 언제나 성실한 답변을 받을 권리가 있습니다. 본
            사이트는 이용자와의 원활한 의사소통을 위해 본 사이트에 연락처,
            이메일 주소를 제공하고 있습니다. 접수된 의견이나 불만 등에 대해서는
            빠른 시일 내에 성실하게 답변 드리겠습니다. 다만, 근무시간 이후 또는
            주말 및 공휴일에는 익일 처리하는 것을 원칙으로 합니다. 기타
            개인정보에 관한 문의 및 상담이 필요한 경우에는 개인정보침해신고센터,
            대검찰청 인터넷범죄수사센터, 경찰청 사이버테러대응센터 등으로
            문의하실 수 있습니다.
            <br />
            <br />
            <ul className="space-y-3">
              <li>
                <span className="text-charcoal font-bold">
                  개인정보 침해신고센터 (한국인터넷진흥원 운영)
                </span>
                <br /> 소관업무 : 개인정보 침해사실 신고, 상담신청
                <br /> 홈페이지 : http://privacy.kisa.or.kr <br /> 전화 :
                (국번없이) 118
                <br /> 주소 : (58324) 전남 나주시 진흥길 9(빛가람동 301-2) 3층
                개인정보침해신고센터
              </li>
              <li>
                <span className="text-charcoal font-bold">
                  개인정보 분쟁조정위원회
                </span>
                <br />
                소관업무 : 개인정보 분쟁조정신청, 집단분쟁조정 (민사적 해결)
                <br />
                홈페이지 : http://www.kopico.go.kr
                <br />
                전화 : (국번없이) 1833-6972
                <br />
                주소 : (03171)서울특별시 종로구 세종대로 209 정부서울청사 4층
                <br />
              </li>
              <li>
                <span className="text-charcoal font-bold">
                  대검찰청 사이버범죄수사단
                </span>
                <br />
                전화 : 02-3480-3573
                <br />
                URL : http://www.spo.go.kr
                <br />
              </li>
              <li>
                <span className="text-charcoal font-bold">
                  경찰청 사이버안전국
                </span>
                <br />
                전화 : (국번없이) 182
                <br />
                URL : http://cyberbureau.police.go.kr
                <br />
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-[28px] font-medium leading-[130%] text-charcoal">
            12. 개인정보관리 담당자
          </h2>
          <div className="text-[16px] font-normal leading-[160%] tracking-[0.32px] text-[rgba(17,17,17,0.8)] md:text-[20px] md:tracking-[0.4px]">
            본 사이트는 이용자가 좋은 정보를 안전하게 이용하는 것을 매우
            중요하게 생각합니다. 개인정보관리 담당자는 이용자에게 고지한
            사항들을 준수하기 위해, 개인정보 보호에 최선을 다하고 있습니다.
            그러나, 해킹 등 기본적인 네트워크 상의 위험성에 의해 발생하는 예기치
            못한 사고로 인한 정보의 훼손 및 방문자가 작성한 게시물에 의한 각종
            분쟁에 관해서는 책임이 없습니다. 회원의 개인정보를 취급하는 담당자는
            다음과 같으며 개인정보 관련 문의사항에 신속하고 성실하게
            답변해드리고 있습니다.
            <br />
            <br />
            <p>
              <span className="text-charcoal font-medium">
                개인정보관리 담당자
              </span>
              <br /> 이름 : 이승혁
              <br /> 직책 : 대표
              <br /> 이메일: dia4363a@naver.com
              <br />
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-[28px] font-medium leading-[130%] text-charcoal">
            13. 고지의 의무
          </h2>
          <div className="text-[16px] font-normal leading-[160%] tracking-[0.32px] text-[rgba(17,17,17,0.8)] md:text-[20px] md:tracking-[0.4px]">
            현 개인정보처리방침은 2023년 8월 31일에 제정되었습니다. 정부의 정책
            또는 보안기술의 변경에 따라 내용의 추가ㆍ삭제 및 수정이 있을 시에는
            개정 최소 7일 전부터 홈페이지를 통해 고지할 것입니다.
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivacyPolicySection;
