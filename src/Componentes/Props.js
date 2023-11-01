import Style from '../CSS/Props.module.css'

function Props({produto, oleo, preco,}){
    return(
        <div className={Style.caixona}>
            <div className={Style.imagem}>
                <img src={produto} alt='produto' />
            </div>

            <h3>{oleo}</h3>
            <h4>R$ {preco}</h4>
            <p>(ou em até 3x de R$17,00 sem juros)</p>
        </div>



    )
}

export default Props