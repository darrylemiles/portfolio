import { createBrowserRouter } from 'react-router-dom';

import PublicRoutes from './PublicRoutes';

const router = createBrowserRouter([PublicRoutes], { basename: import.meta.env.VITE_APP_BASE_NAME });

export default router;
