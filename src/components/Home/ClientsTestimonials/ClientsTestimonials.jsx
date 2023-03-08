import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Image from "next/image";

const ClientsTestimonials = ({ testimonials }) => {
  return (
    <section className="container mx-auto mt-20" data-aos="fade-down">
      <h1 className="text-3xl text-center font-medium text-neutral-500">
        Clients Testimonials
      </h1>

      <dl className="mt-10">
        <Splide
          aria-label="testimonials"
          options={{
            rewind: true,
            arrows: false,
            autoplay: true,
            drag: true,
            autoplay: true,
            type: "loop",
            gap: "3rem",
            padding: "25em",
            mediaQuery: "max",
            breakpoints: {
              768: {
                padding: "0em",
              },
            },
          }}
        >
          {testimonials.map((testimonial) => (
            <SplideSlide key={testimonial._id} className="shadow-2xl">
              <dt className="text-center drop-shadow-2xl pb-10 ">
                <Image
                  className="object-cover w-20 h-20 rounded-full mx-auto"
                  src={testimonial?.image}
                  alt="profile image"
                  width={500}
                  height={500}
                />
                <h1 className="mt-2 font-semibold text-xl">
                  {testimonial?.userName}
                </h1>
                <h1 className="">{testimonial?.job}</h1>
                <p className="mt-3 italic">" {testimonial?.comment} "</p>
              </dt>
            </SplideSlide>
          ))}
        </Splide>
      </dl>
    </section>
  );
};

export default ClientsTestimonials;
