
import styled from "styled-components";

export const Footer = styled.div`
   display : flex;
   justify-content: space-between;
   align-items: center;
`
export const Container = styled.div`
    background-color: transparent;
    /*box-shadow: 0 0 40px 10px #e0decb18;*/
    padding: 30px 2rem;
`

export const  linha = styled.div`
   border: 1px solid #0e9094;
`

export const  Email = styled.p`
   color: #fff;
   padding: 20px 0;
   font-size: 20px;
   display: flex;
   align-items: center;
   gap: 8px;

   .BsEnvelopeAt{
      color: #0e9094;
      font-size: 50px;
   }
`