import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
	return (
		<div className='flex flex-col items-center justify-center h-screen bg-primaryBackground'>
			<div className='bg-white shadow-lg rounded-lg p-8 max-w-md text-center flex flex-col gap-4'>
				<h1 className='text-6xl font-bold text-gray-800'>404</h1>

				<h2 className='text-2xl font-semibold text-gray-700'>
					Página no encontrada
				</h2>

				<p className='text-gray-600 mb-6'>
					Lo sentimos, no pudimos encontrar la página que estabas
					buscando.
				</p>

				<Link
					to={'/'}
					className='bg-primary text-white px-4 py-3 rounded hover:bg-secondary transition duration-300'
				>
					Volver al Inicio
				</Link>
			</div>
		</div>
	);
};
