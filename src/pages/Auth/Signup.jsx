import { useContext, useState } from "react";
import { Link, } from "react-router-dom";
import { AuthContext } from "../../utilities/AuthProvider";
import Swal from "sweetalert2";

const Signup = () => {
    const { createUser } = useContext(AuthContext)
    const [showpassword, setShowPassword] = useState(false);
    const [termsCondition, setTermsCondition] = useState(false);



    const handleRegisterForm = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const userEmail = form.get('email')
        const userPassword = form.get('password')


        if (userPassword.length < 6) {
            Swal.fire({
                text: "Password should be minimum 6 characters",
                icon: "error"
            });
            return;
        }
        else if (!/[A-Z]/.test(userPassword)) {
            Swal.fire({
                text: "Enter at least one capital letter",
                icon: "error"
            });
            return;
        }
        else if (!/[0-9]/.test(userPassword)) {
            Swal.fire({
                text: "Enter at least one digit (1-9)",
                icon: "error"
            });
            return;
        }
        else if (!/[@#^*.-]/.test(userPassword)) {
            Swal.fire({
                text: "Enter at least one special characters. Ex:@-*.^#",
                icon: "error"
            });
            return;
        }
        else if (!termsCondition == true) {
            Swal.fire({
                text: "Accept the Terms & Condition. Then try again",
                icon: "error"
            });
            return;
        }

        createUser(userEmail, userPassword)
            .then(() => {
                Swal.fire({
                    text: 'Your account create successfully',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Go Home',
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    icon: "success"
                }).then((result) => {
                    if (result.isConfirmed) {

                        window.location.href = '/';
                    }
                });
            })
            .catch((error) => {
                Swal.fire({
                    text: `${error.code}`,
                    icon: "error"
                });

            })

    }

    return (
        <div style={{
            backgroundImage: `url()`,
            backgroundSize: 'cover',
        }} className="py-4 px-2">
            <div className="hero max-h-max py-4">
                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleRegisterForm} className="card-body">
                        <h3 className="text-xl font-semibold text-primary text-center">Create a new account here</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showpassword ? 'text' : "password"} name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <label className="label label-text-alt">
                                <span><input onClick={() => setShowPassword(!showpassword)} type="checkbox" name="" id="1" /> Show Password</span>
                            </label>
                        </div>
                        <div>
                            <label className="label">
                                <p><span><input onClick={() => setTermsCondition(!termsCondition)} type="checkbox" name="terms" id="2" />Accept the Terms & Condition</span></p>
                            </label>
                            <span className="text-sm link link-hover"><Link>See the terms & condition</Link></span>
                        </div>
                        <div
                            className="form-control mt-6">
                            <input type="submit" value="Create Account" className="btn btn-primary text-lg" />
                        </div>

                    </form>
                    <div className="text-center space-y-4 mb-6 ">
                        <p>Already have an account? <span className="btn-link font-semibold texl-lg"><Link to='/signin'>Sign In</Link></span>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Signup;