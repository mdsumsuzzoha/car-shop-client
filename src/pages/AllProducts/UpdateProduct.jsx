import { useLoaderData, } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {


    const product = useLoaderData();
    const { _id, pName, bName, pType, pPrice, pDesc, pRating, pImage } = product;

    const handleUpdateProduct = e => {
        e.preventDefault();
        const form = e.target;
        const pName = form.pName.value;
        const bName = form.bName.value;
        const pType = form.pType.value;
        const pPrice = form.pPrice.value;
        const pDesc = form.pDesc.value;
        const pRating = form.pRating.value;
        const pImage = form.pImage.value;

        const updateProduct = { pName, bName, pType, pPrice, pDesc, pRating, pImage };
        // send data to server 
        fetch(`https://car-shop-server-pi.vercel.app/products/${_id}`,
            {
                method: 'PUT',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(updateProduct)
            }
        )
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    // form.value.reset();
                    Swal.fire({
                        title: 'Success!',
                        text: 'Updated the product information successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            form.reset();
                            window.history.back();
                        }
                    })

                }
            })

    }


    return (
        <div>
            <h2 className="text-center font-bold text-3xl my-6">Update Products</h2>
            <form onSubmit={handleUpdateProduct} className="card-body ">
                {/* Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" name="pName" defaultValue={pName} placeholder="Name" className="input input-bordered" />
                </div>
                {/* Brand Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Brand</span>
                    </label>
                    <input type="text" name="bName" defaultValue={bName} placeholder="Brand Name" className="input input-bordered" />
                </div>
                {/* Types */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Types</span>
                    </label>
                    <input type="text" name="pType" defaultValue={pType} placeholder="Product Type" className="input input-bordered" />
                </div>
                {/* Price */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name="pPrice" defaultValue={pPrice} placeholder="Product Price $" className="input input-bordered" />
                </div>
                {/* Description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" name="pDesc" defaultValue={pDesc} placeholder="Short description" className="input input-bordered" />
                </div>
                {/* Rating */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating out of 5</span>
                    </label>
                    <input type="text" name="pRating" defaultValue={pRating} placeholder="Product Rating (Out of 5)" className="input input-bordered" />
                </div>
                {/* Image */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input type="text" name="pImage" defaultValue={pImage} placeholder="Product Image URL" className="input input-bordered" />
                </div>
                {/* Submit Btn */}
                <div className="form-control mt-6">
                    <input type="submit" value="Update Product" name="" id="" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
};

export default UpdateProduct;