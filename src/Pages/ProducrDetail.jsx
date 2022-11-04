import { useState } from "react"
import "../css/ProductDetail.css"
import {useParams,useLocation } from 'react-router-dom';
import axios from "axios"
import { useEffect } from "react";
import { AddToCart } from "../Redux/cart/action";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ProductDetails = () => {
     
    const [quntity, setQunatity] = useState(1)
    const [small, setSmall] = useState("s")
    const [medium, setMedium] = useState("m")
    const [large, setLarge] = useState("l")
    const [size, setSize] = useState("M")
    const [product, setProduct] = useState({
        "id": 1,
        "img": "",
        "img1": "",
        "img2": "",
        "title" : "",
        "price" : 100
      });

    let { id } = useParams();
    const dispatch = useDispatch()
    const location = useLocation();


    useEffect(() => {
        getdata();
    },[])
    
    const getdata = () => {
        axios.get(`https://puma-vikash-heroku.herokuapp.com${location.pathname}`)
        .then((res) => {
            // console.log(res.data)
            setProduct(res.data)
        })
        .catch((err) => {
            console.log(err)
    })
    }


    return (
        <div className="Product-detail-page">
            <div className="product_nav">
                {/* <div className="detail-path2">
                    <div>Home</div>
                    <div>.</div>
                    <div>{category[1]}</div>
                    <div>.</div>
                    <div className="new-arrival">{product.title}</div>
                </div> */}
            </div>

            <div className="main-body-of-prod-data">
                <div className="product-details-section">
                    {/* <!-- this is for product images part  start here--> */}
                    <div className="left-product-imgs">
                        <img  className="product-img1" src={product.img} alt="img"/>
                       <div className="prod-mid-img">
                        <img className="img-size product-img2" src={product.img1} alt="img1"/>
                        <img className="img-size product-img3" src={product.img2} alt="img2"/>
                       </div> 
                    </div>
                    {/* <!-- end here --> */}

                    {/* <!-- this part for price of product start here --> */}
                  <div className="rigth-product-data">
                    <div className="rigth-product-data-div">
                        <div className="left-prod-heading">
                            <h1 className="prod-name">{product.title}</h1>
                        </div>
                        <div className="prod-price">
                            <span className="text-danger">₹{product.price}</span>
                        </div>
                        <div className="strick-price">
                            <span className="text-secondary">₹4,99</span>
                        </div>
                        <p style={{
                            color :"gray",
                            fontSize : "14px"
                        }}>(Prices include GST)</p>
                        {/* <!-- end here-->

                        <!-- this part for product design image start here--> */}

                        <hr className="hr-line" />
                        <p className="redline">Additional 5% off on prepaid orders</p>
                        <hr className="hr-line" />

                        <div className="product-variation-container">
                        <h3 className="prod-variation-lable">Size</h3>
                        </div>
                         {/*  Here size of the product available  */}
                      <ul className="prod-size-cate">
                        <li className="design-size" id={`${small}`} onClick={() => {
                                setSmall("S")
                                setMedium("m")
                                setLarge("l")
                                setSize("S")
                            }}>
                            <p className="p-size">S</p>
                        </li>
                        <li className="design-size" id={`${medium}`} onClick={() => {
                                setSmall("s")
                                setMedium("M")
                                setLarge("l")
                                setSize("M")
                            }} >
                            <p className="p-size">M</p>
                        </li>
                        <li className="design-size" id={`${large}`} onClick={() => {
                                setSmall("s")
                                setMedium("m")
                                setLarge("L")
                                setSize("L")
                            }} >
                            <p className="p-size">L</p>
                        </li>
                      </ul>
                               {/* Here quantity of the product */}
                      <div className="quantity-add-to-card">
                        <div className="quantity-div">
                            <select  name="" id="" onChange={(e) => setQunatity(e.target.value)}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                             {/*  Here add to cart button is available and wishlist button also */}
                        <div className="add-to-cart-btn">
                            <button className="cart-btn" onClick={() => dispatch(AddToCart({ ...product, qty: quntity, Size : size }))}> Add to Cart </button>
                            <button className="cLook-btn">Complete the Look</button>
                          <div className="wish-list">
                            <button className="wish-list-btn">
                                <img
                                className="heart-img"
                                src="https://e7.pngegg.com/pngimages/799/396/png-clipart-heart-gold-heart-icon-love-metal-thumbnail.png"
                                alt=""
                                />
                                <span>Add to wishlist</span>
                            </button>
                          </div>
                        </div>
                        </div>
                        <hr className="hr-line" />

                        <div className="shipping">
                        <img
                            className="shpping-img"
                            src="https://cdn3.iconfinder.com/data/icons/glypho-shopping-and-ecommerce/64/truck-fast-delivery-speed-128.png"
                            alt=""
                        />
                        <span>This item ship free*</span>
                        </div>

                        <hr className="hr-line" />
                    </div>
                    </div>
                </div>
            </div>
    
            <ToastContainer />
        </div>
       
    )
}