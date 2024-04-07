
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
         <S.H1>Meu <strong>Portifolio</strong></S.H1>
      <Swiper
         modules={[Navigation, Pagination, Scrollbar, A11y]}
         
         spaceBetween={50}
         slidesPerView={1}
         navigation
         pagination={{ clickable: true}}
         scrollbar={{ draggable: true }}
         onSwiper={(swiper) => console.log(swiper)}
         onSlideChange={() => console.log('slide change')}
      >
        {ArraySlide.map((item) => {
             return(
                <SwiperSlide>
                    <S.Img src={item.url} />
                </SwiperSlide>
             );
        })}
      </Swiper>
       </S.MeuPortifolio>
    )
}