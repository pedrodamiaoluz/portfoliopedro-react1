import * as S from "./style";

export default function Formulario(){
    return(
        
        <S.Form>
             <S.H1>Fale <strong>Comigo</strong></S.H1>
              <S.Formu>
                  <S.Input type="text" name="text1" id="" placeholder="Informe seu Nome" required/>
                  <S.Input type="email" name="" id="" placeholder="Informe seu email" required/>
                  <S.Input type="tel" name="" id="" placeholder="Informe seu telefone"/>
                  <S.Textarea name="" id="" cols="30" rows="10" placeholder="Mensagem" required></S.Textarea>
                  <S.Button className="button__contate-me">Enviar</S.Button>
              </S.Formu>
        </S.Form>

        
        
    )
}