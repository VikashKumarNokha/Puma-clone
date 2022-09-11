import "../css/Cart.css"
import { RiDeleteBinLine } from 'react-icons/ri';
import { AiOutlineEdit } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { DelteCart, GetCart } from "../Redux/cart/action";
import CircularIndeterminate from "../components/Loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Cart = () => {

    let cartDetails = useSelector((state) => state.carts.cart)
    let loading = useSelector((state) => state.carts.isLoading)
    // console.log("cartDetails", cartDetails) isLoading
    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetCart())
    },[])
    
   
    const subtotal = cartDetails.reduce(function (a, v) {
        return a + v.price
    },0)
    // console.log(subtotal)
    const Total = subtotal + (cartDetails==0 ? 0 : 100);

     

    return (
        
        <div>
                <div id="sub">
                    <h1>MY SHOPPING CART<span id="cart-count">({cartDetails.length})</span></h1>
                    <div id="easy-returns">
                        <p>
                            <i className="fas fa-undo"></i> Free and easy returns on all orders.
                        </p>
                    </div>
                    
                {loading ? <div className="loading" ><CircularIndeterminate /></div>
                    :
                    <div id="cart-items">
                        <div className="cart-items-div">
                            {cartDetails.map((item) => {
                                return (
                                    <div id="item-design">
                                        <div id="cart-image">
                                            <img
                                                id="item-image"
                                                src={item.img} alt="" />
                                        </div>
                                        <div id="cart-item-details">
                                            <h3>{item.title}</h3>
                                            <p className="black">Color:<span> Puma Royal </span></p>
                                            <p className="black">Size:<span>{item.Size}</span></p>
                                            <p className="black">Style_Number:<span> {Math.floor(Math.random() * 10100000000)}</span></p>
                                            <select name="quantity" id="quantity">
                                                <option value="1">{item.qty}</option>
                                                
                                            </select>
                                        </div>
                                        <div id="cart-item-price">
                                            <p id="original-price">₹ {item.price}</p>
                                            <div id="cart-icons">
                                                <AiOutlineEdit></AiOutlineEdit>
                                                <RiDeleteBinLine onClick={() => dispatch(DelteCart(item._id))} ></RiDeleteBinLine>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    
                        <div id="cart-details">
                            <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
                            <div id="Promocode">Apply a Promo Code
                                <div className="Enterpromo">Enter Promo Code</div>
                                <div id="js-promo-box" className="promo-box">
                                    <input type="text" />
                                    <button id="promo-button">Apply</button>
                                </div>
                            </div>
                            <div id="prices">
                                <p className="sub-total">
                                    SubTotal<span className="price-span"> ₹{subtotal} </span>
                                </p>

                                <p className="sub-total">
                                    Shipping costs<span className="price-span Shipping">₹{cartDetails == 0 ? 0 : 100}</span>
                                </p>
                                <div className="line"></div>
                            </div>

                            <p className="grand-total">
                                <b>Grand Total</b><span id="tax"> Prices include GST</span>
                                <span className="price-span grand_total"><b>₹{Total}</b></span>
                            </p>

                            <div id="cart-checkout">
                                <Link to="/checkout" style={{ textDecoration: 'none' }} ><p id="checkout"><b>CHECKOUT</b></p></Link>
                            </div>
                        </div>
                    </div>
                }
                    
            </div>
            <ToastContainer/>
        </div>
    )
}