import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PrincipalLayout } from "./layouts/PrincipalLayout";
import { Home } from "./pages/Home";
import { CursoMadrid } from "./pages/CursoMadrid";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrincipalLayout />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/curso-madrid",
        element: <CursoMadrid />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
