import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { Login, LoginSchema } from '../interfaces';
import { useAuthStore } from '../store';

export const LoginPage = () => {
	const loginUser = useAuthStore(state => state.loginUser);

	const {
		register,
		handleSubmit,
		formState: { isValid },
	} = useForm<Login>({
		resolver: zodResolver(LoginSchema),
	});

	const onLogin = handleSubmit(data => {
		loginUser(data.email, data.password);
		// navigate('/inicio');
	});

	return (
		<div className='w-[584px]'>
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
			<form onSubmit={onLogin} className='space-y-10'>
				<div className='space-y-2'>
					<label htmlFor='email'>Correo electrónico</label>
					<input
						className='text-white block bg-secondary ring-0 border-none w-full py-4'
						type='email'
						placeholder='Correo electrónico'
						{...register('email')}
					/>
				</div>

				<div className='space-y-2'>
					<label htmlFor='password'>Contraseña</label>
					<input
						className='text-white block bg-secondary ring-0 border-none w-full py-4'
						type='password'
						placeholder='Contraseña'
						{...register('password')}
					/>
				</div>

				<button
					disabled={!isValid}
					type='submit'
					className={clsx('px-6 py-2 rounded-md font-semibold', {
						'rounded bg-tertiary px-4 py-2 transition-all hover:bg-secondary hover:text-white':
							isValid,
						'cursor-not-allowed rounded bg-gray-400 px-4 py-2  transition-all':
							!isValid,
					})}
				>
					Iniciar sesión
				</button>
			</form>
		</div>
	);
};
