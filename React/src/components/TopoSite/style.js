import styled from "styled-components";


export const Container = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    
` 

export const conteudo = styled.div`
    background-color: #25242473;
    color: #0e9094;
    border-radius: 30px;
    padding: 60px 40px;
` 
export const h1 = styled.h1`
   text-align: center;
   font-size: 50px;
   font-weight: 700;
`

export const p = styled.p`
    text-align: center;
    line-height: 20px;
    font-size: 40px;
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