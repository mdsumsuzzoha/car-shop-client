import { useEffect, useState } from "react";
import Swal from "sweetalert2";


const MyCart = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('https://car-shop-server-pi.vercel.app/products/')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);


    useEffect(() => {
        fetch('https://car-shop-server-pi.vercel.app/cartItems')
            .then((response) => response.json())
            .then((data) => setCart(data))

    }, []);


    const removeFromCart = (cartItemId) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://car-shop-server-pi.vercel.app/cartItems/${cartItemId}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            })
                                .then((result) => {
                                    if (result.isConfirmed) {
                                        fetch('https://car-shop-server-pi.vercel.app/cartItems')
                                            .then((response) => response.json())
                                            .then((data) => setCart(data))

                                    }
                                })

                        }
                    })

            }
        });
    };

    const cartItems = cart.map((cartItem, ) => {
        const product = products.find((p) => p._id === cartItem.pId);
        // console.log(product);
        return (
            <div key={cartItem._id} className="grid grid-cols-2 md:grid-cols-3 gap-4 shadow-xl p-4">
                <div className=" col-span-2">
                    <div className="grid grid-cols-2 gap-4 content-center">
                        <img className="w-full h-full object-cover rounded-lg" src={product?.pImage} alt="image" />
                        <div>
                            <div className=" md:hidden font-bold ">${product?.pPrice}</div>
                            <h3 className="text-2xl font-bold">{product?.pName}</h3>
                            <h4 className="text-xl font-bold text-red-600">Brand: {product?.bName}</h4>
                            <p>Cart Date: {cartItem?.dateTime?.date}</p>
                            <button
                                onClick={() => removeFromCart(cartItem._id)}
                                className="btn btn-secondary btn-sm">Remove</button>
                        </div>
                    </div>

                </div>
                <div className="hidden md:flex text-center text-2xl font-bold h-full justify-center items-center">${product?.pPrice}</div>

            </div>


        );
    });
    // console.log(cartItems);

    return (
        <div>
            <div className="hero min-h-screen bg-base-300 md:py-10">
                <div className="shrink-0 w-full max-w-6xl shadow-2xl bg-base-200 p-4 md:p-20">
                    <div className="flex justify-between">
                        <h2 className=" font-bold text-2xl ">Shoping Cart</h2>
                        <h2 className=" font-bold text-2xl ">{cart.length} Items</h2>
                    </div>
                    <br />
                    <hr />
                    <div className="py-4 md:py-10 space-y-6 ">
                        <div className="grid grid-cols-3 gap-4 ">
                            <div className=" text-xl col-span-2">Product Details</div>
                            <div className="text-lg font-semibold text-center"></div>
                        </div>
                        <hr />
                        {
                            cartItems
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyCart;