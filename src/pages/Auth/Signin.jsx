import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../utilities/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const Signin = () => {

    const { signInUser, signInWithGoogle } = useContext(AuthContext);

    const [showpassword, setShowPassword] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignInForm = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const userLogInEmail = form.get('email')
        const userLogInPassword = form.get('password')
        // console.log(userLogInEmail, userLogInPassword)

        signInUser(userLogInEmail, userLogInPassword)
            .then(() => {
                navigate(location?.state ? location.state : '/')
            }
            )
            .catch(error => {
                Swal.fire({
                    title: "Oops...",
                    text: "email or password is not valid!! Try again..",
                    html: `<span clasName='text-lg'>email or password is not valid!! Try again..</span>
                <br/></b>('${error.code}')`,
                    icon: "error",
                });
                return;
            })
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                Swal.fire({
                    title: "Oops...",
                    text: "email or password is not valid!! Try again..",
                    html: `<span clasName='text-lg'>email or password is not valid!! Try again..</span>
                <br/></b>('${error.code}')`,
                    icon: "error",
                });
                return;

            })
    }
    return (
        <div style={{
            backgroundImage: `url('https://i.ibb.co/rQv4gHR/pexels-albin-berlin-919073.jpg')`,
            backgroundSize: 'cover',
        }} className="py-4 px-2"
        >
            <div className="min-h-max flex justify-center">
                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleSignInForm} className="card-body">
                        <h3 className="text-xl font-semibold text-primary text-center">SIgn In here</h3>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showpassword ? 'text' : "password"} name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label label-text-alt">
                                <span><input onClick={() => setShowPassword(!showpassword)} type="checkbox" name="" id="1" /> Show Password</span>
                            </label>
                        </div>
                        <div>
                            <label className="label">
                                <Link to='/undcons' className=" link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <input type="submit" value="Sign in" className="btn btn-primary text-lg" />
                        </div>
                        <br />
                        <p >Do not have account? <span className="btn-link font-semibold "><Link to='/signup'>Sign Up Here</Link></span></p>
                        <div className="divider">OR</div>
                        <button onClick={handleGoogleSignIn}
                            className="btn btn-outline btn-xs sm:btn-sm md:btn-md ">
                            <span className="text-lg flex items-center">
                                <FcGoogle />
                                <span className="ms-4">Sign In with Google</span>
                            </span>
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Signin;