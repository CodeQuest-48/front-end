import { IoIosArrowBack } from 'react-icons/io';
import { InputForm, Title } from '../components';
import { Link } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCreateSorteo } from '../hooks/useCreateSorteo';
import { BodySorteo } from '../services/sorteos.service';

export const CrearSorteoPage = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<BodySorteo>();

	const sorteoMutation = useCreateSorteo();

	const onSubmit: SubmitHandler<BodySorteo> = data => {
		console.log(data);
		sorteoMutation.mutate(data);
	};

	return (
		<div className='relative'>
			<div className='flex justify-between my-10'>
				<div className='flex flex-col gap-7'>
					<Link
						to={'/sorteos'}
						className='flex items-center text-white'
					>
						<IoIosArrowBack />
						volver
					</Link>
					<Title title={'Añadir sorteo nuevo'} />
				</div>
			</div>

			<form
				onSubmit={handleSubmit(onSubmit)}
				className='bg-secondary w-[500px] p-6 space-y-6'
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

				<div className='flex gap-x-6 items-end absolute top-2 right-0'>
					<button
						className='py-2 w-32 text-white bg-red-600 rounded-md '
						type='button'
					>
						Descartar
					</button>
					<button
						className='py-2 w-32 text-white bg-green-600 rounded-md'
						type='submit'
					>
						Guardar
					</button>
				</div>
			</form>
		</div>
	);
};
