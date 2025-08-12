import Novidades from "./Novidades"
import "../assets/ProdutoDestaque.css"

function ProdutoDestaque (){

    const url ="https://imgs.casasbahia.com.br/1559191855/1xg.jpg?imwidth=500";

    return(
        <div>
            <h2>Produto Destaque</h2>
            <div className="cardDestaque">
                
                  <div className="faixa"></div>
                <img src={url} alt="Produto em Destaque" />
                <h2>Raq. profissional Butterfly </h2>
                <p></p>
            </div>

            <Novidades/>
        </div>
    )
}
export default ProdutoDestaque