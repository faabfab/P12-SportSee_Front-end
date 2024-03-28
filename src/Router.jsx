import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import Layout from './layouts/Layout'
import Home from './pages/Home'
import Test from './pages/Test'

/**
 * Router de l'application
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/test',
        element: <Test />,
      },
    ],
  },
])

export const Router = () => <RouterProvider router={router} />
