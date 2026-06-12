import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";

const rout = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "a", element: <About /> },
      { path: "b", element: <Projects /> },
     
      { path: "c", element: <Skills /> },
      { path: "contact", element: <Contact /> },
      { path: "services", element: <Services /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={rout} />;
}
