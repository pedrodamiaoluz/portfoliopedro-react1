import Swiper from "../../pages/swiper";
import MeuPortifolio from "../MeuPortifolio";
import * as S from "./style";



export default function MinhasHabilidades(){
    return(
       
       <S.Container>
            <S.iconHab>
            <S.H1>Minhas <strong>Habilidades</strong></S.H1>
                <Swiper>
                     <div className="swiper-pagination"></div>
                </Swiper>
            </S.iconHab>  
            <MeuPortifolio />      
       </S.Container>
    )
}