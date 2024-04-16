
import { Images } from "../../assets/Images/imagem";
import MenuMobile from "./MenuMobile/menu";


import * as S from "./style";


export default function Header(){
    return(
        <S.Container>
                 <S.imagem 
                    src={Images.logo} alt="logo" 
                 />
              <nav>
                <S.ul>
                    <S.li><S.a href="#">Inicio</S.a></S.li>
                    <S.li><S.a href="#">Sobre</S.a></S.li>
                    <S.li><S.a href="#">Habilidades</S.a></S.li>
                    <S.li><S.a href="#">Projetos</S.a></S.li>
                </S.ul>
             </nav>
            <S.button href="">Contato</S.button>
            <MenuMobile></MenuMobile>
        </S.Container>
    )
}