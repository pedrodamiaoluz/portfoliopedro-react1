import { Images } from "../../assets/Images/imagem";
import * as S from "./style";


export default function TopoSite(){
    return(
        <S.Container>
           <S.conteudo>
                 <S.h1>PEDRO DAMIÃO</S.h1>
                 <S.p>DESENVOLVEDOR FRONT-END</S.p>
           </S.conteudo>
           <S.imagempedro 
             src={Images.pedro} alt="" 
           />
        </S.Container>
               
    )
}