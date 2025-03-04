import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Pages/Home.jsx'
import Services from './Pages/Services.jsx'
import AboutUs from './Pages/AboutUs.jsx'
import ContactUs from './Pages/ContactUs.jsx'
import Gallery from './Pages/Gallery.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Home",
    element: <Home/>,
  },
  {
    path: "/Gallery",
    element: <Gallery/>,
  },
  {
    path: "/Services",
    element: <Services/>,
  },
  {
    path: "/ContactUs",
    element: <ContactUs />,
  },
  {
    path: "/AboutUs",
    element: <AboutUs/>,
  },
]);

createRoot(document.getElementById('root')).render(

  <StrictMode>
    
    <RouterProvider router={router} />
  </StrictMode>,
)
