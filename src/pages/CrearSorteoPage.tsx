import { Title } from '../components';

export const CrearSorteoPage = () => {
  return (
    <div className="px-16">
      <div className="flex justify-between my-10">
        <Title title={'Añadir sorteo nuevo'} />
        <div className="flex gap-x-6 items-center">
          <button className="py-2 w-32 text-white bg-red-600 rounded-md">
            Descartar
          </button>
          <button className="py-2 w-32 text-white bg-green-600 rounded-md">
            Guardar
          </button>
        </div>
      </div>

      <form action="" className="bg-secondary w-[500px] p-6 space-y-6">
        <div>
          <label htmlFor="titulo">Titulo</label>
          <input type="text" className="block w-full" placeholder="Titulo del sorteo" />
        </div>
        <div>
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            className="block w-full resize-none"
            placeholder="Descripción del sorteo"
            rows={4}
          />
        </div>
        <div>
          <label htmlFor="fechaInicio">Fecha de inicio</label>
          <input type="date" className="block w-full" placeholder="" />
        </div>
        <div>
          <label htmlFor="fechaFin">Fecha de finalización</label>
          <input type="date" className="block w-full" placeholder="" />
        </div>
      </form>
    </div>
  );
};
