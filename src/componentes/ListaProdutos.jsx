import ProdutoDestaque from "./ProdutoDestaque" 
import '../assets/ListaProdutos.css'

function ListaProdutos (){

    return(
        <div>
            <div className="cardsLista">

                    <div className="cardProduto">
                        <div className="faixa"></div>
                        <img src="https://cdn.awsli.com.br/800x800/837/837399/produto/219390843b30e4e1c91.jpg" alt="raquete" />
                        <h2>Raq. Butterfly</h2>
                        <div className="preco"><h3>R$ 850,00</h3></div>
                    </div>

                    <div className="cardProduto">
                        <div className="faixa"></div>
                        <img src="https://esportesexpress.com.br/media/catalog/product/cache/d27d2a17979f79ea285678bb24e3a247/M/e/Mesa_de_Tenis_de_Mesa_Oficial_Proton_MDF_25mm_Klopf_000_1.jpg" alt="mesa" />
                        <h2>Mesa Wolf</h2>
                        <div className="preco"><h3>R$ 1550,00</h3></div>

                    </div>

                    <div className="cardProduto">
                        <div className="faixa"></div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvQCCb_QvUcgy10-xmCRhCBWeMyb6szYVWVA&s" alt="bola" />
                        <h2>Bola Butterfly</h2>
                        <div className="preco"><h3>R$ 38,99</h3></div>
                    </div>
                    
                    <div className="cardProduto">
                        <div className="faixa"></div>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSk2kgsysK6-IiJMNRHVT2AKF8lZttWHPOf7lKoi7AdwAuJUyqLBFP-OD3mX7tPOoRyOI&usqp=CAU" alt="borracha" />
                        <h2>Borracha Hu.</h2>
                        <div className="preco"><h3>R$ 320,00</h3></div>
                    </div>

            </div>
            <ProdutoDestaque/> 
        </div>
    )         
}
export default ListaProdutos