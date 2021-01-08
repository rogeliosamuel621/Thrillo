import { Register, Board, Login } from '../components/pages';

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
    path: '/board',
    component: Board,
  },
];

export default routes;
