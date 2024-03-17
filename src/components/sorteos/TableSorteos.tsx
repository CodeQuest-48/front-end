import { Link } from 'react-router-dom';
import { useSorteos } from '../../hooks/useSorteos';
import { Sorteo } from '../../interfaces/sorteos.interface';
import { formatearFecha } from '../../helpers/functions';

const tableHeaders: string[] = [
	'Titulo',
	'Fecha de inicio',
	'Fecha de fin',
	'Estado',
	'Creador',
];

export const TableSorteos = () => {
	const { sorteoQuery } = useSorteos();
	const { data: sorteos } = sorteoQuery;

	return (
		<div className='overflow-x-auto'>
			<div className='flex flex-col'>
				{/* ROW HEADERS */}
				<div className='grid grid-cols-5 bg-purple80 pb-4 pt-2 rounded-[5px] items-center justify-center gap-5'>
					{tableHeaders.map(header => (
						<h4
							className='font-bold text-white text-center'
							key={header}
						>
							{header}
						</h4>
					))}
				</div>
				{/* ROWS CONTENT */}
				<div className='flex flex-col gap-2'>
					{sorteos?.map((sorteo: Sorteo, index: number) => (
						<div
							className={`grid grid-cols-5 ${
								index % 2 === 0 ? 'bg-white' : 'bg-[#f9f9f9]'
							} h-[50px] rounded-[5px]  items-center`}
							key={sorteo.id}
						>
							<Link
								to={`/inicio/sorteos/${sorteo.id}`}
								className='font-bold text-center capitalize  hover:text-primary hover:underline transition-all text-purple-700 px-5'
							>
								{sorteo.title.length > 20
									? sorteo.title.slice(0, 20) + '...'
									: sorteo.title}
							</Link>
							<span className='font-bold text-center capitalize'>
								{formatearFecha(sorteo.startDate)}
							</span>
							<span className='font-bold text-center capitalize'>
								{formatearFecha(sorteo.endDate)}
							</span>
							<span className='font-bold text-center capitalize'>
								{/* ! TODO */}
								{sorteo.id}
							</span>
							<span className='font-bold text-center capitalize'>
								{sorteo.creador.nombre}
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
