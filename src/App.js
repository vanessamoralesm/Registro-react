import { v4 as uuid}   from 'uuid';
import './App.css';
import Header from './componentes/header/header.js';
import Formulario from './componentes/formulario/formulario.js';
import MiOrg from './componentes/miOrg/miOrg.js';
import { useState } from 'react';
import Equipo from './componentes/equipos/equipos.js';
import Footer from './componentes/footer/footer.js';


function App() {
  const [mostrarFormualrio, actualizarMostrar]= useState(false);
  const [colaboradores, actualizarColaboradores]= useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav:true
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/genesysrm.png",
      nombre: "Genesys Rondon",
      puesto: "Desarrolladora de software e instructora",
      fav:false
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav:false
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav:false
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav:false
    }
  ]);

  const [equiposs, actualizarEquipos]=useState([
    {
      id: uuid(),
      titulo:"Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },

    {
      id: uuid(),
      titulo:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },

    {
      id: uuid(),
      titulo:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },

    {
      id: uuid(),
      titulo:"Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },

    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },

    {
      id: uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ]);

  //ternario --> condicion? seMuestra: noSeMuestra
  //condicion && seMuestra
  const cambiarMostrar=()=>{
    actualizarMostrar(!mostrarFormualrio)
  }

  //Registrar Colaborador

  const registrarColaborador=(colaborador)=>{
    console.log("Nuevo Colaborador", colaborador);

    //spread operator 
    actualizarColaboradores([...colaboradores, colaborador])
  }

  //eliminar colaborador
  const eliminarColaborador=(id)=>{
    console.log("Eliminar Colaborador", id)
    const nuevoColaborador = colaboradores.filter((colaborador)=>colaborador.id!= id)
    actualizarColaboradores(nuevoColaborador)
  }

  //actualizar color de equipo
  const actualizarColor=(color, id)=>{
    console.log("Actualizar", color, id);

    const equiposActualizados = equiposs.map((equipo)=>{
      if(equipo.id=== id){
        equipo.colorPrimario=color
      }

      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }

  //Crer Equipo 
  const crearEquipo =(nuevoEquipo)=>{
    console.log(nuevoEquipo)
    actualizarEquipos([...equiposs, {...nuevoEquipo, id:uuid()}])
  }

  const like =(id)=>{
    console.log("like", id)
    const colaboradoresActualizados = colaboradores.map((colabor)=>{
      if(colabor.id===id){
        colabor.fav =!colabor.fav
      }
      return colabor
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div className="App">
      <Header/>
      {/*mostrarFormualrio ?<Formulario/>:<></>*/}
      {mostrarFormualrio&&<Formulario 
          equiposs={equiposs.map((equipo)=>equipo.titulo)}
          RegistrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equiposs.map((equipo)=> <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} // Pasa la lista completa de colaboradores
          eliminarC={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
        />)
      }
      <Footer/>
      
    </div>
  );
}

export default App;

