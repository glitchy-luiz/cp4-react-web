import Campotexto from "../Campotexto"

function Formulario(){
    return(
        <div className="formulario">
            <Campotexto nome='Nome:'/>
            <Campotexto nome='Email:'/>
            <h4>Mansegem:</h4>
            <textarea name="" id=""></textarea>
            <button>Enviar</button>
        </div>
    )
}

export default Formulario