import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { Title } from '../components';

export const DetalleSorteoPage = () => {
  return (
    <section className="px-16">
      <Link to={'/sorteos'} className="flex items-center text-white my-10">
        <IoIosArrowBack />
        volver
      </Link>
      <Title title={'Sorteo #1'} className="mb-10" />
      <form className="w-full bg-secondary space-y-4 p-4">
        <div className="space-y-2">
          <label className="font-semibold">Titulo:</label>
          <input className="block w-96" type="text" placeholder="Titulo del sorteo" />
        </div>
        <div className="space-y-2">
          <label className="font-semibold">Descripción:</label>
          <textarea
            className="resize-none block w-96"
            rows={4}
            placeholder="Descripción del sorteo"
          />
        </div>
      </form>
    </section>
  );
};
