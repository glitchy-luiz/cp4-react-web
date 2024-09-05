import Apresentacao from "../componentes/Apresentacao"
import Card from "../componentes/Card"
import Header from "../componentes/Header"

function Home(){

    const social = [
        {
            img:'',
            subtitulo:'Youtube',
            texto:'Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.',
            color:'red'
        },
        {
            img:'',
            subtitulo:'Tiktok',
            texto:'Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.',
            color:'yellow'
        },
        {
            img:'',
            subtitulo:'Facebook',
            texto:'Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.',
            color:'lightblue'
        },
        {
            img:'',
            subtitulo:'Instagram',
            texto:'Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.',
            color:'blue'
        },
    ]

    return(
        <>
            <Apresentacao titulo='Crie seus vídeos online' texto='Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.' botao='Começar agora!' img='/img1.png'/>
            <Card dados={social}/>
        </>
    )
}

export default Home