import { Link, useParams } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { FaCalendarCheck } from 'react-icons/fa';
import { FaRegClipboard } from 'react-icons/fa';
import { Title } from '../components';
import { useSorteoById } from '../hooks';
import { formatearFecha } from '../helpers/functions';

export const DetalleSorteoPage = () => {
	const { id } = useParams();

	const { sorteoQueryById } = useSorteoById(id);
	const { isLoading, isError, data: sorteo } = sorteoQueryById;

	if (isLoading) return <div>Cargando...</div>;
	if (isError) return <div>Error al cargar el sorteo</div>;

	console.log(sorteo);

	return (
		<section className='flex flex-col gap-10'>
			<div className='flex justify-between items-center  mt-10'>
				<Link
					to={'/sorteos'}
					className='flex items-center text-white '
				>
					<IoIosArrowBack />
					volver
				</Link>
			</div>

			<div className='flex justify-between items-center'>
				<Title title={sorteo?.title || ''} />

				<div className='flex gap-4 items-end'>
					<button className='py-2 w-32 text-white bg-sky-600 rounded-md hover:bg-sky-700'>
						Actualizar
					</button>
					<button className='py-2 w-32 text-white bg-red-600 rounded-md hover:bg-red-700'>
						Eliminar
					</button>
				</div>
			</div>

			<div className='flex flex-col gap-5 bg-red-500 text-white'>
				<div className='flex flex-col gap-3'>
					<p>{sorteo?.description}</p>
					<p className='self-end'>
						Creado por{' '}
						<span className='font-bold'>
							{sorteo?.creador.nombre}
						</span>
					</p>
				</div>

				<div className='flex gap-5 justify-between text-xl text-white'>
					<p className='flex gap-2 items-center'>
						<FaCalendarCheck size={20} />
						Fecha de inicio:{' '}
						<span className='font-bold'>
							{formatearFecha(sorteo?.startDate)}
						</span>
					</p>
					<p className='flex gap-2 items-center'>
						<FaCalendarCheck size={20} />
						Fecha de finalización:{' '}
						<span className='font-bold'>
							{formatearFecha(sorteo?.endDate)}
						</span>
					</p>
				</div>
			</div>

			<div className='flex text-white gap-5 items-center'>
				<p className='font-bold'>Enlace del sorteo:</p>
				<div className='flex border border-white bg-secondary flex-1 h-full items-center'>
					<a
						href={`${import.meta.env.VITE_BASE_URL_SORTEO}/${id}`}
						target='_blank'
						rel='noopener noreferrer'
						className='px-5 text-white underline'
					>{`${import.meta.env.VITE_BASE_URL_SORTEO}/${id}`}</a>
				</div>
				<button className='bg-secondary w-10 h-10 flex items-center justify-center rounded-md hover:bg-tertiary hover:text-secondary transition-all'>
					<FaRegClipboard size={22} />
				</button>
			</div>
		</section>
	);
};
