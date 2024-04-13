import { Images } from "../../assets/Images/imagem";
import Icons from "../SobreMim/icons";
import * as S from "./style";
import { BsEnvelopeAtFill } from "react-icons/bs";

export default function Footer(){
    return(
        <S.Container>
            <S.Footer>
            <img src={Images.logo} />
            <Icons />
            </S.Footer>
            <S.linha></S.linha>
            <S.Email><BsEnvelopeAtFill className="BsEnvelopeAt"/> pedroluzzz28@gmail.com</S.Email>
        </S.Container>
        
    )
}