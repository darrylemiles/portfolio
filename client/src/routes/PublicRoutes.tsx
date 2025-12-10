import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';

const Home = Loadable(lazy(() => import('../pages/Home')));

const PublicRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <Home />
    },
  ]
};

export default PublicRoutes;
