import { Register, Login, Boards, Board, About } from '../components/pages';

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
  {
    path: '/board',
    component: Board,
  },
  {
    path: '/about',
    component: About,
  },
];

export default routes;
