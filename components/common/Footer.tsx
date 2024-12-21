import Link from "next/link";
import Container from "./Container";
import {navigations} from "../../data/data";


const Footer = () => {
  return (
    <div className="bg-blue-600">
      <Container className="text-white">
        <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start ">
          <div className="text-center md:text-left">
            <div className="flex flex-col items-center md:items-start mb-4">
              <h2 className="text-3xl font-bold text-[#00EDCF] mb-2">
                International Student Community
              </h2>
            </div>
          </div>

          {/* Section 2: Addresses */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">Addresses:</h3>

            {/* Ethiopia */}
            <p>
              <strong>Ethiopia:</strong> Addis Ababa, Bitweded Bahiru Building <br />
              Phone: +251934146000 <br />
              <Link
                href="https://goo.gl/maps/abcdef123456"
                className="text-[#00EDCF] hover:underline"
              >
                View on Google Maps
              </Link>
            </p>

            {/* Italy */}
            <p className="mt-4">
              <strong>Italy:</strong> Viale. 03043 Cassino, Province of Frosinone <br />
              Phone: +393517966376 <br />
              <Link
                href="https://goo.gl/maps/abcdef123456"
                className="text-[#00EDCF] hover:underline"
              >
                View on Google Maps
              </Link>
            </p>

            {/* Malaysia */}
            <p className="mt-4">
              <strong>Malaysia:</strong> Neu Suites Jalan Ampang | 55000, Kuala Lumpur <br />
              Phone: +60 16 446 8149 <br />
              <Link
                href="https://goo.gl/maps/abcdef123456"
                className="text-[#00EDCF] hover:underline"
              >
                View on Google Maps
              </Link>
            </p>
          </div>

          {/* Section 3: Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold mb-2">Quick Links:</h3>
            <ul className="list-none">
              {navigations.map((item, index) => (
                <li key={index} className="mt-2">
                  <Link
                    href={item.href}
                    className="text-[#00EDCF] hover:underline"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-600 mt-6">
          <div className="container mx-auto px-6 py-4 flex justify-center items-center text-sm">
            <p className="mb-2 md:mb-0">
              ©{new Date().getFullYear()} International Student Community | All rights reserved
            </p>
          </div>
        </div>
      </Container>


    </div>
  );
};

export default Footer;
