import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Blog from "../Pages/Blog/Blog";
import Destination from "../Pages/Destination/Destination";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch("https://odyssey-server.vercel.app")
            },
            {
                path: '/home',
                element: <Home />,
                loader: () => fetch("https://odyssey-server.vercel.app")

            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/blog',
                element: <PrivateRoute> <Blog /> </PrivateRoute>,
                loader: () => fetch('https://odyssey-server.vercel.app/catergories'),
            },
            {
                path: 'destination/:id',
                element: <Destination />,
                loader: ({ params }) => fetch(`https://odyssey-server.vercel.app/destination/${params.id}`)
            },

            {
                path: '*',
                element: <div> NOT FOUND</div>
            },

        ]
    }
])