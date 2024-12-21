"use client";
import React, { useState } from "react";
import Image from "next/image";

const countryData = [
  {
    country: "China",
    image: "/assets/china.jpeg",
    bachelors: [
      "Passport",
      "Transcript from grades 9–12",
      "University entrance result (optional)",
      "Medium of instruction certificate from high school",
      "Recommendation letters (at least 2)",
      "Certificates of charity activities",
      "Forensic (police report)",
      "Medical result",
    ],
    masters: [
      "Passport",
      "Transcript from grades 9–12",
      "University entrance result (optional)",
      "Medium of instruction certificate from high school",
      "Recommendation letters (at least 2)",
      "Certificates of charity activities",
      "Forensic (police report)",
      "Medical result",
      "Bachelor's degree certificate (original and copy)",
      "Work experience documentation with recommendations",
    ],
  },
  {
    country: "South Korea",
    image: "/assets/korea.jpeg",
    bachelors: [
      "Passport",
      "Transcript from grades 9–12",
      "University entrance result (optional)",
      "Medium of instruction certificate from high school",
      "Recommendation letters (at least 2)",
      "Certificates of charity activities",
    ],
    masters: [
      "Passport",
      "Medium of instruction certificate",
      "Recommendation letters (at least 2)",
      "Certificates of charity activities",
      "Bachelor's degree certificate (original and copy)",
      "Work experience documentation with recommendations",
    ],
  },
  {
    country: "Austria",
    image: "/assets/austria.jpeg",
    bachelors: [
      "Passport",
      "Transcript from grades 9 – 12",
      "University entrance result (if applicable)",
      "Medium of instruction certificate from high school",
      "Recommendation letters",
    ],
    masters: [
      "Passport",
      "Medium of instruction certificate",
      "Recommendation letters",
      "Bachelor's degree certificate (original and copy)",
      "Statement of purpose",
    ],
  },
  {
    country: "Italy",
    image: "/assets/italy.jpeg",
    bachelors: [
      "Passport",
      "Transcript from grades 9–12",
      "University entrance result (if applicable)",
      "Medium of instruction certificate from high school",
      "Recommendation letters",
      "Proof of financial resources",
    ],
    masters: [
      "Passport",
      "Bachelor's degree certificate (original and copy)",
      "Recommendation letters",
      "Medium of instruction certificate",
      "Proof of financial resources",
      "Motivational letter",
    ],
  },
  {
    country: "Canada",
    image: "/assets/canada.jpeg",
    bachelors: [
      "Passport",
      "Transcript from grades 9–12",
      "English proficiency test results (e.g., IELTS or TOEFL)",
      "Recommendation letters",
      "Statement of purpose",
    ],
    masters: [
      "Passport",
      "Bachelor's degree certificate (original and copy)",
      "English proficiency test results (e.g., IELTS or TOEFL)",
      "Recommendation letters",
      "Statement of purpose",
      "Resume/CV",
    ],
  },
  {
    country: "United States",
    image: "/assets/usa.jpeg",
    bachelors: [
      "Passport",
      "Transcript from grades 9–12",
      "Standardized test scores (e.g., SAT or ACT)",
      "English proficiency test results (e.g., IELTS or TOEFL)",
      "Recommendation letters",
      "Statement of purpose",
    ],
    masters: [
      "Passport",
      "Bachelor's degree certificate (original and copy)",
      "English proficiency test results (e.g., IELTS or TOEFL)",
      "Recommendation letters",
      "Statement of purpose",
      "Resume/CV",
      "GRE/GMAT scores (if required)",
    ],
  },
  {
    country: "Cyprus",
    image: "/images/cypres.jpg",
    bachelors: [
      "Passport",
      "Transcript from grades 9–12",
      "English proficiency test results (e.g., IELTS or TOEFL)",
      "Recommendation letters",
    ],
    masters: [
      "Passport",
      "Bachelor's degree certificate (original and copy)",
      "English proficiency test results (e.g., IELTS or TOEFL)",
      "Recommendation letters",
      "Statement of purpose",
    ],
  },
];


const CountryRequirements = () => {
  const [selectedCountry, setSelectedCountry] = useState(countryData[0]);

  return (
    <div className="bg-[#EBEBEB] py-12 px-6 text-[#01013A]">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#00EDCF] mb-8">
          Country Requirements
        </h2>

        {/* Country Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {countryData.map((country) => (
            <button
              key={country.country}
              onClick={() => setSelectedCountry(country)}
              className={`py-3 px-4 rounded-lg font-semibold transition ${
                selectedCountry.country === country.country
                  ? "bg-[#00EDCF] text-white"
                  : "bg-white text-[#01013A] hover:bg-[#00EDCF] hover:text-white"
              }`}
            >
              {country.country}
            </button>
          ))}
        </div>

        {/* Country Details */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative w-full h-64 rounded-lg overflow-hidden">
              <Image
                src={selectedCountry.image}
                alt={selectedCountry.country}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-md"
              />
            </div>

            {/* Requirements */}
            <div>
              <h3 className="text-2xl font-bold text-[#00EDCF] mb-4">
                {selectedCountry.country}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Bachelors Section */}
                <div>
                  <h4 className="text-xl font-semibold mb-3">
                    Bachelor&aposs Requirements
                  </h4>
                  <ul className="list-disc pl-5 text-lg space-y-2">
                    {selectedCountry.bachelors.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Masters Section */}
                <div>
                  <h4 className="text-xl font-semibold mb-3">
                    Master&aposs Requirements
                  </h4>
                  <ul className="list-disc pl-5 text-lg space-y-2">
                    {selectedCountry.masters.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryRequirements;
