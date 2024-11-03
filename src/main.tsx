import { RouterProvider, createHashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './pages/home';
import Report from './pages/report';
import Discover from './pages/discover';
import Log from './pages/log';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/report',
        element: <Report />,
      },
      {
        path: '/discover',
        element: <Discover />,
      },
      {
        path: '/logs',
        element: <Log />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
);
