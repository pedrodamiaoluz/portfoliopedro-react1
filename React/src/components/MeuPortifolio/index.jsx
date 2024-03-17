
import * as S from "./style"
import { Images } from "../../assets/Images/imagem"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

export default function MeuPortifolio(){
 const ArraySlide = [
        {
         id: 0,
            url: Images.proj1,
        },

        {
         id: 1,
            url: Images.proj2,
        },

        {
         id: 2,
         url: Images.proj3,
        },

 ];

    return(
       <S.MeuPortifolio>
      <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
         autoplay={{delay: 4000}}
         spaceBetween={50}
         slidesPerView={1}
         pagination={{ clickable: true}}
         onSwiper={(swiper) => console.log(swiper)}
      >
        {ArraySlide.map((item) => {
             return(
                <SwiperSlide>
                    <img src={item.url} />
                </SwiperSlide>
             );
        })}
      </Swiper>
       </S.MeuPortifolio>
    )
}