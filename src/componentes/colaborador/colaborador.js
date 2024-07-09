

import "./colaborador.css"

const Colaborador =(props)=>{
    const {dnombre, dpuesto, dfoto, dequipo}=props.datos
    return <div className="colaborador">
        <div className="encabezado">
            <img  src={dfoto} alt={dnombre}/>
        </div>

        <div className="info">
            <h4>{dnombre}</h4>
            <h5>{dpuesto}</h5>
        </div>

    </div>
}

export default Colaborador;

