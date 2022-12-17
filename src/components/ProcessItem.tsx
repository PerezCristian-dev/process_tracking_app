
import deleteIcon from "../assets/deleteIcon.svg";
import "../css/process_item.css";

import {deleteItem} from '../store/slices/process/processSlice'

 
import {useState} from 'react'



export const ProcessItem = ({procedimientos, handleChange, dispatch}: any) => {
 
  const {id, procedimiento, codigo, reclamado, diferencia, autorizado} = procedimientos;

  
  const [isBlur, setIsBlur] = useState({procedimiento:false, codigo:false, reclamado:false, diferencia:false, autorizado:false})


  

  const handleBlur =({target}:any)=>{
    setIsBlur(prev=>{
      return {...prev, [target.name]: true}
    })
  }

  return (
    <>
      <div className="item__container">
        <img className="delete__icon" src={deleteIcon} alt="delete" onClick={(e)=>dispatch(deleteItem(id))}/>
        <span className="Frame-288">
          <h2 className="Procedimiento-01">{`Procedimiento ${procedimientos.id}`}</h2>
          <input name="procedimiento" type="text" className="item_input" placeholder="Ej: 4563523" onChange={(e)=>handleChange(e, id)} value={procedimiento} onBlur={handleBlur}/>
          {(procedimiento===""&&isBlur.procedimiento)&&<span className="validation">*Required</span>}
        </span>
        <span className="Frame-288">
          <h2 className="Procedimiento-01">Código</h2>
          <input  name="codigo" type="text" className="item_input" placeholder="Ej: 4563523" onChange={(e)=>handleChange(e, id)} value={codigo} onBlur={handleBlur}/>
          {(codigo==="" &&isBlur.procedimiento)&& <span className="validation">*Required</span>}
        </span>
        <span className="Frame-288">
          <h2 className="Procedimiento-01">Reclamado RD$</h2>
          <input  name="reclamado" type="text" className="item_input" placeholder="Ej: 4563523" onChange={(e)=>handleChange(e, id)} value={reclamado} onBlur={handleBlur}/>
          {(reclamado===""&&isBlur.procedimiento)&&<span className="validation">*Required</span>}
        </span>
        <span className="Frame-288">
          <h2 className="Procedimiento-01">Diferencia RD$</h2>
          <input  name="diferencia" type="text" className="item_input" placeholder="Ej: 4563523" onChange={(e)=>handleChange(e, id)} value={diferencia} onBlur={handleBlur}/>
          {(diferencia===""&&isBlur.procedimiento)&&<span className="validation">*Required</span>}
        </span>
        <span className="Frame-288">
          <h2 className="Procedimiento-01">Autorizado RD$</h2>
          <input  name="autorizado" type="text" className="item_input" placeholder="Ej: 4563523" onChange={(e)=>handleChange(e, id)} value={autorizado} onBlur={handleBlur}/>
          {(autorizado===""&&isBlur.procedimiento)&&<span className="validation">*Required</span>}
        </span>
      </div>
    </>
  );
};
