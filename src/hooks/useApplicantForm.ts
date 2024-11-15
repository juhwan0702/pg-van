import { useState } from 'react';

type ApplicantFormData = {
  applicantName: string;
  contactNumber: string;
  companyName: string;
  position: string;
  businessNumber: string;
  content: string;
  privacyAgreement: boolean;
};

const contactNumberPattern = /^010 - \d{4} - \d{4}$/;
const businessNumberPattern = /^\d{3} - \d{2} - \d{5}$/;

function useApplicantForm(initialValues: ApplicantFormData) {
  const [formData, setFormData] = useState<ApplicantFormData>(initialValues);
  const [errors, setErrors] = useState<Record<string, string | null>>({});

  const validators: Record<
    keyof ApplicantFormData,
    (value: string | boolean) => string | null
  > = {
    applicantName: (value) => (value === '' ? '이름을 입력해주세요.' : null),
    contactNumber: (value) => {
      if (value === '010 - ') {
        return '연락처를 입력해주세요.';
      }
      if (!contactNumberPattern.test(value as string)) {
        return '형식을 맞춰주세요. (010 - 1234 - 5678)';
      }
      return null;
    },
    companyName: () => null,
    position: () => null,
    businessNumber: (value) => {
      if (value === '') {
        return '';
      }
      if (!businessNumberPattern.test(value as string)) {
        return '형식을 맞춰주세요. (123 - 45 - 67890)';
      }
      return null;
    },
    content: () => null,
    privacyAgreement: (value) =>
      value ? null : '개인정보 수집 및 이용 동의에 체크해주세요.',
  };

  const formatContactNumber = (
    value: string,
    previousValue: string
  ): string => {
    // '010 - '으로 시작하지 않으면 앞에 붙여줌
    if (!value.startsWith('010 - ')) {
      value = '010 - ' + value.slice(value.startsWith('010') ? 3 : 0);
    }

    // '010 - ' 이후의 부분에서 숫자만 추출
    let digits = value.slice(6).replace(/\D/g, '');

    // 최대 8자리로 제한 (중간 4자리, 마지막 4자리)
    digits = digits.slice(0, 8);

    // 중간 그룹과 마지막 그룹으로 분할
    const middleGroup = digits.slice(0, 4);
    const lastGroup = digits.slice(4, 8);

    // 포맷된 값 초기화
    let formattedValue = '010 - ' + middleGroup;

    // 이전 입력의 길이와 현재 입력의 길이를 비교하여 삭제 여부 판단
    const isDeleting = value.length < previousValue.length;

    if (middleGroup.length === 4) {
      if (lastGroup.length > 0) {
        // 마지막 그룹이 있는 경우
        formattedValue += ' - ' + lastGroup;
      } else {
        // 입력이 삭제되는 중이고, 현재 값이 ' - '로 끝나지 않는 경우에만 ' - ' 제거
        if (isDeleting && previousValue.endsWith(' - ')) {
          formattedValue = '010 - ' + middleGroup;
        } else {
          // 입력이 추가되는 중이고, 현재 값이 ' - '로 끝나지 않으면 ' - ' 추가
          if (!isDeleting && !value.endsWith(' - ')) {
            formattedValue += ' - ';
          }
        }
      }
    }

    return formattedValue;
  };

  const formatBusinessNumber = (
    value: string,
    previousValue: string
  ): string => {
    // 숫자만 추출하고 최대 10자리로 제한
    const digits = value.replace(/\D/g, '').slice(0, 10);

    // 각 그룹으로 분할
    const firstGroup = digits.slice(0, 3);
    const secondGroup = digits.slice(3, 5);
    const thirdGroup = digits.slice(5, 10);

    // 포맷된 값 초기화
    let formattedValue = firstGroup;

    // 이전 입력의 길이와 현재 입력의 길이를 비교하여 삭제 여부 판단
    const isDeleting = value.length < previousValue.length;

    if (firstGroup.length === 3) {
      if (secondGroup.length > 0) {
        // 두 번째 그룹이 있는 경우
        formattedValue += ' - ' + secondGroup;
      } else {
        // 입력이 삭제되는 중이고, 현재 값이 ' - '로 끝나지 않는 경우에만 ' - ' 제거
        if (isDeleting && previousValue.endsWith(' - ')) {
          formattedValue = firstGroup;
        } else {
          // 입력이 추가되는 중이고, 현재 값이 ' - '로 끝나지 않으면 ' - ' 추가
          if (!isDeleting && !value.endsWith(' - ')) {
            formattedValue += ' - ';
          }
        }
      }

      if (secondGroup.length === 2) {
        if (thirdGroup.length > 0) {
          // 세 번째 그룹이 있는 경우
          formattedValue += ' - ' + thirdGroup;
        } else {
          // 입력이 삭제되는 중이고, 현재 값이 ' - '로 끝나지 않는 경우에만 ' - ' 제거
          if (isDeleting && previousValue.endsWith(' - ')) {
            formattedValue = firstGroup + ' - ' + secondGroup;
          } else {
            // 입력이 추가되는 중이고, 현재 값이 ' - '로 끝나지 않으면 ' - ' 추가
            if (!isDeleting && !value.endsWith(' - ')) {
              formattedValue += ' - ';
            }
          }
        }
      }
    }

    return formattedValue;
  };

  const handleChange = (
    field: keyof ApplicantFormData,
    value: string | boolean
  ) => {
    let formattedValue = value;

    if (field === 'contactNumber' && typeof value === 'string') {
      // 연락처 포맷팅
      formattedValue = formatContactNumber(value, formData.contactNumber);
    } else if (field === 'businessNumber' && typeof value === 'string') {
      // 사업자등록번호 포맷팅
      formattedValue = formatBusinessNumber(value, formData.businessNumber);
    }

    setFormData((prev) => ({ ...prev, [field]: formattedValue }));

    // 유효성 검사 실행
    const error = validators[field](formattedValue);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const validateAllFields = () => {
    const newErrors: Record<string, string | null> = {};

    Object.keys(validators).forEach((field) => {
      const value = formData[field as keyof ApplicantFormData];
      const error = validators[field as keyof ApplicantFormData](value);

      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  return {
    formData,
    errors,
    handleChange,
    validateAllFields,
  };
}

export default useApplicantForm;
