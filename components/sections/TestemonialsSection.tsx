import { useState } from "react";
import TestimonialCard from "../common/TestimonialCard";
import Container from "../common/Container";
import { testimonials } from "@/data/data";

const Testimonials = () => {
  const [visibleCount, setVisibleCount] = useState(6); 
  const isExpanded = visibleCount >= testimonials.length; 

  const toggleVisibility = () => {
    if (isExpanded) {
      setVisibleCount(6); 
    } else {
      setVisibleCount(testimonials.length); 
    }
  };
  
  return (
    <section className="py-16 bg-[#EBEBEB]" id="testimonials">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#00EDCF] font-euclid">What Our Students Say</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.slice(0, visibleCount).map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                index % 2 === 0 ? "animate-fadeInUp" : "animate-fadeInDown"
              }`}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button
            onClick={toggleVisibility}
            className="bg-[#00EDCF] text-[#01013A] font-medium px-4 py-2 mt-6 hover:bg-[#00CBAE] transition rounded-[64px]"
          >
            {isExpanded ? "See Less" : "See More"}
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
