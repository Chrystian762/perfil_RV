function Hobbies(props){
    return(

        <div className="container_gosto">
            <img src={props.fotoH}  className="foto-gosto" />
            <h3>{props.hobbie}</h3>        
        </div>
    )
}
export default Hobbies