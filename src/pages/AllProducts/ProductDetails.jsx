import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    // console.log(id);
    const [loadedProducts, setLoadedProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
            .then(res => res.json())
            .then(data => setLoadedProducts(data))
    }, [])
    // console.log(loadedProducts);
    const { pImage, pName, pDesc, bName, pPrice } = loadedProducts;


  
    const getStoredItems = ()=>{
        const storedCartString = localStorage.getItem('cart');
        if(storedCartString){
            return JSON.parse(storedCartString)
        }
        return[];
    }
    const saveCartItems = cart=>{
        const cartString = JSON.stringify(cart)
        localStorage.setItem('cart', cartString);

    }

    const addToLocalStorages =id=>{
        const cart = getStoredItems();
        cart.push(id)
        saveCartItems(cart);

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
                            <button className="btn btn-primary ">Delete Product</button>
                            <Link to={`/myCart`}>
                                <button onClick={()=>addToLocalStorages(loadedProducts)} className="btn btn-primary">Add to Cart</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;