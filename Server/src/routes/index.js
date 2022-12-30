
import userRoutesConfigure from './userRoutes.js';
import categoryRoutesConfigure from './categoryRoutes.js';

const configureAllRoutes = (app) => {
  userRoutesConfigure(app);
  categoryRoutesConfigure(app);
};

export default configureAllRoutes;