import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Login, LoginSchema } from '../interfaces';

export const LoginPage = () => {
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { isValid },
	} = useForm<Login>({
		resolver: zodResolver(LoginSchema),
	});

	const formSubmit: SubmitHandler<Login> = data => {
		console.log(data);
		navigate('/');
	};

	return (
		<div className='w-96'>
			<header className='my-16'>
				<img
					src='https://import.cdn.thinkific.com/643563%2Fcustom_site_themes%2Fid%2FovAKzuZwRfmmwOLdtki8_DEVTALLES-LOGO-VARIANTES.png'
					alt='logo'
					className='h-14 w-auto object-cover mx-auto'
				/>
			</header>
			<h1 className='text-white text-center mb-10 text-3xl font-bold'>
				Inicia sesión
			</h1>
			<form
				onSubmit={handleSubmit(formSubmit)}
				noValidate
				className='space-y-10'
			>
				<div className='space-y-2'>
					<label htmlFor='email'>Correo electrónico</label>
					<input
						className='text-white block bg-secondary ring-0 border-none w-full py-3'
						type='email'
						placeholder='Correo electrónico'
						{...register('email')}
					/>
				</div>
				<div className='space-y-2'>
					<label htmlFor='password'>Contraseña</label>
					<input
						className='text-white block bg-secondary ring-0 border-none w-full py-3'
						type='password'
						placeholder='Contraseña'
						{...register('password')}
					/>
				</div>
				<button
					disabled={!isValid}
					type='submit'
					className={clsx('px-6 py-2 rounded-md font-semibold', {
						'rounded bg-secondary px-4 py-2 transition-all hover:bg-secondary':
							isValid,
						'cursor-not-allowed rounded bg-tertiary px-4 py-2 text-secondary transition-all':
							!isValid,
					})}
				>
					Iniciar sesión
				</button>
			</form>
		</div>
	);
};
