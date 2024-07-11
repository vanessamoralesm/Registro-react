import "./colaborador.css"
import { IoCloseCircle } from "react-icons/io5";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";

const Colaborador =(props)=>{
    const {nombre, puesto, foto, equipo, id, fav}=props.datos
    const {colorPrimario, eliminarC, like}= props

    // condicion ? verdadero : falso 
    return <div className="colaborador">
        <IoCloseCircle className="eliminar" onClick={ ()=> eliminarC(id)}/>
        <div className="encabezado" style={{backgroundColor:colorPrimario}}>
            <img  src={foto} alt={nombre}/>
        </div>

        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {fav ? <BsFillSuitHeartFill color="red" onClick={()=>like(id)}/>:<FaHeart onClick={()=>like(id)}/>}
        </div>

    </div>
}

export default Colaborador;

