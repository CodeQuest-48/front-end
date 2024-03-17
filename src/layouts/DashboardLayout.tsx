import { Navigate, Outlet } from 'react-router-dom';
import { Sidebar } from '../components';
import { useAuthStore } from '../store';

export const HomeLayout = () => {
	const authStatus = useAuthStore(state => state.status);

	// if (pathname === '/') return <Navigate to='/auth/login' />;
	if (authStatus === 'unauthorized')
		return <Navigate to='/auth/login' />;

	return (
		<div className='flex bg-primary'>
			<Sidebar />

			<main className='w-full h-screen  py-10 px-10'>
				<Outlet />
			</main>
		</div>
	);
};
