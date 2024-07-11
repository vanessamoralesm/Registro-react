import "./formulario.css"
import Campo from "../campo/Campo";
import ListaOpciones from "../listaOpciones/listaOpciones";
import Boton from "../boton/boton";
import Equipo from "../equipos/equipos";
import { useState } from "react";

const Formulario =(props) =>{
    const [nombre, actualizarNombre]=useState("")
    const [puesto, actualizarPuesto]=useState("")
    const [foto, actualizarFoto]= useState("")
    const [equipo, actualizarEquipo]= useState("")

    const [titulo, actualizarTitulo]= useState("")
    const [color, actualizarColor]= useState("")

    const {RegistrarColaborador,crearEquipo }= props

    const manejarEnvio=(e) =>{
        e.preventDefault();
        console.log("Manejar el envio", e);

        let datosEnviar ={
            //nombre: nombre,
            //puesto: puesto,
            //foto: foto
            nombre,
            puesto,
            foto, 
            equipo
        }
        RegistrarColaborador(datosEnviar);
    }

    const manejarNuevoEquipo =(e)=>{
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo  titulo="Nombre" placeholder="Ingrese nombre" required valor={nombre} actualizarValor={actualizarNombre}/>
            <Campo titulo="Puesto" placeholder="Ingrese puesto" required valor={puesto} actualizarValor={actualizarPuesto}/>
            <Campo titulo="Foto" placeholder="Ingrese enlace de foto" required valor={foto} actualizarValor={actualizarFoto}/>
           
            <ListaOpciones 
            equipos={props.equiposs} // Cambia equiposs a equipos
            valor={equipo}
            actualizarEquipo={actualizarEquipo}
            />
            <Boton>
                CREAR
            </Boton>
        </form>

        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo  titulo="Titulo" placeholder="Ingresar Titulo" required valor={titulo} actualizarValor={actualizarTitulo}/>
            <Campo titulo="Color" placeholder="Ingrese el color en hexadecimal" required valor={color} actualizarValor={actualizarColor} type="color"/>
            <Boton>Registrar Equipo</Boton>
        </form>
    </section>
}

export default Formulario;