import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Register from "./components/Register";
import PortFolio from "./components/Portfolio";
import UserDetails from "./components/UserDetails";
export const appRoutes=[
    
    {path:'/login',element: <Login/>},
    {path:'/register',element: <Register/>},
    {path:'/userdetails',element: <UserDetails/>},
    {path:'/portfolio/:uid',element: <PortFolio/>},
]