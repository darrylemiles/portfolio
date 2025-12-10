import { lazy } from 'react';

// project import
import Loadable from '../components/Loadable';

const Home = Loadable(lazy(() => import('../pages/Home')));

const AbsoluteRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <Home />
    },
  ]
};

export default AbsoluteRoutes;
