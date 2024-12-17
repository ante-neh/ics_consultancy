import TestimonialCard from "../common/TestimonialCard";
import Container from "../common/Container";
import students from "@/public/assets/students.jpeg";
import students2 from "@/public/assets/students2.jpeg";
import students3 from "@/public/assets/students3.jpeg";

const testimonials = [
  {
    image: students,
    name: "John Doe",
    country: "Canada",
    level: "Bachelor's",
    comment:
      "Thanks to the amazing support, I successfully got admission to a top Canadian university. Highly recommend!",
  },
  {
    image: students2,
    name: "Jane Smith",
    country: "Italy",
    level: "Master's",
    comment:
      "The team made my application process seamless and stress-free. I got admitted to a prestigious Italian university!",
  },
  {
    image: students3,
    name: "Ali Khan",
    country: "Germany",
    level: "PhD",
    comment:
      "Their expert guidance ensured that I aced my visa interview and got admitted for my PhD program in Germany!",
  },
  {
    image: students3,
    name: "Ali Khan",
    country: "Germany",
    level: "PhD",
    comment:
      "Their expert guidance ensured that I aced my visa interview and got admitted for my PhD program in Germany!",
  },
  {
    image: students3,
    name: "Ali Khan",
    country: "Germany",
    level: "PhD",
    comment:
      "Their expert guidance ensured that I aced my visa interview and got admitted for my PhD program in Germany!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-[#00EDCF]" id="testemonials">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#01013A]">What Our Students Say</h2>
          <p className="text-gray-400 mt-4">
            Hear from our successful students!
          </p>
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
