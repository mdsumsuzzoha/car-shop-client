import { useEffect, useState } from "react";
import { Link, useParams, } from "react-router-dom";

const AllProducts = () => {
    const { cat } = useParams();
    // console.log(cat);

    const [loadedProducts, setLoadedProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/product/`)
            .then(res => res.json())
            .then(data => setLoadedProducts(data))
    }, [])
    // console.log(loadedProducts);
    // const productId = loadedProducts.map(({ _id }) => _id);
    // console.log(productId);

    // const {Id} = loadedProducts.map(p => p._id);
    // console.log(productId);


    const filteredProduct = loadedProducts.filter(product => product.bName.toLowerCase() == cat.toLowerCase());
    // console.log(filteredProduct);

    return (
        <div>
            <div className="grid grid-cols-3 gap-6 justify-items-center  mx-auto py-10">
                {
                    filteredProduct.map(product => <div key={product._id}
                    >
                        <div className="card card-compact  bg-base-100 shadow-xl">
                            <figure><img src={product.pImage} alt="Shoes" className="object-cover w-full max-h-min" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{product.pName}</h2>
                                <p>Brand: {product.bName}</p>
                                <p>Type: {product.pType}</p>
                                <p>{product.pPrice}</p>
                                <p>Rating: {product.pRating} out of 5</p>
                                <div className="card-actions justify-center">
                                    <Link to={`/details/${product._id}`}>
                                        <button className="btn btn-primary">Details</button>
                                    </Link>
                                    <Link to={`/update/${product._id}`}>
                                        <button className="btn btn-primary">Update</button>
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