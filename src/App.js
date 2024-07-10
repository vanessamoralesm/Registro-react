
import './App.css';
import Header from './componentes/header/header.js';
import Formulario from './componentes/formulario/formulario.js';
import MiOrg from './componentes/miOrg/miOrg.js';
import { useState } from 'react';
import Equipo from './componentes/equipos/equipos.js';
import Footer from './componentes/footer/footer.js';


function App() {
  const [mostrarFormualrio, actualizarMostrar]= useState(false);
  const [colaboradores, actualizarColaboradores]= useState([]);

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

  //lista de equipos 
  const equiposs = [
    {
      titulo:"Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },

    {
      titulo:"Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },

    {
      titulo:"Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },

    {
      titulo:"Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },

    {
      titulo:"UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    
    {
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },

    {
      titulo: "Innovación y  Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }
  ];

  return (
    <div className="App">
      <Header/>
      {/*mostrarFormualrio ?<Formulario/>:<></>*/}
      {mostrarFormualrio&&<Formulario 
          equiposs={equiposs.map((equipo)=>equipo.titulo)}
          RegistrarColaborador={registrarColaborador}
        />
      }
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equiposs.map((equipo)=> <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)} // Pasa la lista completa de colaboradores
        />)
      }
      <Footer/>
      
    </div>
  );
}

export default App;

