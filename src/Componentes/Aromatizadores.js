import Style from '../CSS/Aromatizadores.module.css'
import Item from '../Componentes/Props';

import tulipa from '../img/aromatizador-tulipa.png';
import ArvoreDaVida from '../img/sabonete-esfoliante.png';
import cuia from '../img/aromatizador-cuia.png';
import mandala from '../img/colar-mandala.png'

function Aromatizadores (){
    return(

        <div className={Style.caixona}>
              <div className={Style.caixa}>
                <Item
                produto={tulipa}
                oleo=' familia'
                preco='R$ 49,00'/>
                <Item
                produto={ArvoreDaVida}
                oleo=' familia'
                preco='R$ 49,00'/>
                <Item
                produto={cuia}
                oleo=' familia'
                preco='R$ 49,00'/>
                <Item
                produto={mandala}
                oleo=' familia'
                preco='R$ 49,00'/>

            </div>
        </div>


    )
}

export default Aromatizadores


