import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import BgoEvents from "../components/BgoEvents/BgoEvents";
import Resources from "../components/Resources/Resources";
import Gallery from "../components/Gallery/Gallery";
import Contact from "../components/Contact/Contact";


const router = createBrowserRouter([
    {
          path: "/",
          element: <App></App>,
          errorElement: <Error></Error>,
          children:[
            {
              path: "/",
              element : <Home></Home>,
            },
            {
              path: "/about",
              element: <About></About>,
            },
            {
              path: "/bgoevents",
              element: <BgoEvents></BgoEvents>,
            },
            {
              path: "/resources",
              element: <Resources></Resources>,
            },
            {
              path: "/gallery",
              element: <Gallery></Gallery>,
            },
            {
              path: "/contact",
              element: <Contact></Contact>,
            }
          ]
    },
      ]);

export default router;