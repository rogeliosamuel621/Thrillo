import { Register, Boards, Login } from '../components/pages';

const routes = [
  {
    path: '/',
    component: Register,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/boards',
    component: Boards,
  },
];

export default routes;
