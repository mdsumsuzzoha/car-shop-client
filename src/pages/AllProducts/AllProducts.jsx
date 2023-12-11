import { Link, useLoaderData, useParams, } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ProductNotFound from "./ProductNotFound";

const AllProducts = () => {

    const allProducts = useLoaderData();
    const { cat } = useParams();

    const filteredProduct = allProducts.filter(product => product.bName.toLowerCase() == cat.toLowerCase());
    if (filteredProduct.length < 1) {
        return <ProductNotFound></ProductNotFound>
    }

    return (
        <div>
            <Carousel>
                {
                    filteredProduct.slice(0, 3).map(product => <div
                        key={product._id}
                        className="max-h-screen min-h-screen">
                        <img src={product.pImage} className="h-full w-full object-cover" />
                        <p className="legend">{product.pName}</p>
                    </div>)
                }

            </Carousel>
            <div className="grid  md:grid-cols-4 gap-6 justify-items-center mx-auto py-10">
                {
                    filteredProduct.map(product => <div key={product._id}
                    >
                        <div className="card  h-full bg-base-100 shadow-xl">
                            <figure><img src={product.pImage} alt="Shoes" className="object-cover w-full min-h-full" /></figure>
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
                                        <button className="btn btn-info ">Details</button>
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