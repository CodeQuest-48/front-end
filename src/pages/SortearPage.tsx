import { Loader, SelectSorteo } from '../components';
import { useParticipantes, useSorteoById } from '../hooks';
import { Participante } from '../interfaces/sorteos.interface';
import { useSorteosStore } from '../store';
import IconoDiscord from '../assets/iconDiscord.svg';
import { sortearGanador } from '../helpers/functions';
import { useState } from 'react';
import { SorteosService } from '../services/sorteos.service';
import { useAsignWinner } from '../hooks/useAsignWinner';

export const SortearPage = () => {
	const sorteoSelectedById = useSorteosStore(
		state => state.sorteoSelectedById
	);
	const [selectedParticipante, setSelectedParticipante] =
		useState<Participante | null>();
	const [winner, setWinner] = useState<Participante | null>(null);

	const sorteoId = sorteoSelectedById
		? sorteoSelectedById.id
		: undefined;

	const participantesQuery = useParticipantes(sorteoId);
	const { sorteoQueryById } = useSorteoById(sorteoId);
	const sorteo = sorteoQueryById.data;

	const { data: participantes, isLoading } = participantesQuery;

	const selectWinner = () => {
		const winner = sortearGanador(participantes || []);
		setSelectedParticipante(winner);
	};

	const asignWinner = useAsignWinner(sorteoId);
	const handleAsignWinner = () => {
		asignWinner.mutate({
			sorteoId,
			participanteId: selectedParticipante?.id,
		});
	};

	return (
		<div className='flex h-full gap-5'>
			<section className='flex-[2] flex flex-col gap-5 '>
				<SelectSorteo />

				<button
					className={` text-white py-3 w-[60%] self-center rounded-md ${
						!participantes || participantes.length === 0
							? 'cursor-not-allowed bg-slate-700'
							: 'bg-secondary transition-all'
					}`}
					onClick={selectWinner}
					disabled={
						isLoading || !participantes || participantes.length === 0
					}
				>
					Sortear
				</button>

				<div className='flex gap-5 items-center'>
					<div className='flex flex-col gap-5 bg-secondary text-white p-5 flex-[2]'>
						<p className='text-xl font-bold'>
							Participante seleccionado:{' '}
						</p>
						<p className='text-lg'>
							{sorteo?.ganador
								? sorteo.ganador.globalNameDiscord
								: selectedParticipante?.globalNameDiscord}
						</p>
					</div>
					{selectedParticipante && (
						<button
							className='bg-green-500 flex-1 py-4 rounded-md font-bold'
							onClick={handleAsignWinner}
						>
							Asignar Ganador
						</button>
					)}
				</div>

				{sorteo && sorteo.ganador && (
					<div className='flex bg-tertiary text-secondary flex-col gap-4 p-5 rounded-md w-[60%] self-center mt-5'>
						<p className='text-xl font-bold'>Ganador del sorteo: </p>
						<div className='flex flex-col gap-1'>
							<p className='font-bold text-xl'>
								{sorteo.ganador.globalNameDiscord}
							</p>
							<p className='text-lg'>{sorteo.ganador.username}</p>
						</div>
					</div>
				)}
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
