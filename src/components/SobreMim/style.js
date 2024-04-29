import styled from "styled-components";

export const conteudo = styled.div`
    background-color: transparent;
    height: 70vh;
    margin: 30px;
    padding: 20px 2%;

    @media (max-width: 959px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        justify-items: center;
        
     }
`
export const Titulo = styled.h2`
    text-align: center;
    font-size: 40px;
    font-weight: bold;
    color: #fff;
    padding-bottom: 30px;

strong{
    color: #0e9094;
}

@media (max-width: 480px){
   margin-top: 20px;
}
`

export const H3 = styled.h3`
    text-align: center;
    font-size: 25px;
    font-weight: bold;
    color: #fff;

strong{
    color: #0e9094;
    font-weight: bold;
}

@media (max-width: 959px){
      font-size: 18px;
   }
`

export const p = styled.p`
    color: #fff;
    text-align: justify;
    padding: 10px 8rem;
    font-size: 18px;

    @media (max-width: 959px){
      width: 300px;
      font-size: 16px;
      padding: 20px 2%;
   }
`

export const icons = styled.div`
     font-size: 30px;
     display: flex;
     justify-content: center;
     gap: 10px;
`

export const icon = styled.a`
     margin: 10px 0;
     text-align: center;
     color: #0e9094;
     border-radius: 30px;
     transition: .2s;
    
&:hover{
    transform: scale(1.10);
}
`



