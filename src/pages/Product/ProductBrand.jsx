import { useEffect, useState } from "react";

const ProductBrand = () => {
    const [products, setProducts] = useState([]);

    const brands = [...new Set(products.map(product => product.bName))];

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <div className="flex gap-10 py-10">
                {brands.map((brand, idx) => <div key={idx}
                className="card w-56 bg-base-100 shadow-xl">{brand}</div>)}

            </div>

            {/* <div className="w-9/12 mx-auto flex gap-6">
                <div className="card w-56 bg-base-100 shadow-xl">
                    <figure className="px-4 pt-4 object-cover">
                        <img src="https://i.ibb.co/BHpPdv0/toyota-Logo.png" alt="img" className="rounded-xl" />
                    </figure>
                    <h2 className="card-title p-2 mx-auto">Toyota</h2>

                </div>
                <div className="card w-56 bg-base-100 shadow-xl">
                    <figure className="px-4 pt-4">
                        <img src="https://i.ibb.co/Qdwy6s7/nissan-Logo.png" alt="img" className="rounded-xl" />
                    </figure>
                    <h2 className="card-title p-2 mx-auto">Nissan</h2>

                </div>
                <div className="card w-56 bg-base-100 shadow-xl">
                    <figure className="px-4 pt-4">
                        <img src="https://i.ibb.co/QNwyskp/fordLogo.png" alt="img" className="rounded-xl" />
                    </figure>
                    <h2 className="card-title p-2 mx-auto">Ford</h2>

                </div>
                <div className="card w-56 bg-base-100 shadow-xl">
                    <figure className="px-4 pt-4">
                        <img src="https://i.ibb.co/Sxrj0Pb/audiLogo.png" alt="img" className="rounded-xl" />
                    </figure>
                    <h2 className="card-title p-2 mx-auto">Audi</h2>

                </div>
                <div className="card w-56 bg-base-100 shadow-xl">
                    <figure className="px-4 pt-4">
                        <img src="https://i.ibb.co/K6d97Fy/mazda-Logo.png" alt="img" className="rounded-xl" />
                    </figure>
                    <h2 className="card-title p-2 mx-auto">Mazda</h2>

                </div>
                <div className="card w-56 bg-base-100 shadow-xl">
                    <figure className="px-4 pt-4">
                        <img src="https://i.ibb.co/FBP0dyH/volkswagen-Logo.png" alt="img" className="rounded-xl" />
                    </figure>
                    <h2 className="card-title p-2 mx-auto">Volkswagen</h2>

                </div>
            </div> */}
            
        </div>
    );
};

export default ProductBrand;