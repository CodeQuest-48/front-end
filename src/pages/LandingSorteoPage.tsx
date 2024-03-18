import { useParams } from 'react-router-dom';
import { useSorteoById } from '../hooks';
import { Loader } from '../components';
import { FaCalendarCheck } from 'react-icons/fa';
import { formatearFecha } from '../helpers/functions';

export const LandingSorteoPage = () => {
	const { id } = useParams();
	const { sorteoQueryById } = useSorteoById(id);
	const { isLoading, data: sorteo } = sorteoQueryById;

	return (
		<main className='bg-primary h-screen overflow-auto'>
			{isLoading && <Loader />}
			<header className='py-7 border-b border-tertiary bg-secondary'>
				<img
					src='https://import.cdn.thinkific.com/643563%2Fcustom_site_themes%2Fid%2FovAKzuZwRfmmwOLdtki8_DEVTALLES-LOGO-VARIANTES.png'
					alt='logo'
					className='h-10 w-auto object-cover mx-auto'
				/>
			</header>
			<section className='container flex  mt-8 gap-10'>
				<div className='flex flex-col gap-5 flex-[2] '>
					<h1 className='text-4xl text-white font-bold capitalize text-center'>
						{sorteo?.title}
					</h1>

					<div className='flex flex-col gap-3 text-white'>
						<p>{sorteo?.description}</p>
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
				<div className='flex-[1] relative'>
					<div className='flex flex-col gap-5 bg-white p-5 rounded-md shadow-xl'>
						<p className='text-secondary text-lg'>
							Si quieres participar en el sorteo debes estar adentro
							del servidor de Discord Devtalles
						</p>
						<a
							href={`${
								import.meta.env.VITE_API_BASE_URL
							}/auth/discord?sorteoId=${sorteo?.id}`}
							className='bg-primary text-white border-none py-4 rounded-[8px] hover:bg-secondary font-bold flex items-center justify-center'
						>
							Participar
						</a>
					</div>
				</div>
			</section>
		</main>
	);
};
