import Style from '../CSS/Sinergia.module.css'
import Item from '../Componentes/Props';

import relax from '../img/compessen-relax.png';
import equilibrium from '../img/compessen-equilibrium.png';
import citrino from '../img/compessen-citrinos.png';
import defense from '../img/compessen-defense.png'

function Sinergia (){
    return(

        <div className={Style.caixona}>
              <div className={Style.caixa}>
                <Item
                produto={relax}
                oleo=' familia'
                preco='R$ 49,00'/>
                <Item
                produto={equilibrium}
                oleo=' familia'
                preco='R$ 49,00'/>
                <Item
                produto={citrino}
                oleo=' familia'
                preco='R$ 49,00'/>
                <Item
                produto={defense}
                oleo=' familia'
                preco='R$ 49,00'/>

            </div>
        </div>


    )
}

export default Sinergia