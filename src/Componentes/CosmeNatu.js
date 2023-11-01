import Style from '../CSS/CosmeNatu.module.css'
import Item from '../Componentes/Props';

import seiva from '../img/seiva-sanguededragon.png';
import ArgilaBranca from '../img/argila-branca.png';
import ArgilaVerde from '../img/argila-verde.png';
import ArgilaAmarela from '../img/argila-amarela.png'

function CosmeNatu (){
    return(

        <div className={Style.caixona}>
              <div className={Style.caixa}>
                <Item
                produto={seiva}
                oleo=' familia'
                preco='R$ 49,00'/>
                <Item
                produto={ArgilaBranca}
                oleo=' familia'
                preco='R$ 49,00'/>
                <Item
                produto={ArgilaVerde}
                oleo=' familia'
                preco='R$ 49,00'/>
                <Item
                produto={ArgilaAmarela}
                oleo=' familia'
                preco='R$ 49,00'/>

            </div>
        </div>


    )
}

export default CosmeNatu