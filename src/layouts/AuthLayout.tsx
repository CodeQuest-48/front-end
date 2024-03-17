import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store';
import { useEffect, useState } from 'react';
import { AlertMessage } from '../components';

export const AuthLayout = () => {
	const { pathname } = useLocation();

	const [showAlert, setShowAlert] = useState(false);

	const authStatus = useAuthStore(state => state.status);
	const user = useAuthStore(state => state.user);

	useEffect(() => {
		if (
			authStatus === 'authorized' &&
			user?.rol !== 'administrador'
		) {
			setShowAlert(true);
		}
	}, [authStatus, user]);

	if (authStatus === 'authorized' && user?.rol === 'administrador') {
		return <Navigate to='/inicio' />;
	}

	if (pathname === '/auth') {
		return <Navigate to='/auth/login' />;
	}

	return (
		<section className='min-h-screen bg-primary flex justify-center'>
			<Outlet />

			<AlertMessage isOpen={showAlert} setShowAlert={setShowAlert}>
				<p>No tiene acceso de administrador</p>
			</AlertMessage>
		</section>
	);
};
