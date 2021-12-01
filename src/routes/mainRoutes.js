import ContactsPage from '../pages/ContactsPage';
import HomePage from '../pages/HomePage';
import AuthPage from '../pages/AuthPage';

const mainRoutes = [
  {
    name: 'home',
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    name: 'my contacts',
    path: '/contacts',
    exact: true,
    component: ContactsPage,
  },
  {
    name: 'sign Up',
    path: '/signup',
    exact: true,
    component: AuthPage,
  },
  {
    name: 'sign In',
    path: '/signin',
    exact: true,
    component: AuthPage,
  },
];

export default mainRoutes;
