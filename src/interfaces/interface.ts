type process = {
    procedimiento:string;
    codigo: number;
    reclamado: number;
    diferencia: number;
    autorizado: number;
  }
  
  
  const initialState:process ={
    procedimiento:"Esclerosis",
    codigo: 3425,
    reclamado: 500,
    diferencia: 500,
    autorizado: 500,
  } 

  export default process;