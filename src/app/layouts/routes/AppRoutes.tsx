import { Route, Routes } from 'react-router-dom';

import MainLayout from '../MainLayout';
import { HomePage } from '@/pages';
import { routes } from './routes';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={`${routes.home}`} element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};
