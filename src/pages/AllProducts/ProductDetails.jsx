import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { getCartItems, setCartItems } from "../../utilities/LocalStorageFunctions";

const ProductDetails = () => {
    const { id } = useParams();
    const [loadedProducts, setLoadedProducts] = useState([]);
    const [cart, setCart] = useState(getCartItems);

    useEffect(() => {
        fetch(`https://car-shop-server-pi.vercel.app/products/${id}`)
            .then(res => res.json())
            .then(data => setLoadedProducts(data))
    }, [])
    const { _id, pImage, pName, pDesc, bName, pPrice } = loadedProducts;

    useEffect(() => {
        setCartItems(cart); // Update cart items in local storage when cart changes
    }, [cart]);


    const addToCart = (productId) => {
        const existingItemIndex = cart.findIndex((item) => item.id === productId);
        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += 1;
            setCart(updatedCart);
        } else {
            const productToAdd = { id: productId, quantity: 1 };
            setCart([...cart, productToAdd]);
        }
    };

    const handleAddToCart = id => {
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Add to cart"
        }).then((result) => {
            if (result.isConfirmed) {
                addToCart(id);
                Swal.fire({
                    title: "Succeded",
                    text: "Your product has been added.",
                    icon: "success"
                });
            }
        });

    }

    const handleDelete = (id) => {
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
                fetch(`https://car-shop-server-pi.vercel.app/products/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    window.history.go(-1);
                                    // setTimeout(() => {
                                    //     window.location.replace('/'); 
                                    // }, 0);
                                }
                            })

                        }
                    })

            }
        });
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md md:max-w-2xl">
                        <img src={pImage} alt="" className="my-4 w-full rounded-xl" />
                        <h1 className="text-2xl font-bold">{pName}</h1>
                        <h1 className="text-xl font-bold py-4 uppercase">{bName}</h1>
                        <p className="py-4">{pDesc}</p>
                        <p className="py-4">Price: {pPrice}</p>
                        <div className="flex justify-center gap-4">

                            <Link >
                                <button onClick={() => handleDelete(_id)} className="btn btn-secondary">Delete Product</button>
                            </Link>

                            <Link to={''}>
                                <button onClick={() => handleAddToCart(_id)} className="btn btn-primary">Add to Cart</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;