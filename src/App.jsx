import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Landing from "./pages/landing";
import About from "./pages/about";
import ContactUs from "./pages/contact-us";
import Collection from "./pages/collection";
import RootLayout from "./layouts/rootLayout";
import HowItWorks from "./pages/landing/components/services";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Landing />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "collection",
          element: <Collection />,
        },
        {
          path: "contact-us",
          element: <ContactUs />,
        },
        {
          path: "howitworks",
          element: <HowItWorks />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
