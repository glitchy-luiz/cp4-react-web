import Formulario from "../componentes/Formulario"
import Textoaside from "../componentes/Textoaside"


function Contato(){
    return(
        <>
            <Textoaside titulo='Dúvidas e suporte, entre em contato:' icone1='/twitter.png' icone2='/instagram.png' icone3='/discord.png'/>
            <Formulario/>
        </>
    )
}

export default Contato