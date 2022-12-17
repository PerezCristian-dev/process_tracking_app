import { createSlice } from "@reduxjs/toolkit";

export interface process {
  id: number;
  procedimiento: string;
  codigo: string;
  reclamado: string;
  diferencia: string;
  autorizado: string;
}

const initialState: process[] = [
  {
    id: 1,
    procedimiento: "Esclerosis",
    codigo: "3425",
    reclamado: "500",
    diferencia: "500",
    autorizado: "500",
  },
];

const storage:any = sessionStorage.getItem("process")||null;

const initialStateStorage: process[] = JSON.parse(storage)

// sessionStorage.setItem("process", JSON.stringify(initialState));

// const storage:any = sessionStorage.getItem("process")||null;
// const procesos = JSON.parse(storage);

export const processSlice = createSlice({
  name: "process",
  initialState: {
    processes:initialStateStorage||initialState,
    isActive: false,
  },
  reducers: {
    setIsActive:(state)=>{
      state.isActive = !state.isActive
    },

    addNewItem: (state) => {
      const id = state.processes.length;
      state.processes[id] = {
        id: id + 1,
        procedimiento: "",
        codigo: "",
        reclamado: "",
        diferencia: "",
        autorizado: "",
      };
    },

    updateItem: (state, action) => {
      const {id, name, value}= (action.payload)
      console.log({...state.processes[id-1]})
      console.log(id);
      state.processes[id-1] = {
        ...state.processes[id-1],
        [name]: value,
      };
    },

    deleteItem: (state, action) => {
      console.log(action.payload)
      console.log(state.processes);
      state.processes.splice(action.payload - 1, 1);
      state.processes = state.processes.map((item:any, index:number)=>{
        return {...item, id: index+1}
      })
      sessionStorage.setItem("process", JSON.stringify(state.processes));
    },

    saveItems:(state)=>{
      state.isActive = !state.isActive
      sessionStorage.setItem("process", JSON.stringify(state.processes));
      const storage:any = sessionStorage.getItem("process")||null;
      state.processes = JSON.parse(storage);
    },

    cancelAction:(state)=>{
      state.isActive = !state.isActive
      const storage:any = sessionStorage.getItem("process")||null;
      state.processes = JSON.parse(storage);
    }
  },
});

// Action creators are generated for each case reducer function
export const { addNewItem, deleteItem, updateItem, saveItems, setIsActive, cancelAction } = processSlice.actions;
