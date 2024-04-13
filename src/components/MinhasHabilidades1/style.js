import styled from "styled-components";

export const Container = styled.div`
     background-color: transparent;
     margin: 40px 0;
     display: flex;
     justify-content: space-around;
     justify-items: center;
     align-items: center;
   
     @media (max-width: 959px){
        display: flex;
        flex-direction: column;
        gap: 30px;
     }
`

export const H1 = styled.h1`
    text-align: center;
    color: #fff;
    font-size: 48px;
    padding: 30px 0;
    margin-bottom: 50px;

strong{
    color: #0e9094;
}

@media (max-width: 959px){
    font-size: 40px;
 }
`
export const iconHab = styled.div`
    background-color: #2b272746;
    width: 500px;
    font-size: 200px;
    color: #0e9094;
    text-align: center;
    border-radius: 30px;
    
.swiper-pagination{
    display: flex;
    justify-content: center;
}

@media (max-width: 959px){
    margin-top: 80px;
    width: 350px;
 }
`
