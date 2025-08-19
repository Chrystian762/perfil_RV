function Filmes(props){
    return(
        
        <div className="container_gosto">
            <img src={props.fotoF}  className="foto-gosto" />
            <h3>{props.filme}</h3>        
        </div>
    )
}
export default Filmes