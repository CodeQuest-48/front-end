import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components';

export const HomeLayout = () => {
  return (
    <div className="flex bg-primary">
      <Sidebar />

      <main className="w-full h-screen">
        <Outlet />
      </main>
    </div>
  );
};
