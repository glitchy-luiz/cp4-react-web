
function Card ({dados}){
    return(
        <div className="todocard">
            {
                dados.map((pegaDados, index)=>(
                    <div className="card" style={{backgroundColor: pegaDados.color}}>
                        <h1 className="ncard">0{index + 1}</h1>
                        <img className="imgcard" src={pegaDados.img} alt="" />
                        <div className="contcard">
                            <h2>{pegaDados.subtitulo}</h2>
                            <p className="txtcard">{pegaDados.texto}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Card