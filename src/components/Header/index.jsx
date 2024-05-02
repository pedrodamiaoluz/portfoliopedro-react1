import "../Header/index.css"
import { Images } from "../../assets/Images/imagem";
import { IoMenu } from "react-icons/io5";
import { BsXLg } from "react-icons/bs";
import * as S from "./style";
import { useEffect, useState } from "react";



export default function Header(){
       const [isOpem, setIsOpen] = useState(false)

       const toggleMenu = () => {
          setIsOpen((open) => !open);
       };
       

       useEffect(() => {
          document.body.style.overflowY = isOpem ? 'hidden' : 'auto';
       }, [isOpem]);

    return(
        <>
            <S.Container>
                     <img
                        src={Images.logo} alt="logo"
                     />
                  <nav className={`navegetion ${isOpem ? "is-open" : ""}`}>
                  <div className="bottonFechar" onClick={toggleMenu}><BsXLg /></div>
                    <ul className="nav_style">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Habilidades</a></li>
                        <li><a href="#">Projetos</a></li>
                    </ul>
                 </nav>
                <div className="button0">
                    <a className="button" href="">Contato</a>
                </div>
                <div className="butabrirmenumob" onClick={toggleMenu}><IoMenu/></div>
                
            </S.Container>      
        </>
    )
}