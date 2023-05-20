import DashBoard from '../containers/Dashboard/Dashboard';
import Tabs from '../containers/Tabs/Tabs';
export const routes = [
  {
    path: '/',
    component: DashBoard,
    exact: true,
  },
  {
    path: '/Portal/:tab',
    component: Tabs,
    exact: true,
  },
];
