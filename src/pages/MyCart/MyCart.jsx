import { useState } from "react";

const MyCart = () => {

    const storedCartString = localStorage.getItem('cart');
    const getStoredItems = JSON.parse(storedCartString);

    const [cartItemsLS, setCartItemsLS] = useState(getStoredItems);

    const handleDeleteCart = (id) => {
        const remainingStoredItems = cartItemsLS.filter(items => items._id !== id)
        const cartString = JSON.stringify(remainingStoredItems)
        localStorage.setItem('cart', cartString)
        const storedCartString = localStorage.getItem('cart');
        const getStoredItems = JSON.parse(storedCartString);
        setCartItemsLS(getStoredItems);
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <h2 className="card-body font-bold text-2xl text-center">Cart Product Details</h2>
                    <div className="p-6">
                        <table className="table-fixed mx-auto">
                            <thead>
                                <tr className="text-lg ">
                                    <th className="text-start w-64 h-14">Model Name</th>
                                    <th className="text-start w-32">Brand</th>
                                    <th className="text-end">Price</th>
                                    <th className="text-end w-10">X</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItemsLS.map((item, idx) => <tr
                                        key={idx}
                                        className="font-bold"
                                    >
                                        <td>{idx + 1}. {item.pName}</td>
                                        <td>{item.bName}</td>
                                        <td className="text-end">${item.pPrice}</td>
                                        <td className="text-end text-red-500"><button onClick={() => handleDeleteCart(item._id)}>X</button></td>
                                    </tr>
                                    )}
                            </tbody>
                        </table>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyCart;