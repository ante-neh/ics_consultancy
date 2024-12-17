import React from "react";
import Container from "../common/Container";
import Button from "../common/Button";
import { services } from "@/data/data";
import ServiceCard from "../common/ServiceCard";
import { useRouter } from "next/navigation";
const ServicesSection = () => {
  const router = useRouter()
  const handleOnClick = ()=>{
    router.push("/#contact")
  }
  return (
    <div className="w-full bg-[#EBEBEB] py-12 overflow-hidden" id="services">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#01013A]">
            Our Services
          </h2>
          <p className="text-[#01013A] mt-4 text-lg leading-relaxed">
            We vouch for keeping up with our promises, delivering what we signed
            up for so that you can rely on us, and consider us like a family who
            cares for your future.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard icon={service.icon} name={service.name} key={service.id}/>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            className="bg-[#01013A] text-white hover:bg-[#00EDCF] hover:text-[#01013A] transition-all duration-500 px-6 py-3 rounded-[32px] font-semibold"
            name="Contact Us"
            handleOnClick={handleOnClick}
          />
        </div>
      </Container>
    </div>
  );
};

export default ServicesSection;
