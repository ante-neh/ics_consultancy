"use client";

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import Image from "next/image";
import Link from "next/link";

const ContactPage = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (form.current) {
      emailjs
        .sendForm(
          "YOUR_SERVICE_ID", 
          "YOUR_TEMPLATE_ID", 
          form.current,
          "YOUR_PUBLIC_KEY"
        )
        .then(
          () => {
            setLoading(false);
            setIsSent(true);
            form.current?.reset();
          },
          (error) => {
            console.log(error)
            setLoading(false);
          }
        );
    }
  };

  return (
    <div className="relative flex flex-col justify-center items-center bg-[#01013A] py-12 px-6 overflow-hidden" id="contact">
      <div className="absolute top-10 left-10 w-10 h-10 bg-[#00EDCF] rounded-full animate-bounce"></div>
      <div className="absolute bottom-20 right-16 w-6 h-6 bg-[#00EDCF] rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-[#00EDCF] rounded-full animate-bounce"></div>
      <div className="max-w-4xl w-full bg-[#DEF5E5] p-8 rounded-lg shadow-md">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-[#01013A] mb-6">
          CONTACT US
        </h2>

        <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className="p-3 rounded-lg bg-white shadow-inner text-gray-700 focus:outline-none"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="p-3 rounded-lg bg-white shadow-inner text-gray-700 focus:outline-none"
            required
          />

          <textarea
            name="message"
            rows={5}
            placeholder="Message"
            className="p-3 rounded-lg bg-white shadow-inner text-gray-700 md:col-span-2 focus:outline-none"
            required
          ></textarea>

          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-[#01013A] text-white px-8 py-2 rounded-lg hover:bg-[#00EDCF] hover:text-[#01013A] transition"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>

        {isSent && (
          <p className="text-center mt-4 text-[#00EDCF] font-semibold">
            Your message has been sent successfully!
          </p>
        )}
      </div>

      <div className="flex justify-center gap-4 mt-6">
        <Link href="https://www.facebook.com/share/15XqasaVHQ/?mibextid=wwXIfr" aria-label="Facebook">
          <Image
            src="/assets/facebook.png"
            alt="Facebook"
            width={30}
            height={30}
          />
        </Link>
        {/* <Link href="https://www.instagram.com/grace_africa_scholars/profilecard/?igsh=bnBhOHhjdmloNHhj" aria-label="Instagram">
          <Image
            src="/assets/instagram.png"
            alt="Instagram"
            width={30}
            height={30}
          />
        </Link> */}
        <Link href="https://www.tiktok.com/@international_student_et" aria-label="Twitter">
          <Image
            src="/assets/tiktok.png"
            alt="tiktok"
            width={30}
            height={30}
          />
        </Link>
        <Link href="https://t.me/isc_italy" aria-label="YouTube">
          <Image
            src="/assets/telegram.png"
            alt="YouTube"
            width={30}
            height={30}
          />
        </Link>
      </div>
    </div>
  );
};

export default ContactPage;
