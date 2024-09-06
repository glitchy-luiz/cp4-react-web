
function Textoaside(props){
    return(
        <div className="textoaside">
            <h1 className="titconteudo">{props.titulo}</h1>
            <img className="imgcontato" src={props.icone1} alt="" />
            <img className="imgcontato" src={props.icone2} alt="" />
            <img className="imgcontato" src={props.icone3} alt="" />
        </div>
    )
}

export default Textoaside