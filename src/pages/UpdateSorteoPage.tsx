import { IoMdClose } from 'react-icons/io';
import { InputForm } from '../components';
import { SubmitHandler, useForm } from 'react-hook-form';
import { BodySorteo } from '../services/sorteos.service';
import { useEffect } from 'react';
import { useUpdateSorteo } from '../hooks/useUpdateSorte';
import { Sorteo } from '../interfaces/sorteos.interface';

interface Props {
	setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
	sorteo: Sorteo;
}

const formatDateForInput = (dateString: string) => {
	const date = new Date(dateString);
	const formattedDate = date.toISOString().split('T')[0];
	return formattedDate;
};

export const UpdateSorteoPage = ({
	setIsModalOpen,
	sorteo,
}: Props) => {
	const onClose = () => {
		setIsModalOpen(false);
	};

	const {
		register,
		formState: { errors },
		handleSubmit,
		reset,
	} = useForm<BodySorteo>();

	// Restablece los valores del formulario cada vez que cambien los datos del sorteo
	useEffect(() => {
		const sorteoFormatted = {
			...sorteo, // Asume que "sorteo" es tu objeto con los datos actuales
			startDate: sorteo.startDate
				? formatDateForInput(sorteo.startDate)
				: '',
			endDate: sorteo.endDate
				? formatDateForInput(sorteo.endDate)
				: '',
		};
		reset(sorteoFormatted);
	}, [sorteo, reset]);

	const updateSorteoMutation = useUpdateSorteo(sorteo.id);

	const onSubmit: SubmitHandler<BodySorteo> = data => {
		const updatedSorteo: BodySorteo = {
			title: data.title,
			description: data.description,
			startDate: data.startDate,
			endDate: data.endDate,
			premio: data.premio,
		};
		updateSorteoMutation.mutate(updatedSorteo, {
			onSuccess: () => {
				onClose();
			},
		});
	};

	return (
		<div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
			<div className='bg-white p-6 rounded-lg shadow-xl flex flex-col gap-5 w-[60%] h-[82%] overflow-auto'>
				<div className='flex justify-between items-center'>
					<h2 className='text-2xl font-bold text-secondary'>
						Actualizar Sorteo
					</h2>
					<button onClick={onClose} className='text-xl font-semibold'>
						<IoMdClose size={25} />
					</button>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className=' w-full p-6 space-y-6 bg-primary'
				>
					<InputForm
						label='Título'
						name='title'
						errors={errors}
						required={true}
						placeholder='Título del sorteo'
						register={register}
					/>

					<InputForm
						label='Descripción'
						name='description'
						errors={errors}
						isTextarea={true}
						required={true}
						placeholder='Descripción del sorteo'
						register={register}
					/>

					<InputForm
						label='Premio'
						name='premio'
						errors={errors}
						required={true}
						placeholder='Descripción del premio'
						register={register}
					/>

					<InputForm
						label='Fecha de inicio'
						name='startDate'
						errors={errors}
						type='date'
						required={true}
						register={register}
					/>
					<InputForm
						label='Fecha de finalización'
						name='endDate'
						errors={errors}
						type='date'
						required={true}
						register={register}
						// TODO: agregar validación de fecha minima con la fecha de inicio
					/>

					<button
						className='py-2 w-32 text-white bg-green-600 rounded-md'
						type='submit'
					>
						Actualizar
					</button>
				</form>
			</div>
		</div>
	);
};
