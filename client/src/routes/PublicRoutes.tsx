import { lazy } from 'react';

import Loadable from '../components/Loadable';
import Wrapper from '../layout/Wrapper';

// pages
const Home = Loadable(lazy(() => import('../pages/Home')));
const NotFound = Loadable(lazy(() => import('../pages/NotFound')));
const CvViewer = Loadable(lazy(() => import('../pages/CvViewer')));

const PublicRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <Wrapper children={<Home />} />
    },
    {
      path: '/cv',
      element: <Wrapper hasNavbar children={<CvViewer />} />
    },
    {
      path: '*',
      element: <Wrapper children={<NotFound />} />
    },
  ]
};

export default PublicRoutes;
