
import * as S from "./style"
import { Images } from "../../assets/Images/imagem"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

export default function MeuPortifolio(){
 
   const ArraySlide = [
      {
         id: 0,
         url: Images.proj1,
         labelAll: "Projeto Sobre as Redes Sociais",
         Link: "Projeto 1",
      },
  
      {
       id: 1,
          url: Images.proj2,
          labelAll: "Projeto Sobre Calculadora de Gorjetas",
          Link: "Projeto 2",
      },
  
      {
         id: 2,
         url: Images.proj3,
         labelAll: "Projeto Sobre Mapa Clima",
         Link: "Projeto 3",
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
         onSwiper={(swiper) => console.log(swiper)}
         onSlideChange={() => console.log('slide change')}
      >
        {ArraySlide.map((item) => {
             return(
                <SwiperSlide>
                    <S.Img src={item.url} />
                       <S.P>{item.labelAll}<br/><br/>
                       <S.Link href="">{item.Link}</S.Link>
                       </S.P>
                </SwiperSlide>
             );
        })}
      </Swiper>
       </S.MeuPortifolio>
    )
}