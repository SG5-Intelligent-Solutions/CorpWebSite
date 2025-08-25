import { testimonials } from "../../lib/utils";

export default function TestimonialSlider() {
  const TestimonialCard = ({ testimonial }) => {
    return (
      <div className="w-[280px] md:w-[400px] lg:w-[500px] flex-shrink-0 px-2">
        <div className="border border-gray-800 rounded-xl p-6 md:p-8 h-full bg-black">
          <div className="flex mb-2 md:mb-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 ${i < testimonial.rating ? "text-white" : "text-gray-500"
                  }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-sm md:text-base lg:text-lg mb-4">
            {testimonial.text}
          </p>
          <p className="text-xs md:text-sm lg:text-base text-gray-400">
            {testimonial.author}
          </p>
        </div>
      </div>
    );
  };

  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];
  return (
    <div className="w-full bg-black text-white py-8 mx-auto relative overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      {/* First Row */}
      <div className="animate-scroll mb-6">
        <div className="flex gap-4 px-4">
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`first-${testimonial.id}-${index}`}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>

      {/* Second Row  */}
      <div className="animate-scroll-delayed">
        <div className="flex gap-4 px-4">
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={`second-${testimonial.id}-${index}`}
              testimonial={testimonial}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: 200%;
        }
        .animate-scroll-delayed {
          animation: scroll 30s linear infinite;
          width: 200%;
          animation-delay: -20s; 
        }
        .animate-scroll:hover,
        .animate-scroll-delayed:hover {
          animation-duration: 80s;
        }
      `}</style>
    </div>
  );
}
