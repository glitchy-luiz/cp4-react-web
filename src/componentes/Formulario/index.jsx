import Campotexto from "../Campotexto"

function Formulario(){
    return(
        <>
            <Campotexto nome='Nome:'/>
            <Campotexto nome='Email:'/>
            <h4>Mansegem:</h4>
            <textarea name="" id=""></textarea>
            <button>Enviar</button>
        </>
    )
}

export default Formulario