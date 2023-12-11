import { useEffect, useState } from "react";
import { getCartItems, setCartItems } from "../../utilities/LocalStorageFunctions";


const MyCart = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState(getCartItems);

    useEffect(() => {
        fetch('https://car-shop-server-pi.vercel.app/products/')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        setCartItems(cart); 
    }, [cart]);

    const removeFromCart = (productId) => {
        const existingItemIndex = cart.findIndex((item) => item.id === productId);
        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            if (updatedCart[existingItemIndex].quantity > 1) {
                updatedCart[existingItemIndex].quantity -= 1;
            } else {
                updatedCart.splice(existingItemIndex, 1);
            }
            setCart(updatedCart);
        }
    };
    // console.log(cart);

    const cartItems = cart.map((cartItem, idx) => {
        const product = products.find((p) => p._id === cartItem.id);
        // console.log(cartItem);
        // console.log(product);
        return (
            <tr
            key={cartItem.id}
                className="font-bold"
            >
                <td className="border text-center px-2">{idx + 1}</td>
                <td className="border text-start px-2">{product?.pName} </td>
                <td className="border text-center px-2">{product?.bName}</td>
                <td className="border text-end px-2">${product?.pPrice}</td>
                <td className="border text-center px-2">{cartItem.quantity}</td>
                <td className=" border text-center  text-red-500 px-2"><button onClick={() => removeFromCart(cartItem.id)} className="bg-yellow-400 rounded-lg px-1">Remove</button></td>
            </tr>
        );
    });
    // console.log(cartItems);

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="card shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
                    <h2 className="card-body font-bold text-2xl text-center">Cart Product Details</h2>
                    <div className="px-2 pb-6 md:px-6">
                        <table className="table-fixed mx-auto border-collapse border border-slate-400">
                            <thead>
                                <tr className="text-lg">
                                    <th className="border  text-start px-2 md:h-14">SL</th>
                                    <th className="border  text-start px-2 md:w-72">Model Name</th>
                                    <th className="border  text-center px-2 md:w-32">Brand</th>
                                    <th className="border  text-center px-2 md:w-32">Price</th>
                                    <th className="border  text-center px-2 md:w-32">Unit</th>
                                    <th className="border  text-center px-2">Action</th>
                                </tr>
                            </thead>
                            <tbody> 
                                {cartItems}
                            </tbody>
                        </table>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyCart;