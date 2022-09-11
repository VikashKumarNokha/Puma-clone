import { useState } from "react";
import "../css/Account.css"
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { auth } from '../components/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from "react-redux";
export const Account = () => {
    
    const [useremail, setUserEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const [firstname, setFirstName] = useState(null);
    const [lastname, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [pass, setPass] = useState(null);

    const [account, setAccount] = useState("login")
    const [regiser, setResgister] = useState("")

    const navigate = useNavigate()

    function signUp(email, pass) {
        return createUserWithEmailAndPassword(auth, email, pass);
    }

    const handleSignup = async (e) => {
        if (firstname && lastname && email && pass) {
            try {
                await signUp(email, pass);
                toast.success('Register successfull', {
                    position: "top-center",
                    })
                    setAccount("login")
                    setResgister("")
                // navigate("/")
            } catch (err) {
                console.log(err.message)
                toast.error(err.message, {
                    position: "top-center",
                    });
                // alert(err.message)
            }
        } else {
            toast.error('Fill all the details', {
                position: "top-center",
                });
        }
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
  


    const handleLogin = async (e) => {
        if (useremail && password) {
            try {
                await login(useremail, password);
                toast.success('Login successfull', {
                    position: "top-center",
                    })
                navigate("/")
            } catch (err) {
                console.log(err.message)
                toast.error(err.message, {
                    position: "top-center",
                    });
                // alert(err.message)
            }
        } else {
            toast.error('Fill all the details', {
                position: "top-center",
                });
        }
    }


    return (
        <div className="account-page">
            <div className="my_account_heading">
                <div>MY ACCOUNT</div>
            </div>

            <div className="auth_div">
                <div className="left_div">
                    <div className="top">
                        <div className="login_div" id={`${account}`} onClick={() => {
                            setAccount("login")
                            setResgister("")
                        }}>Login</div>
                        <div className="signup_div" id={`${regiser}`} onClick={() =>{
                            setAccount("")
                            setResgister("register")
                        }}>Create Account</div>
                    <div className="line"></div>
                    <div className="line"></div>
                    </div>
                    
                    {account == "login" ?
                    <div className="login-input-div">
                        <div className="mid">
                        <input type="text" placeholder=" EMAIL" className="user_name" required={true} onChange={(e)=> setUserEmail(e.target.value)} />
                        <input type="text" placeholder=" PASSWORD" className="login_password" required="true" onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div className="bottom">
                        <div className="check_box">
                            <div>
                            <input type="checkbox" />
                            </div>
                            <div>
                            <span>Remember me</span>
                            </div>
                        </div>
                        <div className="login_btn_div">
                            <div>
                            {/* <Link to="/"><button  className="login_btn" onClick={CheckInputs} >Login</button></Link> */}
                            <button  className="login_btn" onClick={handleLogin} >Login</button>
                            </div>
                            <div>
                            <Link to="">FORGOTTEN YOUR PASSWORD?</Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    :
                    <div className="login-input-div">
                        <div className="mid">
                        <input type="text" placeholder=" FIRST NAME" className="user_name" onChange={(e)=> setFirstName(e.target.value)}  />
                            <input type="text" placeholder=" LAST NAME" className="login_password" onChange={(e)=> setLastName(e.target.value)}  />
                            <input type="text" placeholder=" EMAIL" className="login_password" onChange={(e)=> setEmail(e.target.value)}  />
                            <input type="text" placeholder=" PASSWORD" className="login_password" onChange={(e)=> setPass(e.target.value)}  />
                        </div>

                        <div className="bottom">
                        <div className="login_btn_div">
                            <button className="login_btn" style={{width : "410px"}} onClick={handleSignup}>CREATE ACCOUNT</button>
                        </div>
                        </div>
                    </div>
                    }

                </div>
                <hr className="hr"/>
                <div className="right_div">
                    <div className="right_top">
                    <div>
                        <h3>Check Order / Initiate return</h3>
                    </div>
                    <div>
                        See your order even if you are not a registered user. Enter the
                        order number and phone number.
                    </div>
                    </div>
                    <div className="right_mid">
                    <input type="text" placeholder=" ORDER NUMBER" />
                    <input type="text" placeholder=" ORDER PHONE" />
                    </div>
                    <div className="right_bottom">
                    <button>CHECK STATUS</button>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    )
}