import {useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Caruosel = () => {
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
            "https://i.ibb.co/DRYNcp0/photo-1520137422827-6253b606667b-auto-format-fit-crop-q-60-blend-000000-blend-alpha-10-blend-mode-no.jpg",
          title: "Book Reads",
          description:
            "Discover the joy of reading like never before with our 'Personalized Reading Recommendations' service. We use advanced algorithms and insights into your unique reading preferences to curate a handpicked selection of books that are a perfect fit for you.",
        },
        {
          image:
            "https://i.ibb.co/S6sNKN7/photo-1437572848259-df63caa1a552-auto-format-fit-crop-q-60-blend-000000-blend-alpha-10-blend-mode-no.jpg",
          title: "Book Adventure",
          description:
            'Discover Your Next Book Adventure" is a unique and personalized book discovery service that helps you embark on a literary journey like never before. We use advanced algorithms and expert recommendations to curate a selection of books tailored to your individual preferences and reading habits.',
        },
        {
          image:
            "https://i.ibb.co/ZTPhPhd/photo-1527285286036-1ae743926077-auto-format-fit-crop-q-60-blend-000000-blend-alpha-10-blend-mode-no.jpg",
            "service_name": "Book Subscription Box",
          title: " Journey Reads",
          description:
            "Journey Through Curated Reads is a book store website service that takes you on a personalized literary adventure. Our expert curators handpick books that match your unique reading preferences, creating a customized reading journey just for you.",
        },
      ];
    
      const [currentSlide, setCurrentSlide] = useState(0);
    
      const handleSlideChange = (index) => {
        setCurrentSlide(index);
      };
    
      return (
        <div className="slider-container text-white bg-green-900 mt-6 ml-6 mr-6 flex flex-col md:flex-row">
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
            </div>
          </div>
        </div>
      );
    };
    
export default Caruosel;