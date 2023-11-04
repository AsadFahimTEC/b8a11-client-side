import {useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slides = [
    {
      image:
        "https://i.ibb.co/593Fwv5/premium-photo-1663099672816-216f4cf67abb-auto-format-fit-crop-q-60-blend-000000-blend-alpha-10-blend.jpg",
      title: "Personalized Reading Recommendations",
      description:
        "Discover the joy of reading like never before with our 'Personalized Reading Recommendations' service. We use advanced algorithms and insights into your unique reading preferences to curate a handpicked selection of books that are a perfect fit for you. Say goodbye to generic book lists and dive into a world of literary adventures catered specifically to your tastes.",
    },
    {
      image:
        "https://i.ibb.co/s51w4CK/photo-1474291102916-622af5ff18bb-auto-format-fit-crop-q-60-blend-000000-blend-alpha-10-blend-mode-no.jpg",
      title: "Discover Your Next Book Adventure",
      description:
        'Discover Your Next Book Adventure" is a unique and personalized book discovery service that helps you embark on a literary journey like never before. We use advanced algorithms and expert recommendations to curate a selection of books tailored to your individual preferences and reading habits. Say goodbye to endless searching and hello to a world of captivating reads waiting to be explored.',
    },
    {
      image:
        "https://i.ibb.co/2j0XNVG/photo-1482451111823-78eb84149f67-auto-format-fit-crop-q-60-blend-000000-blend-alpha-10-blend-mode-no.jpg",
      title: " Journey Through Curated Reads",
      description:
        "Journey Through Curated Reads is a book store website service that takes you on a personalized literary adventure. Our expert curators handpick books that match your unique reading preferences, creating a customized reading journey just for you.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider-container mt-6 ml-6 mr-6 flex flex-col md:flex-row">
      <div className="slider-content w-full md:w-3/4">
        <Slider {...settings} afterChange={handleSlideChange}>
          {slides.map((slide, index) => (
            <div key={index} className="slider-slide">
              <img
                src={slide.image}
                alt={`Slide ${index}`}
                className="slider-image"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="slider-details w-full md:w-1/4  p-6">
        <div className="slider-details-inner">
          <h2 className="text-4xl font-bold mb-4 text-white">
            {slides[currentSlide].title}
          </h2>
          <p className="text-lg text-white font-montserrat font-bold mb-8">
            {slides[currentSlide].description}
          </p>
          <button className="ml-2 bg-[#F9A51A] text-[#000] font-medium text-sm px-6 py-3 rounded-md transition duration-300 hover:bg-blue-600">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sliders;
