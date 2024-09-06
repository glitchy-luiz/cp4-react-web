import Campotexto from "../Campotexto"

function Formulario(){
    return(
        <div className="formulario">
            <Campotexto nome='Nome:'/>
            <Campotexto nome='Email:'/>
            <h4 className="nomecampo">Mensagem:</h4>
            <textarea className="areacampo" name="" id=""></textarea>
            <br/>
            <button className="btnform">Enviar</button>
        </div>
    )
}

export default Formulario