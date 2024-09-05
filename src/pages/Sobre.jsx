import Apresentacao from "../componentes/Apresentacao"
import Plano from "../componentes/Plano"

function Sobre(){

    const infoscard=[
        {
            cor:'blue',
            titulo:'Individual',
            usuario:'1 usuário',
            texto:'10 videos',
            preco:'R$15',
            botao:'Cadastrar'
        }
    ]

    return(
        <>
            <Apresentacao titulo='Bem-vindo à revolução dos vídeos!' texto='Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores.' botao='Baixe o app' img='/img2.png'/>
            <Plano dados={infoscard}/>
        </>
    )
}

export default Sobre