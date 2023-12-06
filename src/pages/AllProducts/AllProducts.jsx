import { useEffect, useState } from "react";
import { Link, useParams, } from "react-router-dom";
import ErrorPage from "../ErrorPage/ErrorPage";

const AllProducts = () => {
    const { cat } = useParams();

    const [loadedProducts, setLoadedProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/product/`)
            .then(res => res.json())
            .then(data => setLoadedProducts(data))
    }, [])


    const filteredProduct = loadedProducts.filter(product => product.bName.toLowerCase() == cat.toLowerCase());
    console.log(filteredProduct.length)
    if(filteredProduct.length<1){
        return <ErrorPage></ErrorPage>
    }

    return (
        <div>
            <div className="grid  md:grid-cols-3 gap-6 justify-items-center  mx-auto py-10">
                {
                    filteredProduct.map(product => <div key={product._id}
                    >
                        <div className="card w-96 h-full bg-base-100 shadow-xl">
                            <figure><img src={product.pImage} alt="Shoes" className="object-cover w-full max-h-min" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.pName}</h2>
                                <p>Brand: {product.bName}</p>
                                <p>Type: {product.pType}</p>
                                <p>Price: ${product.pPrice}</p>
                                <p>Rating: {product.pRating} out of 5</p>
                                <div className="card-actions justify-center">
                                    <Link to={`/update/${product._id}`}>
                                        <button className="btn btn-accent">Update</button>
                                    </Link>
                                    <Link to={`/details/${product._id}`}>
                                        <button className="btn btn-info">Details</button>
                                    </Link>



                                    {/* <button
                                        onClick={() => 'handleDelete'(product._id)} className="btn btn-primary">Delete</button> */}
                                </div>
                            </div>
                        </div>


                    </div>)
                }

            </div>
        </div>
    );
};

export default AllProducts;