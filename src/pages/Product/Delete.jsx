import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";


const ProductBrandWise = () => {
    const loadedProducts = useLoaderData();

    // const [loadedProducts, setLoadedProducts]= useState([]);
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/product/`)
    //     .then(res => res.json())
    //     .then(data=> setLoadedProducts(data))
    // },[])
    console.log(loadedProducts);

    const { value } = useParams();
    console.log(value);

    const [products, setProducts] = useState(loadedProducts);
    const { id } = useParams();
    const filteredProduct = products.filter(product => product.bName.toLowerCase() == id.toLowerCase());
    if (filteredProduct.length < 1) {
        return (
            <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-300 via-purple-400 to-pink-300">
                <div className="text-center text-gray-800">
                    <h1 className="text-6xl font-bold mb-2">404</h1>
                    <h2 className="text-3xl mb-4">Product Not Found</h2>
                    <p className="text-lg text-gray-600">
                        Sorry, the page you are looking for does not exist.
                    </p>
                    <p className="mt-4">
                        Return to the <Link to="/" className="text-blue-500">homepage</Link>.
                    </p>
                </div>
            </div>)
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
                console.log('delete confirm')
                fetch(`http://localhost:5000/product/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            fetch('http://localhost:5000/product')
                                .then(res => res.json())
                                .then(data => setProducts(data))

                        }
                    })

            }
        });
    }

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
                                    <button className="btn btn-primary">Details</button>
                                    <Link
                                        to={`updateProduct/${product._id}`}
                                        // to='/updateProduct'
                                        state={product._id}><button className="btn btn-primary">Update</button></Link>
                                    <button
                                        onClick={() => handleDelete(product._id)} className="btn btn-primary">Delete</button>
                                </div>
                            </div>
                        </div>


                    </div>)
                }

            </div>

        </div>
    );
};

export default ProductBrandWise;