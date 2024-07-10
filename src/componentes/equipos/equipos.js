

import "./equipos.css"
import Colaborador from "../colaborador/colaborador"

const Equipo =(props)=>{

    //destructuracion 
    const {colorPrimario, colorSecundario, titulo}=props.datos
    const {colaboradores}=props 

    const obj={
        backgroundColor: colorSecundario
    }

    console.log(colaboradores.length>0);

    const estiloTitulo={borderColor:colorPrimario}

    return <> {colaboradores.length>0 && 
    
     <section className="equipo" style={obj}>
        
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className="colaboradores">
            {
                colaboradores.map((colabora, index)=><Colaborador 
                    datos={colabora} 
                    key={index} 
                    colorPrimario={colorPrimario}
                />)
            }
        </div>

        </section>
    }
    </>
}

export default Equipo;

