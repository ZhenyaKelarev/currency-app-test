import "./App.css"
import Home from "./pages/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NotFound from "./pages/NotFound"
import EditCurrency from "./pages/EditCurrency"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/edited",
          element: <Home />,
        },
        {
          path: "/search",
          element: <Home />,
        },
        {
          path: "/edit/:id",
          element: <EditCurrency />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
      errorElement: <NotFound />,
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
