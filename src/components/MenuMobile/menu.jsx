import "../MenuMobile/index.css"
import { IoMenu } from "react-icons/io5";
import { BsXLg } from "react-icons/bs";
import "../MenuMobile/style"

export default function MenuMobile(){



    return(
        <>
           
               <div className="butabrirmenumob"><IoMenu/></div>
               <div className="MenuMobile" >
                   <div className="ButFechar"><BsXLg /></div>
               
                   <nav>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Habilidades</a></li>
                        <li><a href="#">Projetos</a></li>
                    </ul>
                 </nav>
               </div>
           
        </>
    )
}