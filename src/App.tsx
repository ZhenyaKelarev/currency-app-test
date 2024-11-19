import "./App.css"
import Home from "./pages/Home"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import NotFound from "./pages/NotFound"
import EditCurrency from "./pages/EditCurrency"
import EditedCurrencies from "./pages/EditedCurrencies"
import Layout from "./components/Layout"
import SearchRates from "./pages/Search"

function App() {
  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "",
            element: <Home />,
          },
          {
            path: "edited",
            element: <EditedCurrencies />,
          },
          {
            path: "search",
            element: <SearchRates />,
          },
          {
            path: "edit/:id",
            element: <EditCurrency />,
          },
        ],
      },
      {
        path: "*",
        element: <NotFound />,
        errorElement: <NotFound />,
      },
    ],
    {
      future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      },
    }
  )

  return (
    <>
      <RouterProvider
        future={{
          v7_startTransition: true,
        }}
        router={router}
      />
    </>
  )
}

export default App
