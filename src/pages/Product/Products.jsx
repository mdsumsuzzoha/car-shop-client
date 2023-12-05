import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'


const Products = () => {


    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDelete = (id) => {
        console.log(id)
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
            {/* <h2>Products:{loadedProducts.length}</h2> */}

            <div className="grid grid-cols-3 gap-6 justify-items-center  mx-auto py-10">
                {
                    products.map(product => <div key={product._id}>
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
                                    <Link to={`updateProduct/${product._id}`}><button className="btn btn-primary">Update</button></Link>
                                    <button onClick={() => handleDelete(product._id)} className="btn btn-primary">Delete</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className="card w-92 bg-base-100 shadow-xl">
                            <figure className="px-4 pt-4">
                                <img src={product.pImage} alt="img" className="rounded-xl object-cover h-28 w-72" />
                            </figure>
                            <h2 className="card-title p-2 mx-auto text-red-600">{product.pName}</h2>
                            <div className="pb-4">
                                <hr className="w-20 mb-1 mx-auto" />
                                <hr className="w-10 mx-auto" />
                                <p className="taxt-lg font-semibold text-center ">${product.pPrice}</p>
                            </div>

                        </div> */}
                    </div>)
                }
            </div>

        </div>
    );
};

export default Products;