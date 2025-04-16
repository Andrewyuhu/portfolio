import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { type OutputImage } from "../utils/loadImages";

export interface ImageCarouselProps {
  images: OutputImage[];
}

const responsive = {
  superLargeDesktop: {
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

function ImageCarousel({ images }: ImageCarouselProps) {
  return (
    <Carousel responsive={responsive} className="carousel">
      {images.map((i) => (
        <img src={i.src} alt={i.alt} key={i.src} className="carousel-img"></img>
      ))}
    </Carousel>
  );
}

export default ImageCarousel;
