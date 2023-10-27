import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Root from "./pages/Root";
import CountryPage from "./pages/CountryPage";
import CountryList from "./pages/CountryList";
import CountryItemPage from "./pages/CountryItemPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <CountryPage />,
        children: [{ index: true, element: <CountryList /> }],
      },
      { path: "/:name", element: <CountryItemPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
