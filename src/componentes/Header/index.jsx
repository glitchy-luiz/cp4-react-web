import { Link } from "react-router-dom"

function Header (){
    return(
        <>
        <div className="header">
            <Link className="link" to='/'>Home</Link>
            <Link className="link" to='/sobre'>Sobre</Link>
            <Link className="link" to='/contato'>Contato</Link>
        </div>
        </>
    )
}

export default Header