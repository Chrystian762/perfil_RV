function Pessoa(props){
    return(
        <div className="container">
           <img src={props.foto} alt={props.nome} className="foto-perfil" />
            <div className="info">
                <h2>Perfil Pessoal</h2>
                <h3>Nome:{props.nome}</h3>
                
                <div className="idd">
                    <p>Idade:{props.idade}</p>
                    <p>Contato: {props.contato}</p>
                </div>

                <div className="idd">
                    <p>Profissão: {props.profissao}</p>
                    <p>Cidade:{props.cidade}</p>
                </div>
            </div>
        </div>
    )
}
export default Pessoa