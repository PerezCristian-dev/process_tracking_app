import "./App.css";
import editIcon from "./assets/editIcon.svg";
import { ProcessEditModal } from "./components/ProcessEditModal";
import { MainItem } from "./components/MainItem";
import { useSelector, useDispatch } from "react-redux";
import { setIsActive } from "./store/slices/process/processSlice";
import plusIcon from "./assets/plusIcon.svg";

function App() {
  const { processes, isActive } = useSelector((state: any) => state?.process);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setIsActive());
  };

  return (
    <>
      {isActive && <ProcessEditModal />}
      <div className="main__page">
        <h1 className="main__title">Procedimientos</h1>
        {processes.map((procedimiento: any) => {
          return <MainItem key={procedimiento?.id} process={procedimiento} />;
        })}
        <div className="Buttons-3" onClick={handleClick}>
          <img className="editIcon" src={processes.length>0?editIcon:plusIcon} alt="" />
          <span className="btnContent">{processes.length>0?"Editar procedimientos": "Añadir procedimientos"}</span>
        </div>
      </div>
    </>
  );
}

export default App;
