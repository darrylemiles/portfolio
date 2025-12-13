import { lazy } from 'react';

import Loadable from '../components/Loadable';

// pages
const Home = Loadable(lazy(() => import('../pages/Home')));
const NotFound = Loadable(lazy(() => import('../pages/NotFound')));

const PublicRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '*',
      element: <NotFound />
    },
  ]
};

export default PublicRoutes;
