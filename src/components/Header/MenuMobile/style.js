
import styled from "styled-components" 

export const Menu = styled.div`
    color: #0e9094;
    font-size: 40px;
`

export const MenuMobile = styled.div`
    background-color: red;
    height: 100vh;
    position: fixed;
    top: 0px;
    right: 0px;
    z-index: 2000;
    width: 0%;
    overflow: hidden;
    transition: .2s;

    .abrir_menu{
    width: 70%;
}
`

export const ButFechar = styled.div`
   color:#fff;
`

export const Nav = styled.nav`
text-align: right;
`
export const Ul = styled.ul`
text-align: right;
`
export const Li = styled.li`
display: block;
padding: 10px;
`

export const A = styled.a`
color: #e0decb;
font-size: 20px;
font-weight: 400;
padding: 20px 8%;
display: block;
transition: .5s;
`

/*let butmenu = document.getElementById('butabrirmenumob')
let menumobile = document.getElementById('menumobile')
let overlay = document.getElementById('overlay-menu-mob')



butmenu.addEventListener('click', ()=>{
    menumobile.classList.add('abrir_menu')
})

menumobile.addEventListener('click', ()=>{
    menumobile.classList.remove('abrir_menu')
})*/

/*overlay.addEventListener('click', ()=>{
    menumobile.classList.remove('abrir_menu')
})*/