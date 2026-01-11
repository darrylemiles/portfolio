import { lazy } from 'react';

import Loadable from '../components/Loadable';
import Wrapper from '../layout/Wrapper';

// pages
const Home = Loadable(lazy(() => import('../pages/Home')));
const ProjectDetails = Loadable(lazy(() => import('../pages/ProjectDetails')));
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
      path: '/projects',
      children: [
        {
          path: ':title',
          element: <Wrapper children={<ProjectDetails />} />
        },
      ]
    },
    {
      path: '/cv',
      element: <Wrapper children={<CvViewer />} />
    },
    {
      path: '*',
      element: <Wrapper children={<NotFound />} />
    },
  ]
};

export default PublicRoutes;
