import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../utilitis/AuthProvider";
import regBgImg from '../../assets/images/signupBg.jpg'
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

const Signup = () => {
    const { createUser } = useContext(AuthContext)
    const [regError, setRegError] = useState();
    const [success, setSuccess] = useState('');
    const [showpassword, setShowPassword] = useState(false);




    const handleRegisterForm = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const userRegEmail = form.get('email')
        const userRegPassword = form.get('password')
        setRegError('');
        setSuccess('');


        if (userRegPassword.length < 6) {
            toast.warn('Weak-password!! Password should be at least 6 or more characters');
            return;
        }
        else if (!/[A-Z]/.test(userRegPassword)) {
            toast.warn("Enter at least one capital letter");
            return;
        }
        else if (!/[0-9]/.test(userRegPassword)) {
            toast.warn("Enter at least one digit");
            return;
        }
        else if (!/[@#^*.-]/.test(userRegPassword)) {
            toast.warn("Enter at least one special characters. Ex: @#^*.-");
            return;
        }

        createUser(userRegEmail, userRegPassword)
            .then(() => {
                setSuccess('Your account create successfully');
            })
            .catch((error) => {
                setRegError(error.code)
            })

    }


    return (
        <div style={{
            backgroundImage: `url(${regBgImg}`,
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
                                <p><span><input type="checkbox" name="terms" id="2" required /> Accept the Terms & Condition</span></p>
                            </label>
                            <span className="text-sm link link-hover"><Link to='/undcons'>See the terms & condition</Link></span>
                        </div>
                        {success && <div>
                            <label className="label">
                                <p className="text-green-600 font-semibold texl-lg text-center bg-emerald-200 rounded-lg py-2">{success}
                                <br /><Link to='/' className="btn-link">Go Home</Link></p>

                            </label>
                        </div>
                        }
                        {regError && <div>
                            <label className="label">
                                <p className="text-red-500 text-center bg-yellow-100 rounded-lg py-2">{regError}</p>
                            </label>
                        </div>
                        }

                        <div
                            className="form-control mt-6">
                            <input type="submit" value="Register" className="btn btn-primary" />
                        </div>

                    </form>
                    <div className="text-center space-y-4 mb-6 ">
                        <p>Already have an account? <span className="btn-link font-semibold texl-lg"><Link to='/login'>Login</Link></span>
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Signup;