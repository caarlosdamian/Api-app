import Home from "../pages/Home";
import Details from "../pages/Details";
export const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/details/:id",
    component: Details,
  },
  {
    component: Home,
  },
];
