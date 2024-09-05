
function Card ({dados}){
    return(
        <>
            {
                dados.map((pegaDados, index)=>(
                    <div className="card" style={{backgroundColor: pegaDados.color}}>
                        <h1>{index + 1}</h1>
                        <img src={pegaDados.img} alt="" />
                        <h2>{pegaDados.subtitulo}</h2>
                        <p>{pegaDados.texto}</p>
                    </div>
                ))
            }
        </>
    )
}

export default Card