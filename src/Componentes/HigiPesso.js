import Style from '../CSS/HigiPesso.module.css'
import Item from '../Componentes/Props';

import SaboLavanda from '../img/sabonete-lavanda.png';
import SaboEsfoliante from '../img/sabonete-esfoliante.png';
import SaboMelaleuca from '../img/sabonete-melaleuca.png';
import GelDental from '../img/gel-dental-dragon.png'

function HigiPesso (){
    return(

        <div className={Style.caixona}>
              <div className={Style.caixa}>
                <Item
                produto={SaboLavanda}
                oleo=' familia'
                preco='R$ 49,00'/>
                <Item
                produto={SaboEsfoliante}
                oleo=' familia'
                preco='R$ 49,00'/>
                <Item
                produto={SaboMelaleuca}
                oleo=' familia'
                preco='R$ 49,00'/>
                <Item
                produto={GelDental}
                oleo=' familia'
                preco='R$ 49,00'/>

            </div>
        </div>


    )
}

export default HigiPesso