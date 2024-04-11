import * as S from "./style";

export default function Formulario(){
    return(
        
        <S.Form>
             <S.H1>Fala <strong>Comigo</strong></S.H1>
              <S.Formu>
                  <S.Input type="text" name="text1" id="" placeholder="Informe seu Nome"/>
                  <S.Input type="email" name="" id="" placeholder="Informe seu email"/>
                  <S.Input type="tel" name="" id="" placeholder="Informe seu telefone"/>
                  <S.Textarea name="" id="" cols="30" rows="10" placeholder="Mensagem"></S.Textarea>
                  <div className="button__contate-me"><input type="submit" value="Enviar" /></div>
              </S.Formu>
        </S.Form>

        
        
    )
}