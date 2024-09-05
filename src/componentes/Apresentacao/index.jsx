
function Apresentacao (props){
    return(
        <>
            <h1>{props.titulo}</h1>
            <p>{props.texto}</p>
            <a href="">{props.botao}</a>
            <img src={props.img} alt="" />
        </>
    )
}

export default Apresentacao