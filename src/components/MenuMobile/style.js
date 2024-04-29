import styled, {css} from "styled-components";
import { useState, useEffect} from "react";

export const menuMobileclick = (el, initialState) => {

    const [menuIsVisible, setMenuIsVisible] = useState(initialState);

  
   useEffect(() => {
      const onClick = e => {
       if(el.current !== null && !el.current.contains(e.target)){
           setMenuIsVisible(!menuIsVisible);
       }

      }

      if(menuIsVisible){
        window.addEventListener("Click", onClick)
      }

      return () => {
        window.removeEventListener("Click", onClick)
      }
   }, [menuIsVisible, el]);

   return [menuIsVisible, setMenuIsVisible]
}

export const Menu = styled.div`
    color: #0e9094;
    font-size: 40px;
`

export const MenuMobile = styled.div`
    background-color: #000;
    width: 70%;
    height: 100vh;
    position: fixed;
    top: 0px;
    right: 0px;
    z-index: 2000;
    overflow: hidden;
    transition: .2s;

opacity: 0;
pointer-events: none;

${({menuIsVisible}) => menuIsVisible && css`
opacity: 1;
 pointer-events: auto;
`}
`

export const ButFechar = styled.div`
   color: #0e9094;
   font-size: 30px;
   padding-top: 1rem;
   padding-left: 1rem;
`

export const Nav = styled.nav`
   margin-top: 5rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   justify-items: center;
   
`

export const Ul = styled.ul`
text-align: center;

`

export const Li = styled.li`
display: block;
padding: 10px;
transition: .5s;


&:hover{
    background-color: #0e9094;
}
`

export const A = styled.a`

text-decoration: none;
color: #e0decb;
font-size: 20px;
font-weight: 600;
padding: 20px 8%;
display: block;
transition: .5s;
`
