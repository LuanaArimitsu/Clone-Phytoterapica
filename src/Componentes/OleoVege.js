import Style from '../CSS/OleoVege.module.css';
import Item from '../Componentes/Props';

import RosaMosqueta from '../img/oleovege-rosamosq.png';
import SementeDeUva from '../img/oleovege-sementedeuva.png';
import jojoba from '../img/oleovege-jojoba.png';
import abacate from '../img/oleovege-abacate.png'
import camomila from '../img/oleovege-camomila.png'
import girassol from '../img/oleovege-girassol.png'
import maracuja from '../img/oleovege-maracuja.png'
import rollon from '../img/oleovege-rollon.png'
import sementeDeUva from '../img/oleovege-sementeuvagrande.png'
import rosaMosqueta from '../img/oleovege-rosamosqrosa.png'
import amendoa from '../img/oleovege-amendoadoce.png'
import copaiba from '../img/oleovege-copaibag.png'

function OleoVege(){
    return(
        <div className={Style.caixona}>

            <div className={Style.caixa}>
                <Item
                produto={RosaMosqueta}
                oleo=' familia'
                preco='R$ 49,00'/>
                <Item
                produto={SementeDeUva}
                oleo=' familia'
                preco='R$ 49,00'/>
                <Item
                produto={jojoba}
                oleo=' familia'
                preco='R$ 49,00'/>
                <Item
                produto={abacate}
                oleo=' familia'
                preco='R$ 49,00'/>

                

            </div>

            <div className={Style.caixa}>
                <Item
                produto={camomila}
                oleo=' familia'
                preco='R$ 49,00'/>
                <Item
                produto={girassol}
                oleo=' familia'
                preco='R$ 49,00'/>
                <Item
                produto={maracuja}
                oleo=' familia'
                preco='R$ 49,00'/>
                <Item
                produto={rollon}
                oleo=' familia'
                preco='R$ 49,00'/>

                

            </div>

            <div className={Style.caixa}>
                <Item
                produto={sementeDeUva}
                oleo=' familia'
                preco='R$ 49,00'/>
                <Item
                produto={rosaMosqueta}
                oleo=' familia'
                preco='R$ 49,00'/>
                <Item
                produto={amendoa}
                oleo=' familia'
                preco='R$ 49,00'/>
                <Item
                produto={copaiba}
                oleo=' familia'
                preco='R$ 49,00'/>

                

            </div>

        </div>

        
        


    )
}

export default OleoVege
