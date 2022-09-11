import "../css/Checkout.css"
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { DelteCart, GetCart } from "../Redux/cart/action";
import { Link, useNavigate } from "react-router-dom";
import CircularIndeterminate from "../components/Loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Checkout = () => {

    
    const [checkoutdata, setCheckoutData] = useState({
        "firstName" : "",
        "lastName": "",
        "pin": "",
        "Address1": "",
        "Address2": "",
        "city": "",
        "state": "",
        "Country": "",
        "email": "",
        "mob" : ""
    })


    let products = useSelector((state) => state.carts.cart)
    let loading = useSelector((state) => state.carts.isLoading)
    console.log("products", products)
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(GetCart())
    },[])
    
    const subtotal = products.reduce(function (a, v) {
        return a + v.price
    },0)
    // console.log(subtotal)
    const Total = subtotal + (products==0 ? 0 : 100);

  

    const handleChange = (e) => {
        setCheckoutData({
            ...checkoutdata,
            [e.target.name] : e.target.value
        })
        console.log(checkoutdata)
    }


    const handleCheckout =  (e) => {
        e.preventDefault()
        if (checkoutdata.firstName && checkoutdata.lastName && checkoutdata.email
            && checkoutdata.Address1 && checkoutdata.mob && checkoutdata.pin) {
                toast.success('Order placed succefully', {
                    position: "top-center",
                })
                navigate("/")
        } else {
                toast.error('Fill all the Details', {
                    position: "top-center",
                });
        }

    }


    return (
        <div className="checkout-page">
            <div className="checkout-container">
                <div className="checkout-left">
                    <h1>CHECKOUT</h1>
                    <h2>Signin for faster checkout experience</h2>
                    <Link to="/account" style={{ textDecoration: 'none' }} ><div className="sign-btn" > sign in</div></Link>
                    <div className="addresses">
                        <h4 style={{fontWeight : "400"}}> ADDRESSES</h4>
                    </div>
                    <form id="checkout-input" onSubmit={handleCheckout} >
                        <input name="firstName" type="text" placeholder="First name" onChange={handleChange} />
                        <input name="lastName" type="text"placeholder="Last name" onChange={handleChange}  />
                        <input name="pin" type="number"placeholder="Post code" onChange={handleChange}  />
                        <input name="Address1"  type="text"placeholder="Address1" onChange={handleChange} />
                        <input name="Address2" type="text"placeholder="Address2" onChange={handleChange} />
                        <input name="city" type="text"placeholder="city" onChange={handleChange}  />
                        <input name="state" type="text"placeholder="State" onChange={handleChange}  />
                        {/* <input name="Country" type="text"placeholder="Country" onChange={handleChange}  /> */}
                        
                        <div id="checkout-addinfo"> 
                            <p >Enter Contact Info (for Order Invoice)</p>
                            <input name="email" type="text"placeholder="Email" onChange={handleChange} />
                            <input name="mob" type="text"placeholder="Number" onChange={handleChange} />
                            <input name="mob2" type="text"placeholder="Additional Number" onChange={handleChange} />
                        </div>
                        {/* <Link to="/" style={{ textDecoration: 'none' }} > */}
                            <input className="checkout-button" type="submit" value="Place Order" />
                        {/* </Link> */}
                    </form>
                </div>

                {/* ----------rigt part----------- */}
                <div className="checkout-right">
                    <h2>Order Details({products.length}) </h2>
                    <div className="check-line"></div>
                    {loading ? <div className="loading" ><CircularIndeterminate /></div>
                    :
                    <div>
                        {products.map((e) => {
                            return (
                                <div className="product-card">
                                    <div className="card">
                                        <img style={{ Height: "70%" }} src={e.img} alt="" />
                                        <div className="detail">
                                            <div className="detail-left">{e.title}</div>
                                            <div className="detail-right">
                                                <p>₹{e.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-below">
                                        <div className="card-left"></div>
                                        <div className="card-right">
                                            <p>EAN : {Math.floor(Math.random() * 10100000000)} </p>
                                            {/* <p> Puma White-Balsam Green-Puma Team Gold</p> */}
                                            <p>size : {e.Size}</p>
                                            <select name="" id="selt">
                                                <option value="1">{e.qty}</option>
                                                <option value="">1</option>
                                                <option value="">2</option>
                                                <option value="">3</option>
                                            </select>
                                            <div className="edit">
                                                <span className="editing" >Edit</span>
                                                <span className="editing" onClick={() => dispatch(DelteCart(e._id))} >Remove</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    }

                    <div className="line"></div> 
                    <div className="promo">
                        <h2>Apply a Promo Code</h2>
                        <p>Enter a Promo Code</p>
                        <span><input style={{padding : "0.6rem 0.1rem" }} type="text" /><button className="Apply-btn">Apply</button></span>
                    </div>
                    <div className="total">
                        <div className="subtotal">
                            <p>SubTotal</p>
                            <p>₹ {subtotal}</p>
                            </div>
                            <div className="subtotal">  
                            <p>Shipping costs</p>
                            <p>₹{products == 0 ? 0 : 100}</p>
                            </div>
                            <div className="subtotal">
                            <h4>Grand Total</h4>
                            <h4>₹{Total}</h4>
                        </div>
                    </div>  
                </div>
          
            </div>
            <ToastContainer/>
        </div>
    )
}