import { createBrowserRouter } from 'react-router-dom';

import AbsoluteRoutes from './AbsoluteRoutes';

const router = createBrowserRouter([AbsoluteRoutes], { basename: import.meta.env.VITE_APP_BASE_NAME });

export default router;
