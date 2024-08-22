import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { PrincipalLayout } from './layouts/PrincipalLayout'
import { Home } from './pages/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PrincipalLayout />,
    children: [
      {
        index: true,
        path: '/',
        element: <Home />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
