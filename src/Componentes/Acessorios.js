import Style from '../CSS/Acessorios.module.css'
import Item from '../Componentes/Props';

import SacolaRoxa from '../img/sacola-roxa.png';
import necessaire from '../img/necessaire.png';
import necessarieCru from '../img/necessarie-cor-cru.png';
import SacolaAmarela from '../img/sacola-phytoterapica-g.png';

function Acessorios (){
    return(

        <div className={Style.caixona}>
              <div className={Style.caixa}>
                <Item
                produto={SacolaRoxa}
                oleo=' familia'
                preco='R$ 49,00'/>
                <Item
                produto={necessaire}
                oleo=' familia'
                preco='R$ 49,00'/>
                <Item
                produto={necessarieCru}
                oleo=' familia'
                preco='R$ 49,00'/>
                <Item
                produto={SacolaAmarela}
                oleo=' familia'
                preco='R$ 49,00'/>

            </div>
        </div>


    )
}

export default Acessorios