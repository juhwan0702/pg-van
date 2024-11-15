import { SmsClient } from '@pickk/sens';

const smsClient = new SmsClient({
  accessKey: process.env.NCP_ACCESS_KEY as string,
  secretKey: process.env.NCP_SECRET_KEY as string,
  smsServiceId: process.env.NCP_SMS_SERVICE_ID as string,
  callingNumber: process.env.NCP_CALLING_NUMBER as string,
});

export default smsClient;
