import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
// import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import Signup from "../pages/Auth/Signup";
import Signin from "../pages/Auth/Signin";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MyCart from "../pages/MyCart/MyCart";
import PrivateRoute from "./PrivateRouter";
import AllProducts from "../pages/AllProducts/AllProducts";
import ProductDetails from "../pages/AllProducts/ProductDetails";
import UpdateProduct from "../pages/AllProducts/UpdateProduct";
// import ProductBrand from "../pages/Product/ProductBrand";
// import ProductBrandWise from "../pages/Product/ProductBrandWise";


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
                path: '/products/:cat',
                element: <AllProducts></AllProducts>
            },
            {
                path: '/details/:id',
                element: <PrivateRoute>
                    <ProductDetails></ProductDetails>
                </PrivateRoute>
            },
            {
                path: '/update/:id',
                element: <PrivateRoute>
                    <UpdateProduct></UpdateProduct>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
            },

            {
                path: "addProduct",
                element: <PrivateRoute>
                    <AddProduct></AddProduct>
                </PrivateRoute>
            },
            {
                path: "/myCart",
                element: <PrivateRoute>
                    <MyCart></MyCart>
                </PrivateRoute>,
                loader: () => fetch(`http://localhost:5000/product/`)
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