
import "./equipos.css"
import Colaborador from "../colaborador/colaborador"

import hexToRgba from "hex-to-rgba";

const Equipo =(props)=>{

    //destructuracion 
    const {colorPrimario, colorSecundario, titulo, id}=props.datos
    const {colaboradores, eliminarC, actualizarColor, like}=props 

    const obj={
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    const estiloTitulo={borderColor:colorPrimario}

    return <> {
        colaboradores.length>0 && 
     <section className="equipo" style={obj}>
        <input className="input-color"
            type="color"
            value={colorPrimario}
            onChange={(evento)=>{
                actualizarColor(evento.target.value, id)
            }}
        />
        
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
            {
                colaboradores.map((colabora, index)=><Colaborador 
                    datos={colabora} 
                    key={index} 
                    colorPrimario={colorPrimario}
                    eliminarC={eliminarC}
                    like={like}
                />)
            }
        </div>
        </section>
    }
    </>
}

export default Equipo;

