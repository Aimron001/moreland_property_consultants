import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Land1 from '../assets/land1.jpg'
import Land2 from '../assets/land2.webp'
import Land3 from '../assets/land3.jpg'


const HeroCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
  };

  return (
    <div className="hero carousel-container">
      <Slider {...settings}>
        <div className="carousel-slide">
          <div className="image-container zoom">
            <img src={Land1} alt="Slide 1" />
            <div className="overlay">
              <h1>Lands/Plots for sale</h1>
              <p>We connect buyers and sellers. Whether you are selling your property or looking to own one..</p>
              <button>See More</button>
            </div>
          </div>
        </div>

        <div className="carousel-slide">
          <div className="image-container zoom">
            <img src={Land2} alt="Slide 2" />
            <div className="overlay">
              <h1>Our Services</h1>
            <p>Real Estate Agency, Property and asset valuation, project and development management ,...</p>
              <button>Explore</button>
            </div>
          </div>
        </div>

        <div className="carousel-slide">
          <div className="image-container zoom">
            <img src={Land3} alt="Slide 3" />
            <div className="overlay">
              <h1>Our Blog</h1>
              <p>Description for slide 3</p>
              <button>Contact Us</button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroCarousel;
