'use client';

import useApplicantForm from '@/hooks/useApplicantForm';
import Input from './Input';
import { FormEvent } from 'react';
import Button from '../Button';
import Textarea from './Textarea';
import Link from 'next/link';

function Form() {
  const { formData, errors, handleChange, validateAllFields } =
    useApplicantForm({
      applicantName: '',
      contactNumber: '010 - ',
      companyName: '',
      position: '',
      businessNumber: '',
      content: '',
      privacyAgreement: false
    });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateAllFields()) {
      return;
    }

    try {
      const response = await fetch('/api/applicants', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      alert(data.message);
    } catch (error) {
      alert('상담 신청 중 오류가 발생했습니다. 다시 시도해 주세요.');
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-8 w-[335px] sm:w-[480px] md:w-[700px] sm:p-2.5">
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <Input
          id="applicantName"
          name="applicantName"
          label="이름"
          value={formData.applicantName}
          placeholder="이름을 입력해주세요"
          onChange={(e) => handleChange('applicantName', e.target.value)}
          error={errors.applicantName}
          required
        />
        <Input
          id="contactNumber"
          name="contactNumber"
          label="연락처"
          value={formData.contactNumber}
          placeholder="010 - "
          onChange={(e) => handleChange('contactNumber', e.target.value)}
          error={errors.contactNumber}
          required
        />
        <Input
          id="companyName"
          name="companyName"
          label="회사명"
          value={formData.companyName}
          placeholder="회사명을 입력해주세요"
          onChange={(e) => handleChange('companyName', e.target.value)}
          error={errors.companyName}
        />
        <Input
          id="position"
          name="position"
          label="직책"
          value={formData.position}
          placeholder="직책을 입력해주세요"
          onChange={(e) => handleChange('position', e.target.value)}
          error={errors.position}
        />
        <Input
          id="businessNumber"
          name="businessNumber"
          label="사업자등록번호"
          value={formData.businessNumber}
          placeholder="사업자등록번호를 입력해주세요"
          onChange={(e) => handleChange('businessNumber', e.target.value)}
          error={errors.businessNumber}
        />
        <Textarea
          id="content"
          name="content"
          label="상담내용"
          value={formData.content}
          placeholder="상담내용을 입력해주세요 (매장 위치, 오픈 예정일 등을 적어주세요)"
          onChange={(e) => handleChange('content', e.target.value)}
          error={errors.content}
          required
        />
        <div>
          <div className="flex gap-3 items-center">
            <input
              type="checkbox"
              id="privacyAgreement"
              name="privacyAgreement"
              checked={formData.privacyAgreement}
              onChange={(e) =>
                handleChange('privacyAgreement', e.target.checked)
              }
              className="rounded-md border border-mistGray"
            />
            <label htmlFor="privacyAgreement">
              상담을 위한&nbsp;
              <Link
                href="/privacy-policy"
                target="_blank"
                className="text-primary"
              >
                개인정보 수집 및 이용
              </Link>
              에 동의합니다.
            </label>
          </div>
          {errors.privacyAgreement && (
            <span className="font-notoSans text-[14px] font-medium leading-[20px] text-vermellion">
              {errors.privacyAgreement}
            </span>
          )}
        </div>
        <Button className="btn-md btn-solid w-full" type="submit">
          제출하기
        </Button>
      </form>
    </div>
  );
}

export default Form;
