import TestimonialCard from "../common/TestimonialCard";
import Container from "../common/Container";
import { testimonials } from "@/data/data";

const Testimonials = () => {
  return (
    <section className="py-16 bg-[#00EDCF]" id="testemonials">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#01013A]">What Our Students Say</h2>
          {/* <p className="text-gray-400 mt-4">
            Hear from our successful students!
          </p> */}
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
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
      </Container>
    </section>
  );
};

export default Testimonials;
