import { Register, Login,Boards, Board } from '../components/pages';

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
];

export default routes;
