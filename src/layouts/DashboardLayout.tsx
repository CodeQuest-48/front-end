import { Navigate, Outlet } from 'react-router-dom';
import { Sidebar } from '../components';
import { useAuthStore } from '../store';
import { useEffect } from 'react';

export const HomeLayout = () => {
	const authStatus = useAuthStore(state => state.status);
	const checkAuthStatus = useAuthStore(
		state => state.checkAuthStatus
	);
	const user = useAuthStore(state => state.user);

	useEffect(() => {
		checkAuthStatus();

		const intervalId = setInterval(() => {
			checkAuthStatus();
		}, 43200000);

		return () => clearInterval(intervalId);
	}, [checkAuthStatus]);

	if (authStatus === 'unauthorized' || user?.rol !== 'administrador')
		return <Navigate to='/auth/login' />;

	return (
		<div className='flex bg-primary h-screen'>
			<Sidebar />

			<main className='w-full h-screen  py-10 px-10 flex flex-col flex-1 overflow-auto'>
				<Outlet />
			</main>
		</div>
	);
};
