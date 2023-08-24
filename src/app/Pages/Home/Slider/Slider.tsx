import { Carousel } from '@mantine/carousel';
import Autoplay, {
  AutoplayType,
  AutoplayOptionsType,
} from 'embla-carousel-autoplay'
import { MutableRefObject, useRef } from "react";

interface DataSlider {
  description: string;
  imageUrl: string;
  key: string;
  order: number;
  thumbnail: string;
  title: string;
  url: string;
}

function SliderComponent({dataSlider}: { dataSlider: Array<DataSlider> }) {
  const autoplay: MutableRefObject<AutoplayType> = useRef(Autoplay({delay: 3000}));
  console.log(dataSlider);
  return (
    <Carousel slideSize="10%" plugins={[autoplay.current]} onMouseEnter={autoplay.current.stop}
              onMouseLeave={autoplay.current.reset} height="100%" slideGap="md" controlsOffset="xs"
              controlSize={25} loop withIndicators>
      {dataSlider.map((item: DataSlider, index: number) => {
        return (
          <Carousel.Slide key={index}>
            <img src={item.thumbnail} alt=""/>
          </Carousel.Slide>
        )
      })}
    </Carousel>
  );
}

export default SliderComponent;
