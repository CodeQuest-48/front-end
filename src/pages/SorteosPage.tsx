import { IoAddOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { SearchBar, Table, Title } from '../components';

export const SorteosPage = () => {
  const navigate = useNavigate();
  return (
    <div className="px-16">
      <header className="flex my-10 justify-between">
        <div className="flex gap-x-4">
          <button className="border-2 border-white w-32 py-1 text-white rounded-md">
            Activos
          </button>
          <button className="border-2 border-white w-32 py-1 text-white rounded-md">
            Realizados
          </button>
          <button className="border-2 border-white w-32 py-1 text-white rounded-md">
            Todos
          </button>
        </div>
        <div>
          <button
            onClick={() => navigate('/sorteo/nuevo')}
            className="flex items-center border-2 border-white px-3 py-1 gap-x-1 text-black rounded-md bg-white font-semibold"
          >
            <IoAddOutline />
            Añadir sorteo
          </button>
        </div>
      </header>
      <Title title="Todos los sorteos" className="mb-10" />
      <section className="h-[450px] w-full bg-secondary">
        <SearchBar />
        <Table />
      </section>
    </div>
  );
};
