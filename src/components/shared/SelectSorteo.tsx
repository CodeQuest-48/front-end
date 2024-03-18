import { useState } from 'react';
import { useSorteos } from '../../hooks';
import { FaChevronDown } from 'react-icons/fa';
import { Loader } from '..';
import { useSorteosStore } from '../../store';
import { Sorteo } from '../../interfaces/sorteos.interface';

export const SelectSorteo = () => {
	const [isOpen, setIsOpen] = useState(false);

	const sorteoSelectedById = useSorteosStore(
		state => state.sorteoSelectedById
	);
	const setSorteoSelectedById = useSorteosStore(
		state => state.setSorteoSelectedById
	);

	const { sorteoQuery } = useSorteos();
	const { data: sorteos, isLoading } = sorteoQuery;

	// Función para alternar la visibilidad del menú desplegable
	const toggling = () => setIsOpen(!isOpen);

	const onOptionClicked = (sorteo: Sorteo) => {
		setSorteoSelectedById(sorteo);
		setIsOpen(false);
	};

	return (
		<div className='w-full  max-w-2xl'>
			<div className='relative'>
				<div
					className='w-full px-6 py-3 bg-white rounded-[8px] shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 cursor-pointer flex items-center justify-between no-select'
					onClick={toggling}
				>
					<p className='font-bold text-secondary'>
						{sorteoSelectedById
							? `${sorteoSelectedById.title}`
							: 'Seleccione un sorteo'}
					</p>
					<div className='pointer-events-none flex items-center justify-center'>
						<FaChevronDown color='#808080' size={15} />
					</div>
				</div>
				{isOpen && (
					<div className='absolute w-full bg-white rounded-[8px]  z-10 mt-2 shadow-xl'>
						{isLoading && <Loader />}
						{sorteos!.length > 0 ? (
							<div className='flex flex-col h-[250px] overflow-y-scroll'>
								{sorteos!.map(sorteo => (
									<div
										className='px-8 py-5 hover:bg-gray-100 cursor-pointer flex gap-6 items-center'
										onClick={() => onOptionClicked(sorteo)}
										key={sorteo.id}
									>
										<div className='flex w-3 h-3 bg-[#808080] rounded-full'></div>
										<span className='font-bold capitalize text-[#808080]'>
											{sorteo.title}
										</span>
									</div>
								))}
							</div>
						) : (
							<div className='flex justify-center items-center h-[100px]'>
								<p className='text-[#808080] font-bold'>
									No hay resultados
								</p>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
};
