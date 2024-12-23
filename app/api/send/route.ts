import { EmailTemplate } from '@/components/common/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend("re_9w3gArH9_7Der7EidLfCat1vxjTR2Za1J");

export async function POST(req: Request) {
  try {
    const { userName, userEmail, userMessage } = await req.json();

    const { data, error } = await resend.emails.send({
      from: userEmail,
      to: ["Iscethiopia@gmail.com"],
      subject: 'Hello world',
      react: EmailTemplate({ userName, userEmail, userMessage }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    
    return Response.json(data);
  } catch (error) {
    console.log(error)
    return Response.json({ error: 'An error occurred while sending the email.' }, { status: 500 });
  }
}
