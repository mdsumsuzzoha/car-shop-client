
const MyCart = () => {


    const storedCartString = localStorage.getItem('cart');
    const getStoredItems = JSON.parse(storedCartString);

    // console.log(getStoredId)

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
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    getStoredItems.map((item, idx) => <tr
                                        key={item._id}
                                        className="font-bold"
                                    >
                                        <td>{idx + 1}. {item.pName}</td>
                                        <td>{item.bName}</td>
                                        <td>{item.pPrice}</td>
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