import { Link } from "react-router-dom";

const BrandNames = () => {
    return (
        <div className=""> 
            <div className="w-9/12 mx-auto flex flex-wrap justify-center gap-6 py-10 md:py-20 ">
                <Link to={`/products/${"Toyota"}`}
                >
                    <div className="card w-56 bg-base-100 shadow-xl">
                        <figure className="px-4 pt-4 object-cover">
                            <img src="https://i.ibb.co/BHpPdv0/toyota-Logo.png" alt="img" className="rounded-xl w-32 h-20 object-fill" />
                        </figure>
                        <h2 className="card-title p-2 mx-auto text-black">Toyota</h2>
                    </div>
                </Link>
                <Link to={`/products/${'Nissan'}`}>
                    <div className="card w-56 bg-base-100 shadow-xl">
                        <figure className="px-4 pt-4">
                            <img src="https://i.ibb.co/Qdwy6s7/nissan-Logo.png" alt="img" className="rounded-xl w-32 h-20 object-fill" />
                        </figure>
                        <h2 className="card-title p-2 mx-auto text-black">Nissan</h2>

                    </div>
                </Link>
                <Link to={`/products/${'Ford'}`}>
                    <div className="card w-56 bg-base-100 shadow-xl">
                        <figure className="px-4 pt-4">
                            <img src="https://i.ibb.co/QNwyskp/fordLogo.png" alt="img" className="rounded-xl w-32 h-20 object-fill" />                     </figure>
                        <h2 className="card-title p-2 mx-auto text-black">Ford</h2>
                    </div>
                </Link>
                <Link to={`/products/${'Audi'}`}>
                    <div className="card w-56 bg-base-100 shadow-xl">
                        <figure className="px-4 pt-4">
                            <img src="https://i.ibb.co/Sxrj0Pb/audiLogo.png" alt="img" className="rounded-xl w-32 h-20 object-fill" />
                        </figure>
                        <h2 className="card-title p-2 mx-auto text-black">Audi</h2>
                    </div>
                </Link>
                <Link to={`/products/${'Honda'}`}>
                    <div className="card w-56 bg-base-100 shadow-xl">
                        <figure className="px-4 pt-4">
                            <img src="https://i.ibb.co/MM0f7Cb/honda-logo.jpg" alt="img" className="w-32 h-20 object-fill rounded-xl" />
                        </figure>
                        <h2 className="card-title p-2 mx-auto text-black">Honda</h2>
                    </div>
                </Link>
                <Link to={`/products/${'Mazda'}`}>
                    <div className="card w-56 bg-base-100 shadow-xl">
                        <figure className="px-4 pt-4">
                            <img src="https://i.ibb.co/K6d97Fy/mazda-Logo.png" alt="img" className="rounded-xl w-32 h-20 object-fill" />
                        </figure>
                        <h2 className="card-title p-2 mx-auto text-black">Mazda</h2>
                    </div>
                </Link>
                <Link to={`/products/${'Volkswagen'}`}>
                    <div className="card w-56 bg-base-100 shadow-xl">
                        <figure className="px-4 pt-4">
                            <img src="https://i.ibb.co/FBP0dyH/volkswagen-Logo.png" alt="img" className="rounded-xl w-32 h-20 object-fill" />
                        </figure>
                        <h2 className="card-title p-2 mx-auto text-black">Volkswagen</h2>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default BrandNames;