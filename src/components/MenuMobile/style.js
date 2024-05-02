import styled from "styled-components";

export const  MemuContainer = styled.div`
.butabrirmenumob{
      color: #0e9094;
      font-size: 40px;
  }
  
  .MenuMobile{
      background-color: #000;
      width: 0%;
      height: 100vh;
      position: fixed;
      top: 0px;
      right: 0px;
      z-index: 2000;
      overflow: hidden;
      transition: .2s;
  }
  
  .MenuMobile.abrir_menu{
      width: 70%;
  }
  
  .ButFechar{
     color: #0e9094;
     font-size: 30px;
     padding-top: 1rem;
     padding-left: 1rem;
  }
  
  
  nav{
     margin-top: 5rem;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     justify-items: center;
  }
  
  ul{
      text-align: center;
  } 
  
  li{
  display: block;
  padding: 10px;
  transition: .5s;
  
  
  &:hover{
      background-color: #0e9094;
  }
  }
  
  a{
  text-decoration: none;
  color: #e0decb;
  font-size: 20px;
  font-weight: 600;
  padding: 20px 8%;
  display: block;
  transition: .5s;
  }
`

let butmenu = document.getElementById('butabrirmenumob')
let menumobile = document.getElementById('MenuMobile')



butmenu.addEventListener('submit', ()=>{
    menumobile.classList.add('abrir_menu')
})

menumobile.addEventListener('submit', ()=>{
    menumobile.classList.remove('abrir_menu')
})

