import styled from "styled-components"

export const Container = styled.header`
    background-color: transparent;
    padding: 20px 2%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const imagem = styled.img`
   width: 100px;
`

export const ul = styled.ul`
   list-style-type: none;
`

export const li = styled.li`
   display: inline-block;
   padding: 20px;
`

export const a = styled.a`
   display: inline-block;
   text-decoration: none;
   font-weight: 700;
   color: #ffffff42;
   transition: .2s;

&:hover{
   color: #fff;
   transform: scale(1.03);
}
`

export const button = styled.a`
     background-color: #0e9094;
     padding: 10px 40px;
     color: #000;
     font-weight: 400;
     font-size: 18px;
     border: none;
     border-radius: 30px;
     text-decoration: none;
     transition: .2s;

&:hover{
   transform: scale(1.10);
   box-shadow: 0 0 8px rgb(57, 183, 214);
}
`