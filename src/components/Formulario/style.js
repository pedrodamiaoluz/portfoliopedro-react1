
import styled from "styled-components"

export const Form = styled.div`

`

export const Formu = styled.form`
    max-width: 500px;
    width: 400px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`
export const Input = styled.input`
    width: 100%;
    background-color: #2b272746;
    border: none;
    outline: none;
    padding: 20px 15px;
    border-radius: 5px;
    font-size: 15px;
    color: #fff;

    @media (max-width: 959px){
       width: 90%;
    }
`

export const Textarea = styled.textarea`
    width: 100%;
    background-color: #2b272746;
    border: none;
    outline: none;
    padding: 20px 15px;
    border-radius: 5px;
    font-size: 15px;
    resize: none;
    height: 150px;
    color: #fff;

    @media (max-width: 959px){
       width: 90%;
    }
`

export const H1 = styled.h1`
   margin-top: 5rem;
   color: #fff;
   text-align: center;
   font-size: 48px;

strong{
    color: #0e9094;
}
`

export const Button = styled.button`
     background-color: #0e9094;
     margin-top: 30px;
     padding: 15px 40px;
     border: none;
     border-radius: 15px;
     font-weight: 800;
     font-size: 18px;
     cursor: pointer;
     transition: .2s;

&:hover{
    transform: scale(1.08);
    box-shadow: 0 0 8px #0e9094;
}
`