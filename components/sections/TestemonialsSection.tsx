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
    <section className="py-16 bg-[#00EDCF]" id="testimonials">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#01013A]">What Our Students Say</h2>
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
            className="px-6 py-3 bg-[#01013A] text-white rounded-lg hover:bg-[#007769] transition-all duration-300"
          >
            {isExpanded ? "See Less" : "See More"}
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
