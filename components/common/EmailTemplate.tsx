import * as React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Link,
} from "@react-email/components";

interface EmailTemplateProps {
  userName: string;
  userEmail: string;
  userMessage: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  userName,
  userEmail,
  userMessage,
}) => (
  <Html>
    <Head />
    <Preview>New Contact Form Submission</Preview>
    <Body className="bg-gray-100 font-sans p-5">
      <Container className="bg-white rounded-lg shadow-md max-w-xl mx-auto p-6">
        {/* Header */}
        <Section className="text-center mb-6">
          <Heading className="text-2xl font-bold text-gray-800">
            New Contact Form Submission
          </Heading>
        </Section>
        {/* Content */}
        <Section>
          <Text className="text-gray-700">
            <span className="font-bold">Name:</span> {userName}
          </Text>
          <Text className="text-gray-700 mt-2">
            <span className="font-bold">Email:</span>{" "}
            <Link
              href={`mailto:${userEmail}`}
              className="text-blue-500 hover:underline"
            >
              {userEmail}
            </Link>
          </Text>
          <Text className="text-gray-700 mt-4 font-bold">Message:</Text>
          <Section className="bg-gray-50 border border-gray-300 p-3 mt-2 rounded-md">
            <Text className="text-gray-700">{userMessage}</Text>
          </Section>
        </Section>
      </Container>
    </Body>
  </Html>
);
