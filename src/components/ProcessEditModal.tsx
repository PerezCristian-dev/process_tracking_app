import "../css/process_modal.css";
import plusIcon from "../assets/plusIcon.svg";
import checkIcon from "../assets/checkIcon.svg";
import closeIcon from "../assets/closeIcon.svg";
import { ProcessItem } from "./ProcessItem";

import { useSelector, useDispatch } from "react-redux";
import {
  addNewItem,
  updateItem,
  saveItems,
  cancelAction,
} from "../store/slices/process/processSlice";

export const ProcessEditModal = () => {
  const { processes, isActive } = useSelector((state: any) => state?.process);
  const dispatch = useDispatch();
  {
    isActive ? (document.body.style.overflow = "hidden") : null;
  }

  const handleAdd = () => {
    dispatch(addNewItem());
  };

  const handleSave = () => {
    if (processes.length <= 0) dispatch(saveItems());
    const { procedimiento, codigo, reclamado, diferencia, autorizado } =
      processes[processes.length - 1];

    if (!procedimiento || !codigo || !reclamado || !diferencia || !autorizado) {
      return;
    }

    dispatch(saveItems());
  };

  const handleChange = ({ target }: any, id: number) => {
    const payload = {
      id,
      name: target.name,
      value: target.value,
    };
    dispatch(updateItem(payload));
  };

  const handleCancel = () => {
    document.body.style.overflow = "auto";
    dispatch(cancelAction());
  };

  return (
    <div
      className={`modal__container animate__animated ${
        isActive ? "animate__fadeIn" : "animate__fadeOut"
      }`}
    >
      <div className="process_edit_container animate__animated animate__fadeInDown">
        <img
          className="close__icon"
          src={closeIcon}
          alt="close"
          onClick={handleCancel}
        />
        <span className="title_container">
          <h2 className="process_edit_title">Procedimientos</h2>
          <span className="add_another_process" onClick={handleAdd}>
            <img className="plus_icon" src={plusIcon} alt="+" /> Añadir
            procedimiento
          </span>
        </span>

        {processes.map((item: any) => {
          return (
            <ProcessItem
              key={item?.id}
              procedimientos={item}
              handleChange={handleChange}
              dispatch={dispatch}
            />
          );
        })}

        <div className="btn_section">
          <button className="btn__light" onClick={handleCancel}>
            Cancelar
          </button>
          <button className="btn__blue" onClick={handleSave}>
            <img src={checkIcon} alt="checkMark" />
            Guardar cambios
          </button>
        </div>
      </div>
    </div>
  );
};
