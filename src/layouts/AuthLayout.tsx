import { Outlet } from 'react-router-dom';

export const AuthLayout = () => {
  return (
    <section className="min-h-screen bg-primary flex justify-center">
      <Outlet />
    </section>
  );
};
