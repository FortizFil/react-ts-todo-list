import { Outlet } from 'react-router';

export const Container = () => (
  <div className="p-6 max-w-3xl mx-auto h-screen flex flex-col gap-[20px]">
    <Outlet />
  </div>
);
