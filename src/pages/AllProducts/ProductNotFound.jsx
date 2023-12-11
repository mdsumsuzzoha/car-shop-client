import { Link } from "react-router-dom";

const ProductNotFound = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-gradient-to-br from-blue-300 via-purple-400 to-pink-300">
                <div className="card shrink-0 w-full max-w-lg p-20  shadow-2xl bg-base-100">
                    <div className="text-center text-gray-800 space-y-10">
                        <h1 className="text-6xl font-bold mb-2">Oops!</h1>
                        <h2 className="text-3xl mb-4">Product is Not Found</h2>
                        <p className="text-lg text-gray-600">
                            We are sorry, The product you are looking for currently is not available.
                        </p>
                        <p className="mt-4">
                            Return to the <Link to="/" className="text-blue-500">homepage</Link>.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProductNotFound;