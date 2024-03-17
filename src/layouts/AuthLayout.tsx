import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store';

export const AuthLayout = () => {
	const { pathname } = useLocation();
	const authStatus = useAuthStore(state => state.status);

	if (authStatus === 'authorized') {
		return <Navigate to='/inicio' />;
	}

	if (pathname === '/auth') {
		return <Navigate to='/auth/login' />;
	}

	return (
		<section className='min-h-screen bg-primary flex justify-center'>
			<Outlet />
		</section>
	);
};
