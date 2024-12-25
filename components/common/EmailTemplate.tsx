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
    <Preview className="font-montserrat">New Contact Form Submission</Preview>
    <Body className="bg-gray-100 p-5 font-montserrat">
      <Container className="bg-white rounded-lg shadow-md max-w-xl mx-auto p-6">
        {/* Header */}
        <Section className="text-center mb-6">
          <Heading className="text-2xl font-bold font-montserrat text-gray-800">
            New Contact Form Submission
          </Heading>
        </Section>
        {/* Content */}
        <Section>
          <Text className="text-gray-700">
            <span className="font-bold font-montserrat">Name:</span> {userName}
          </Text>
          <Text className="text-gray-700 mt-2">
            <span className="font-bold font-montserrat">Email:</span>{" "}
            <Link
              href={`mailto:${userEmail}`}
              className="text-blue-500 hover:underline font-montserrat"
            >
              {userEmail}
            </Link>
          </Text>
          <Text className="text-gray-700 mt-4 font-bold font-montserrat">Message:</Text>
          <Section className="bg-gray-50 border border-gray-300 p-3 mt-2 rounded-md font-montserrat">
            <Text className="text-gray-700 font-montserrat">{userMessage}</Text>
          </Section>
        </Section>
      </Container>
    </Body>
  </Html>
);
