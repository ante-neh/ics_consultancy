import React from "react";
import Container from "../common/Container";
import Button from "../common/Button";
import { services } from "@/data/data";
import ServiceCard from "../common/ServiceCard";
import { useRouter } from "next/navigation";
import { RevealList, RevealWrapper } from "next-reveal";
const ServicesSection = () => {
  const router = useRouter()
  const handleOnClick = ()=>{
    router.push("/#contact")
  }
  return (
    <div className="w-full bg-[#EBEBEB] py-12 overflow-hidden" id="services">
      <Container className="max-w-[1300px]">
        <RevealWrapper origin="bottom" duration={2000} delay={200} >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#01013A]">
                Our Services
              </h2>
              <p className="text-[#01013A] mt-4 text-start text-lg leading-relaxed font-montserrat font-normal">
                We vouch for keeping up with our promises, delivering what we signed
                up for so that you can rely on us, and consider us like a family who
                cares for your future.
              </p>
            </div>
        </RevealWrapper>
        <RevealList origin="bottom" interval={200} duration={2000} delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard icon={service.icon} name={service.name} key={service.id} description={service.description}/>
              ))}
            </div>

        </RevealList>

        <div className="flex justify-center mt-12">
          <Button
            className="bg-[#00EDCF] text-[#01013A] font-medium px-4 py-2 mt-6 hover:bg-[#00CBAE] transition rounded-[64px]"
            name="Contact Us"
            handleOnClick={handleOnClick}
          />
        </div>
      </Container>
    </div>
  );
};

export default ServicesSection;
