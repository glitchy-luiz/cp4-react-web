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
        },
        {
            titulo:'Profissinal - Times',
            usuario:'1-10 usuáriow',
            texto:'Vídeos ilimitados',
            preco:'R$40',
            usuario2:'+10 usuários',
            texto2:'Vídeos ilimitados',
            preco2:'R$20',
            botao:'Cadastrar'
        },
        {
            titulo:'Corporativos',
            botao:'Entre em contato'
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