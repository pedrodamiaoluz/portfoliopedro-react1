import { BsFiletypeHtml, BsFiletypeCss} from "react-icons/bs";
import { RiJavascriptLine } from "react-icons/ri";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      autoplay={{delay: 4000}}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <BsFiletypeHtml />        
      </SwiperSlide>
      <SwiperSlide>
        <BsFiletypeCss />
      </SwiperSlide>
      <SwiperSlide>
        <RiJavascriptLine />
      </SwiperSlide>
    </Swiper>
  );
};