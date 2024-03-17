import { NavLink } from 'react-router-dom';
import { SlLogout } from 'react-icons/sl';
import { enlacesMenu } from '../../utils/enlaces';
import { useAuthStore } from '../../store';

export const Sidebar = () => {
	const logoutUser = useAuthStore(state => state.logoutUser);

	return (
		<aside className='bg-secondary w-[300px] h-screen text-white py-8 px-5 flex  flex-col gap-10'>
			<img
				src='https://import.cdn.thinkific.com/643563%2Fcustom_site_themes%2Fid%2FovAKzuZwRfmmwOLdtki8_DEVTALLES-LOGO-VARIANTES.png'
				alt='logo'
				className='h-8 w-auto object-cover mx-auto'
			/>

			<nav className='flex-1 overflow-auto mt-7'>
				<ul className='flex flex-col gap-5'>
					{enlacesMenu.map(enlace => (
						<li key={enlace.to}>
							<NavLink
								to={enlace.to}
								className={({ isActive }) =>
									`flex items-center gap-5  px-5 py-3 font-bold rounded-[8px] ${
										isActive ? 'bg-tertiary text-secondary' : ''
									}`
								}
							>
								{enlace.icon}
								{enlace.title}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>

			<footer className='flex w-full'>
				<button
					className='bg-transparent w-full text-white px-5 py-3 rounded-md flex items-center gap-5 font-bold'
					onClick={logoutUser}
				>
					<SlLogout size={16} />
					Cerrar sesión
				</button>
			</footer>
		</aside>
	);
};
