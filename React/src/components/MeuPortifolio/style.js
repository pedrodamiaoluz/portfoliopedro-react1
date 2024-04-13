import styled from "styled-components";

export const MeuPortifolio = styled.div`
    background-color: #2b272746;
    width: 500px;
    font-size: 200px;
    color: #0e9094;
    text-align: center;
    border-radius: 30px;

    @media (max-width: 959px){
        width: 350px;
   }
`

export const H1 = styled.h1`
  font-size: 48px;
  color: #fff;
  padding: 30px 0;

  strong{
    color: #0e9094;
  }
`

export const Img = styled.img`
   background-color: #25242473;
   width: 80%;
   height: 80vh;
   border-radius: 15px;

   @media (max-width: 959px){
    height: 70vh;

 }
`

export const P = styled.p`
  padding: 20px 2rem;
  font-size: 28px;
  font-weight: 400;
  color: #fff;
`

export const Link = styled.a`
  font-size: 28px;
  color: #fff;
  text-decoration: none;
  font-weight: 700;

&:hover{
   border-bottom: 5px solid #0e9094;
   border-radius: 2px;
}
`
