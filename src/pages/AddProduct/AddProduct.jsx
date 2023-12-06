import Swal from 'sweetalert2'

const AddProduct = () => {

    const hsandleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const pName = form.pName.value;
        const bName = form.bName.value;
        const pType = form.pType.value;
        const pPrice = form.pPrice.value;
        const pDesc = form.pDesc.value;
        const pRating = form.pRating.value;
        const pImage = form.pImage.value;

        const newProduct = { pName, bName, pType, pPrice, pDesc, pRating, pImage };
        // console.log(newProduct);
        // send data to server 
        fetch('http://localhost:5000/product',
            {
                method: 'POST',
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(newProduct)
            }
        )
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product information saved successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
                // console.log(data);
            })
    }
    return (
        <div className="bg-slate-200">
            <h2>Add Product</h2>
            <form onSubmit={hsandleAddProduct} className="card-body ">
                {/* Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Product Name</span>
                    </label>
                    <input type="text" name="pName" placeholder="Name" className="input input-bordered" />
                </div>
                {/* Brand Name */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Brand</span>
                    </label>
                    <input type="text" name="bName" placeholder="Brand Name" className="input input-bordered" />
                </div>
                {/* Types */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Types</span>
                    </label>
                    <input type="text" name="pType" placeholder="Product Type" className="input input-bordered" />
                </div>
                {/* Price */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" name="pPrice" placeholder="Product Price $" className="input input-bordered" />
                </div>
                {/* Description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input type="text" name="pDesc" placeholder="Short description" className="input input-bordered" />
                </div>
                {/* Rating */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <input type="text" name="pRating" placeholder="Product Rating (Out of 5)" className="input input-bordered" />
                </div>
                {/* Image */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Image URL</span>
                    </label>
                    <input type="text" name="pImage" placeholder="Product Image URL" className="input input-bordered" />
                </div>
                {/* Submit Btn */}
                <div className="form-control mt-6">
                    <input type="submit" value="Add Product" name="" id="" className="btn btn-primary" />
                </div>
            </form>

        </div>
    );
};

export default AddProduct;