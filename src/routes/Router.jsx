import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import UpdateProduct from "../pages/UpdateCar/UpdateCar";
// import Signin from "../pages/Auth/Signin";
// import Signup from "../pages/Auth/Signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <p>Error Page</p>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:"addProduct",
                element:<AddProduct></AddProduct>
            },
            {
                path:"updateProduct",
                element: <UpdateProduct></UpdateProduct>
            },
            // {
            //     path: '/signin',
            //     element: 
            //         <Signin></Signin>
            //     // <ProtectedRoutes>
            //     // </ProtectedRoutes>
            // },
            // {
            //     path: '/signup',
            //     element: 
            //         <Signup></Signup>
            //     // <ProtectedRoutes>
            //     // </ProtectedRoutes>
            // },

        ]

    }
]);

export default router;