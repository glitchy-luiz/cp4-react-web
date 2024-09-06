

function Plano ({dados}){
    return(
        <div className="todoplano">
            {
                dados.map((pegaDados)=>(
                    <div className="plano">
                        <div className="cordestaque" style={{backgroundColor: pegaDados.cor}}>
                            <h3>{pegaDados.titulo}</h3>
                        </div>
                        <p>{pegaDados.usuario}</p>
                        <p>{pegaDados.texto}</p>
                        <p>{pegaDados.preco}</p>

                        <p>{pegaDados.usuario2}</p>
                        <p>{pegaDados.texto2}</p>
                        <p>{pegaDados.preco2}</p>
                        <button style={{backgroundColor: pegaDados.cor}}>{pegaDados.botao}</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Plano