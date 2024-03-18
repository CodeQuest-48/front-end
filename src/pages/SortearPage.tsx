import { Loader, SelectSorteo } from '../components';
import { useParticipantes } from '../hooks';
import { Participante } from '../interfaces/sorteos.interface';
import { useSorteosStore } from '../store';
import IconoDiscord from '../assets/iconDiscord.svg';

export const SortearPage = () => {
	const sorteoSelectedById = useSorteosStore(
		state => state.sorteoSelectedById
	);

	const sorteoId = sorteoSelectedById ? sorteoSelectedById.id : undefined;

	const participantesQuery = useParticipantes(sorteoId);
	const { data: participantes, isLoading } = participantesQuery;

	return (
		<div className='flex h-full'>
			<section className='flex-[2]'>
				<SelectSorteo />

				
			</section>
			<section className='bg-white flex-1 h-full rounded-[8px] px-5 py-10 flex flex-col gap-5'>
				<h2 className='text-3xl font-bold text-secondary text-center'>
					Participantes
				</h2>
				<div className='flex flex-col h-full'>
					{isLoading ? (
						<div className='flex items-center justify-center h-full'>
							<Loader />
						</div>
					) : participantes && participantes.length > 0 ? (
						participantes.map((participante: Participante) => (
							<div
								key={participante.id}
								className='p-5 flex items-center gap-4'
							>
								<div className='flex items-center rounded-full justify-center h-12 w-12 bg-secondary'>
									<img
										src={participante.avatarDiscord || IconoDiscord}
										alt='icono Discord'
										className='object-cover'
									/>
								</div>
								<div className='flex flex-col'>
									<p className='font-bold'>
										{participante.globalNameDiscord}
									</p>
									<p className='font-semibold'>
										{participante.username}
									</p>
								</div>
							</div>
						))
					) : (
						<p className='text-2xl p-5 font-semibold'>
							No hay participantes
						</p>
					)}
				</div>
			</section>
		</div>
	);
};
