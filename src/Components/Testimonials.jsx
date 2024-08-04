import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Shopping at The Byte Boutique has completely elevated my skillset, my creativity and my understanding of how fabric works on the body- their beautiful, high quality textiles have both challenged and inspired me, and I wouldn’t be the maker I am today without them!",
    img: "https://variety.com/wp-content/uploads/2021/12/Steven-Victor-Hitmakers-Hitbreaker-of-the-Year.jpg?w=1000",
  },
  {
    id: 2,
    name: "Satya Nadella",
    text: "The Byte Boutique has the best range of linens!my creativity and my understanding of how fabric works on the body- their beautiful, and they have a wonderful curation of solid colors too.The Byte Boutique has rapidly become my favourite place to order fabric online.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh4hQ0lfSnVWbmxoMZO_k2Do1LU4BVKHwovQ&s",
  },
  {
    id: 3,
    name: "Virat Kohli",
    text: "The Byte Boutique has rapidly become my favourite place to order fabric online. I can shop safe in the knowledge that the fabrics will be top quality and true to the thorough online description. Fast shipping plus something to suit every project from everyday basics to ball gown!",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJDuXUP4STvA-fYPpGiLkB9iMrtPBAErbYmA&s",
  },
  {
    id: 5,
    name: "Sachin Tendulkar",
    text: "The Byte Boutique is my first stop to find unique, high quality fabrics.my creativity and my understanding of how fabric works on the body- their beautiful I love the linen, the merino, the woolens…I can go on and on! And Liberty Fabrics I can’t find anywhere else!",
    img: "data:image/jpeg;base64,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",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-purple-700">
            What our customers are saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          Kind Words from Our Happy Customers
          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
