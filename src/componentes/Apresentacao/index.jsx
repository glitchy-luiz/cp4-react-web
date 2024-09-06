
function Apresentacao (props){
    return(
        <>
            <div className="apresentacao">
                <div className="textoapresentacao">
                    <h1 className="tituloapresentacao">{props.titulo}</h1>
                    <p className="descricaoapresentacao">{props.texto}</p>
                    <a className="btn" href="">{props.botao}</a>
                </div>
                <img className="imgapresentacao" src={props.img} alt="" />
            </div>
        </>
    )
}

export default Apresentacao