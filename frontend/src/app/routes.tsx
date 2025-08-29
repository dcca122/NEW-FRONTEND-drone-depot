import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from '@/pages/Home';
import HowItWorks from '@/pages/HowItWorks';
import Pilots from '@/pages/Pilots';
import Concierge from '@/pages/Concierge';
import RfpRequest from '@/pages/RfpRequest';
import ResourceHub from '@/pages/ResourceHub';
import ResourcePost from '@/pages/ResourcePost';
import NotFound from '@/pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'how-it-works', element: <HowItWorks /> },
      { path: 'pilots', element: <Pilots /> },
      { path: 'concierge', element: <Concierge /> },
      { path: 'request', element: <RfpRequest /> },
      { path: 'resources', element: <ResourceHub /> },
      { path: 'resources/:slug', element: <ResourcePost /> }
    ]
  }
]);
