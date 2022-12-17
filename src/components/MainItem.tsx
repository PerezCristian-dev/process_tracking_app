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
        <span className='Frame-288'>
          <h2 className='Procedimiento-01'>{`Procedimiento ${process.id}`}</h2>
          <p className='Esclerosis'>{process.procedimiento}</p>
        </span>
        <span className='Frame-288'>
          <h2 className='Procedimiento-01'>Código</h2>
          <p className='Esclerosis'>{process.codigo}</p>
        </span>
        <span className='Frame-288'>
          <h2 className='Procedimiento-01'>Reclamado</h2>
          <p className='Esclerosis'>{`RD$ ${process.reclamado}`}</p>
        </span>
        <span className='Frame-288'>
          <h2 className='Procedimiento-01'>Diferencia RD$</h2>
          <p className='Esclerosis'>{`RD$ ${process.diferencia}`}</p>
        </span>
        <span className='Frame-288'>
          <h2 className='Procedimiento-01'>Autorizado RD$</h2>
          <p className='Esclerosis'>{`RD$ ${process.autorizado}`}</p>
        </span>
      </div>
  )
}
