
import { IoMenu } from "react-icons/io5";
import { BsXLg } from "react-icons/bs";
import { useRef, useState } from "react";
import * as S from "./style";




export default function MenuMobile({menuMobileclick}){

       const menuHeaderRef = useRef(null)
       const [menuIsVisible, setMenuIsVisible] = useState(false)
       const onClick = () => setMenuIsVisible(!menuIsVisible)

    return(
        <>
           <S.Menu className="butabrirmenumob"><IoMenu/></S.Menu>
           <S.MenuMobile ref={menuHeaderRef}>
               <S.ButFechar><BsXLg onClick={onClick}/></S.ButFechar>
               
               <S.Nav>
                    <S.Ul>
                        <S.Li><S.A href="#topo_site">Inicio</S.A></S.Li>
                        <S.Li><S.A href="#sobre">Sobre</S.A></S.Li>
                        <S.Li><S.A href="#habilidade">Habilidades</S.A></S.Li>
                        <S.Li><S.A href="#projetos">Projetos</S.A></S.Li>
                        <S.Li><S.A href="#">Contato</S.A></S.Li>
                    </S.Ul>
                </S.Nav>
           </S.MenuMobile>
        </>
    )
}