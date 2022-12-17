import "../css/main_item.css"

interface Process{
    process:{
    id:number;
    procedimiento: string;
    codigo: number;
    reclamado: number;
    diferencia: number;
    autorizado: number;
    }
}

export const MainItem = ({process}:Process) => {

  return (
    <div className='main__item__container'>
        <span className='main_item'>
          <h2 className='item__header'>{`Procedimiento ${process.id}`}</h2>
          <p className='item__description'>{process.procedimiento}</p>
        </span>
        <span className='main_item'>
          <h2 className='item__header'>Código</h2>
          <p className='item__description'>{process.codigo}</p>
        </span>
        <span className='main_item'>
          <h2 className='item__header'>Reclamado</h2>
          <p className='item__description'>{`RD$ ${process.reclamado}`}</p>
        </span>
        <span className='main_item'>
          <h2 className='item__header'>Diferencia RD$</h2>
          <p className='item__description'>{`RD$ ${process.diferencia}`}</p>
        </span>
        <span className='main_item'>
          <h2 className='item__header'>Autorizado RD$</h2>
          <p className='item__description'>{`RD$ ${process.autorizado}`}</p>
        </span>
      </div>
  )
}
