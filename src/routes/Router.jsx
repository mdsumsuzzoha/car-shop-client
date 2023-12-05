import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import Signup from "../pages/Auth/Signup";
import Signin from "../pages/Auth/Signin";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: "addProduct",
                element: <AddProduct></AddProduct>
            },
            {
                path: "updateProduct/:id",
                element: <UpdateProduct></UpdateProduct>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
            },
            {
                path: '/signin',
                element: <Signin></Signin>
                // <ProtectedRoutes>
                // </ProtectedRoutes>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
                    
                // <ProtectedRoutes>
                // </ProtectedRoutes>
            },

        ]

    }
]);

export default router;