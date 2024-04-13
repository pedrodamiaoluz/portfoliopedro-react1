import { FaFacebook, FaLinkedin, FaInstagram, FaDiscord} from "react-icons/fa";
import * as S from "./style";
export default function Icons(){
    return(
        <S.icons>
            <S.icon href=""><FaFacebook /></S.icon>
            <S.icon href=""><FaLinkedin /></S.icon>
            <S.icon href=""><FaInstagram /></S.icon>
            <S.icon href=""><FaDiscord /></S.icon>
        </S.icons>
    )
}