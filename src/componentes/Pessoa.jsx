function Pessoa(props){
    return(
        <div>
            <h2>Perfil Pessoal</h2>
            <img src={props.foto} alt={props.nome} />
            <h3>Nome:{props.nome}</h3>
            <p>Idade:{props.idade}</p>
            <p>Profissão: {props.profissao}</p>
        </div>
    )
}
export default Pessoa