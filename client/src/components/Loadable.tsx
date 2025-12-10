import { Suspense } from 'react';

// project import
import Loader from './Loader';

const Loadable = <P extends object>(Component: React.ComponentType<P>) => (props: P) => (
  <Suspense fallback={<Loader />}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;
