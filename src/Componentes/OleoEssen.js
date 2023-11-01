import Style from '../CSS/OleoEssen.module.css';
import Item from '../Componentes/Props';

import lavanda from '../img/oleoessen-lavanda.png';
import alecrim from '../img/oleoessen-alecrim.png';
import geranio from '../img/oleoessen-geranio.png';
import hortela_pimenta from '../img/oleoessen-hortelapimen.png'
import melaleuca from '../img/oleoessen-melaleuca.png'
import sandalo from '../img/oleoessen-sandalo.png'
import lavanda_bulgaria from '../img/oleoessen-lavanda-bulgaria.png'
import eucalipto from '../img/oleoessen-eucalipto.png'
import bergamota from '../img/oleoessen-bergamota.png'
import copaiba from '../img/oleoessen-copaiba.png'
import limaosici from '../img/oleoessen-limaosici.png'
import patchouli from '../img/oleoessen-patchouli.png'

function OleoEssen(){
    return(
        <div className={Style.caixona}>

            <div className={Style.caixa}>
                <Item
                produto={lavanda}
                oleo='Óleo Essencial de Lavanda (gt. França) - 10ml'
                preco='R$ 49,00'/>
                <Item
                produto={alecrim}
                oleo='Óleo Essencial de Alecrim (qt. Cineol) - 10ml'
                preco='R$ 49,00'/>
                <Item
                produto={geranio}
                oleo='Óleo Essencial de Gerânio -5ml'
                preco='R$ 49,00'/>
                <Item
                produto={hortela_pimenta}
                oleo='Óleo Essencial de Hortelã-Pimenta (Menta) - 10ml'
                preco='R$ 49,00'/>

                

            </div>

            <div className={Style.caixa}>
                <Item
                produto={melaleuca}
                oleo='Óleo Essencial de Melaleuca (Tea Tree) - 10ml'
                preco='R$ 49,00'/>
                <Item
                produto={sandalo}
                oleo='Óleo Essencial de Sândalo Amyris - 5ml'
                preco='R$ 49,00'/>
                <Item
                produto={limaosici}
                oleo='Óleo Essencial de Limão Siciliano - 10ml'
                preco='R$ 49,00'/>
                <Item
                produto={eucalipto}
                oleo='Óleo Essencial de Eucalipto Globulus - 10ml'
                preco='R$ 49,00'/>

                

            </div>

            <div className={Style.caixa}>
                <Item
                produto={bergamota}
                oleo='Óleo Essencial de Bergamota - 5ml'
                preco='R$ 49,00'/>
                <Item
                produto={copaiba}
                oleo='Óleo Essencial de Copaíba - 10ml'
                preco='R$ 49,00'/>
                <Item
                produto={lavanda_bulgaria}
                oleo='Óleo Essencial de Lavanda (gt. Bulgária) - 10ml'
                preco='R$ 49,00'/>
                <Item
                produto={patchouli}
                oleo='Óleo Essencial de Patchouli - 5ml'
                preco='R$ 49,00'/>

                

            </div>

        </div>

        
        


    )
}

export default OleoEssen
