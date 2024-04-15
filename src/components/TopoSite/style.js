import styled from "styled-components";


export const Container = styled.div`
    height: 70vh;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 959px){
      margin: 30% 0;
      display: flex;
      flex-direction: column-reverse;
   }

   @media (max-width: 480px){
      margin: 20px 0;
   }
` 

export const conteudo = styled.div`
    background-color: #2b272746;
    color: #0e9094;
    border-radius: 30px;
    padding: 50px 40px;

    @media (max-width: 959px){
      margin-top: 50px;
      padding: 20px 2%;
   }
` 
export const h1 = styled.h1`
   text-align: center;
   font-size: 50px;
   font-weight: 700;

   @media (max-width: 959px){
      font-size: 40px;
   }
`

export const p = styled.p`
    text-align: center;
    line-height: 20px;
    font-size: 40px;

    @media (max-width: 959px){
      font-size: 25px;
   }
`

export const imagempedro = styled.img`
     border-radius: 20px;
     position: relative;
     animation: flutuar 2s ease-in-out infinite alternate;

@keyframes flutuar{
    0%{
        top: 0;
    }
    100%{
        top: 30px;
    }

}


`