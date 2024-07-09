

import "./equipos.css"
import Colaborador from "../colaborador/colaborador"

const Equipo =(props)=>{

    //destructuracion 
    //hacer la declaracion de manera separada 
    //const colorPrimario= props.datos.colorPrimario
    //const colorSecundario =props.datos.colorSecundario
    
    //otra forma
    const {colorPrimario, colorSecundario, titulo}=props
    const {colaboradores}=props // Aquí se corrige la nomenclatura

    const obj={
        backgroundColor: colorSecundario
    }

    const estiloTitulo={borderColor:colorPrimario}

    return <section className="equipo" style={obj}>
        
        <h3 style={{estiloTitulo}}>{titulo}</h3>
        <div className="colaboradores">
            {
                colaboradores.map((colabora, index)=><Colaborador datos={colabora} key={colabora.nombre}/>)
            }
        </div>


    </section>
}

export default Equipo;

