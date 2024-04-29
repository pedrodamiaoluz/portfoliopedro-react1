import Header from "../../components/Header";
import * as ST from "./style";
import MenuMobile from "../../components/MenuMobile/menu";

export default function Home(){
    return(
        <>
          <ST.Container>
              <Header />
              <MenuMobile />
          </ST.Container>
        </>
    )
}