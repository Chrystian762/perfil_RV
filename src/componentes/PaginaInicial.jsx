import ListaProdutos from "./ListaProdutos"
import '../assets/PaginaInicial.css'


function PaginaInicial (){

    const url ="https://media.istockphoto.com/id/682424694/photo/two-ping-pong-players-play-table-tennis.jpg?s=612x612&w=0&k=20&c=qlpSlztrH1FgsXcfjEDvnl6mL0kMIGt8RK6SorqUj9o=";

    return(
        <div>
            
            <p>Bem vindo à Wolf Table Tennis! </p>
            <img className="img" src={url} alt="Página Inicial" />
            <p>Aqui você encontra os melhores equipamentos de tênis de mesa e as melhores ofertas!</p>
          <ListaProdutos/> 
        </div>
    )
}
export default PaginaInicial