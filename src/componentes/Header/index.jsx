import { Link } from "react-router-dom"

function Header (){
    return(
        <>
        <Link to='/'>Home</Link>
        <Link to='/sobre'>Sobre</Link>
        <Link to='/contato'>Contato</Link>
        </>
    )
}

export default Header