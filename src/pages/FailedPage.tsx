import {
	useNavigate,
	useParams,
	useSearchParams,
} from 'react-router-dom';
import { useParticipantesStore } from '../store/participantes/participantes.store';
import { FaDiscord } from 'react-icons/fa';

export const FailedPage = () => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	const errorMessage = searchParams.get('error'); // 'error' es el nombre del parámetro en la URL

	const { participanteId } = useParams();

	const setParticipanteId = useParticipantesStore(
		state => state.setParticipanteId
	);

	const handleBack = () => {
		setParticipanteId(participanteId);
		navigate(-2);
	};

	return (
		<main className='bg-primary h-screen overflow-auto'>
			{/* {isLoading && <Loader />} */}
			<header className='py-7 border-b border-tertiary bg-secondary'>
				<img
					src='https://import.cdn.thinkific.com/643563%2Fcustom_site_themes%2Fid%2FovAKzuZwRfmmwOLdtki8_DEVTALLES-LOGO-VARIANTES.png'
					alt='logo'
					className='h-10 w-auto object-cover mx-auto'
				/>
			</header>
			<section className='container flex  mt-8 gap-10 w-[40%] shadow-xl'>
				<div className='flex-[1] relative'>
					<div className='flex flex-col gap-5 bg-white p-5 rounded-md shadow-xl'>
						<p className='text-secondary text-lg text-center'>
							{errorMessage || 'Error al participar en el sorteo'}
						</p>

						<div className='flex flex-col gap-1'>
							<a
								href='https://fernando-herrera.us12.list-manage.com/track/click?u=e7b1f1b0879bcd0bb0566af87&id=c6fc14b873&e=42ea6edab7'
								target='_blank'
								className='bg-primary font-bold text-lg text-white rounded-md py-3 hover:bg-secondary transition-all flex items-center justify-center gap-2'
							>
								<FaDiscord />
								Unirse a Discord
							</a>

							<button
								className='bg-secondary font-bold text-lg text-white rounded-md py-3 hover:bg-primary transition-all'
								onClick={handleBack}
							>
								Volver
							</button>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
};
