import { createBrowserRouter } from 'react-router-dom';
import { AuthLayout, HomeLayout } from '../layouts';
import { CrearSorteoPage, LoginPage, NotFoundPage, RegisterPage } from '../pages';
import { enlacesMenu } from '../utils/enlaces';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <NotFoundPage />,
    children: [
      ...enlacesMenu.map((enlace) => ({
        path: enlace.to,
        element: enlace.component,
      })),
      {
        path: '/sorteo/nuevo',
        element: <CrearSorteoPage />,
      },
    ],
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
