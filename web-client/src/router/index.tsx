import { createHashRouter, RouterProvider } from 'react-router-dom';
import { App } from '../App';
import { Home } from '../components/Home';
import { Todos } from '../components/Todos';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'my-todos',
        element: <Todos />
      }
    ]
  }
]);

export const RouterComponent = () => (
  <RouterProvider router={router} />
);
