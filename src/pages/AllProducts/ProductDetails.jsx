import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">

                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <img src={pImage} alt="" className="py-4 w-full " />
                        <h1 className="text-2xl font-bold">{pName}</h1>
                        <h1 className="text-xl font-bold py-4 uppercase">{bName}</h1>
                        <p className="py-4">{pDesc}</p>
                        <p className="py-4">Price: {pPrice}</p>
                        <div className="flex justify-center gap-4">
                            <button className="btn btn-primary ">Delete Product</button>
                            <button className="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;