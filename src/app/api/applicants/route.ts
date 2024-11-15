// TODO: 배포 후 테스트 DB로 테스트하고, 바꿔야함.

import smsClient from '@/utils/smsClient';
import supabase from '@/utils/supabase';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const {
      applicantName,
      position,
      contactNumber,
      companyName,
      businessNumber,
      content,
    } = await req.json();

    // 유효성 검사 로직 추가 가능
    if (!applicantName || !contactNumber) {
      return NextResponse.json(
        { message: '필수 입력 사항을 모두 입력해주세요.' },
        { status: 400 }
      );
    }

    const consultationData = {
      applicantName,
      position,
      companyName,
      contactNumber,
      businessNumber,
      content,
    };

    const { error } = await supabase
      // .from('inqueries')
      .from('test')
      .insert([{ ...consultationData }]);

    if (error) {
      return NextResponse.json({ success: false });
    }

    const result = await smsClient.send({
      // to: ['01027474363', '01022064363'],
      to: ['01095192619'],
      content: `PG&VAN상담알림 | ${applicantName} | ${contactNumber}`,
    });

    if (result.statusName === 'success') {
      return NextResponse.json(
        { message: '상담 신청이 완료되었습니다.' },
        { status: 200 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: `상담 신청 중 오류가 발생했습니다. ${error}` },
      { status: 500 }
    );
  }
}
