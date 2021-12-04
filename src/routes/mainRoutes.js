import ContactsPage from '../pages/ContactsPage';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';

const mainRoutes = [
  {
    name: 'home',
    path: '/',
    component: HomePage,
  },
  {
    name: 'contacts',
    path: '/contacts',
    component: ContactsPage,
  },
  {
    name: 'register',
    path: '/register',
    component: RegisterPage,
  },
  {
    name: 'login',
    path: '/login',
    component: LoginPage,
  },
];

export default mainRoutes;
