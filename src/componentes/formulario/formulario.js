import "./formulario.css"
import CampoTexto from "../campoTexto/CampoTexto";
import ListaOpciones from "../listaOpciones/listaOpciones";
import Boton from "../boton/boton";
import Equipo from "../equipos/equipos";
import { useState } from "react";

const Formulario =(props) =>{
    const [nombre, actualizarNombre]=useState("")
    const [puesto, actualizarPuesto]=useState("")
    const [foto, actualizarFoto]= useState("")
    const [equipo, actualizarEquipo]= useState("")

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
        console.log(datosEnviar);
        props.RegistrarColaborador(datosEnviar);
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto  titulo="Nombre" placeholder="Ingrese nombre" required valor={nombre} actualizarValor={actualizarNombre}/>
            <CampoTexto titulo="Puesto" placeholder="Ingrese puesto" required valor={puesto} actualizarValor={actualizarPuesto}/>
            <CampoTexto titulo="Foto" placeholder="Ingrese enlace de foto" required valor={foto} actualizarValor={actualizarFoto}/>
           
            <ListaOpciones 
            equipos={props.equipo} // Cambia equiposs a equipos
            valor={equipo}
            actualizarEquipo={actualizarEquipo}
            />

            <Boton>
                CREAR
            </Boton>
        </form>
    </section>
}

export default Formulario;