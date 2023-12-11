import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import AddProduct from "../pages/AddProduct/AddProduct";
import Signup from "../pages/Auth/Signup";
import Signin from "../pages/Auth/Signin";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import MyCart from "../pages/MyCart/MyCart";
import PrivateRoute from "./PrivateRouter";
import AllProducts from "../pages/AllProducts/AllProducts";
import ProductDetails from "../pages/AllProducts/ProductDetails";
import UpdateProduct from "../pages/AllProducts/UpdateProduct";
import Contact from "../pages/Contact/Contact";
import About from "../pages/About/About";
import Test from "../pages/Test";
import BrandNames from "../pages/BrandNames/BrandNames";


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
                element:
                    <PrivateRoute>
                        <AddProduct></AddProduct>
                    </PrivateRoute>
            },
            {
                path: "/products/:cat",
                element: <AllProducts></AllProducts>,
                loader: () => fetch("https://car-shop-server-pi.vercel.app/products/"),
            },

            {
                path: '/brands',
                element: <BrandNames></BrandNames>
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
                loader: ({ params }) => fetch(`https://car-shop-server-pi.vercel.app/products/${params.id}`)
            },             


            {
                path: "/myCart",
                element: <PrivateRoute>
                    <MyCart></MyCart>
                </PrivateRoute>,
                loader: () => fetch(`https://car-shop-server-pi.vercel.app/products/`)
            },
            {
                path: '/signin',
                element: <Signin></Signin>

            },
            {
                path: '/signup',
                element: <Signup></Signup>


            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/test',
                element: <Test></Test>
            }

        ]

    }
]);

export default router;