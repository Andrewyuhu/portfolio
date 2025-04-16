import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ImageCarousel() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const imagePath1 = new URL(`../assets/talky-main.png`, import.meta.url).href;
  const imagePath2 = new URL(`../assets/talky-convo.png`, import.meta.url).href;
  return (
    <Carousel responsive={responsive} className="carousel">
      <img src={imagePath1} alt="image" className="carousel-img"></img>
      <img src={imagePath2} alt="image" className="carousel-img"></img>
    </Carousel>
  );
}

export default ImageCarousel;
