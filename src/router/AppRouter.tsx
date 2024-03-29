import { Navigate, createBrowserRouter } from 'react-router-dom';
import { AuthLayout, HomeLayout } from '../layouts';
import {
	CrearSorteoPage,
	DetalleSorteoPage,
	LoginPage,
	NotFoundPage,
	RegisterPage,
	LandingSorteoPage,
	SuccessPage,
	FailedPage,
} from '../pages';
import { enlacesMenu } from '../utils/enlaces';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <NotFoundPage />,
		children: [
			...enlacesMenu.map(enlace => ({
				path: enlace.to,
				element: enlace.component,
			})),
			{
				path: '/',
				element: <Navigate to={enlacesMenu[0].to} />,
			},
			{
				path: 'sorteos/nuevo',
				element: <CrearSorteoPage />,
			},
			{
				path: 'sorteos/:id',
				element: <DetalleSorteoPage />,
			},
		],
	},
	{
		path: '/sorteo/:id',
		element: <LandingSorteoPage />,
	},
	{
		path: `/sorteo/success/:participanteId`,
		element: <SuccessPage />,
	},
	{
		path: '/sorteo/failed',
		element: <FailedPage />,
	},
	{
		path: '/auth',
		element: <AuthLayout />,
		children: [
			{
				index: true,
				path: 'login',
				element: <LoginPage />,
			},
			{
				path: 'register',
				element: <RegisterPage />,
			},
		],
	},
]);
