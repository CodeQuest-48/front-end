import { IoAddOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { SearchBar, TableSorteos, Title } from '../components';

export const SorteosPage = () => {
	const navigate = useNavigate();
	return (
		<>
			<header className='flex my-10 justify-between'>
				<div className='flex gap-x-4'>
					<button className='border-2 border-white w-32 py-1 text-white rounded-md'>
						Activos
					</button>
					<button className='border-2 border-white w-32 py-1 text-white rounded-md'>
						Realizados
					</button>
					<button className='border-2 border-white w-32 py-1 text-white rounded-md'>
						Todos
					</button>
				</div>
				<div>
					<button
						onClick={() => navigate('/sorteo/nuevo')}
						className='flex items-center border-2 border-white px-3 py-1 gap-x-1 text-secondary rounded-md bg-white font-semibold'
					>
						<IoAddOutline />
						Añadir sorteo
					</button>
				</div>
			</header>
			{/* SECCIÓN DE SORTEOS */}
			<section className='flex flex-col gap-10 h-full'>
				<Title title='Todos los sorteos' />
				<div className='flex-1 w-full bg-secondary rounded-[8px] flex flex-col gap-10 p-10'>
					<SearchBar />
					<TableSorteos />
				</div>
			</section>
		</>
	);
};
