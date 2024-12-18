import Link from "next/link";
import Container from "./Container";

const Footer = () => {
  return (
    <Container className="text-white">
      <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        <div className="text-center md:text-left">
          <div className="flex flex-col items-center md:items-start mb-4">
            <h2 className="text-3xl font-bold text-[#00EDCF] mb-2">
              International Student Community
            </h2>
          </div>
        </div>

        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2">Address:</h3>
          <p>
            Bole Sub City, Wereda 02 <br />
            <span className="text-[#00EDCF]">
              Bitweded Bahiru Abreham Tower, 8th Floor,
            </span>
            <br />
            Addis Ababa, Ethiopia
          </p>
          <p className="mt-4">
            Email:{" "}
            <Link
              href="mailto:click@here.com"
              className="text-[#00EDCF] hover:underline"
            >
              click here
            </Link>
          </p>
        </div>

        <div className="rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4879.606000917589!2d38.76386257584994!3d9.006317789341871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85bf72d0c177%3A0x6ea4d64ced3effe9!2sGrace%20educational%20%26%20Visa%20consultancy!5e1!3m2!1sen!2set!4v1734465426138!5m2!1sen!2set"
            className="w-full h-64 md:h-80"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      <div className="border-t border-gray-600 mt-6">
        <div className="container mx-auto px-6 py-4 flex justify-center items-center text-sm">
          <p className="mb-2 md:mb-0">
            ©{new Date().getFullYear()} International Student Community | All rights reserved
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
