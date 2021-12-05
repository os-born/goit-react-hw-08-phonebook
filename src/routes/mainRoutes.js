import ContactsPage from '../pages/ContactsPage';
import HomePage from '../pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import LoginPage from '../pages/LoginPage';

const mainRoutes = [
  {
    name: 'home',
    path: '/',
    component: HomePage,
    exact: true,
    isPrivate: false,
    isRestricted: false,
  },
  {
    name: 'contacts',
    path: '/contacts',
    component: ContactsPage,
    exact: true,
    isPrivate: true,
    isRestricted: false,
  },
  {
    name: 'register',
    path: '/register',
    component: RegisterPage,
    exact: true,
    isPrivate: false,
    isRestricted: true,
  },
  {
    name: 'login',
    path: '/login',
    component: LoginPage,
    exact: true,
    isPrivate: false,
    isRestricted: true,
  },
];

export default mainRoutes;
