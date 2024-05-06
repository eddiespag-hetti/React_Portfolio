
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import Error from './pages/Error.jsx';
import About from './components/About/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import ContactPage from './pages/ContactPage.jsx';
import Resume from './pages/Resume.jsx'


// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
{
  path: 'portfolio',
  element: <Portfolio />,
},
{
  path: 'contact',
  element: <ContactPage />,
},
{
  path: 'resume',
  element: <Resume />
}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
