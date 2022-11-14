import { useEffect } from "react"
import MultipleSelectCheckmarks from "../components/selectbar"
import "../css/Mens.css"
import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"
import { useSearchParams } from "react-router-dom"
import CircularIndeterminate from "../components/Loading"

export const Mens = () => {
    const location = useLocation();
    const [mensdata, setMensdata] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const [loading, setLoading] = useState(false)
   
    //  getting data from all category like as mans, womens , kids
    useEffect(() => {
        getdata()
    }, [location.search])
     //  ------- end--------------- 
    console.log(location.search)
    const category = location.pathname.split("/")
   
    //    sort items by heigh tolow and low to heigh 
    const [sort, setSort] = useState(null)
    console.log(sort)
    useEffect(() => {
        if (sort) {
            setSearchParams({order : sort,}, {replace : true})
        }
      },[sort,setSearchParams])
    //   --------end  sorting ------------------>

    const getdata = () => {

        setLoading(true)

        axios.get(`https://puma-vikash-heroku.herokuapp.com/Mens${location.search}`)
            .then(function (response) {
                setLoading(false)
              console.log(response.data);
              setMensdata(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
    }


    const Categories = ["Apparel","Footwear", "Accessories"]
    const ProductType = ["Casual Shoes","Running Shoes","Sneakers","T-Shirts", "Pants", "Cricket"]
    const Price = ["1000-3000", "3000-5000", "5000-7000","7000-12000"]
    const Gender = ["Female", "Male", "Unisex"]
    const Size = ["Small", "Medium", "Large"]
    const Color = ["Black", "Gray", "Blue", "Green", "Yellow", "White"]
    const Sortby = ["Price Low To High","Price High To Low","Newest"]

    return (
        <div className="mens-page">
             {/* Heading part  */}
            <div className="path">
                <div>Home</div>
                <div>.</div>
                <div>Men</div>
                <div>.</div>
                <div className="new-arrival">New Arrivals</div>
            </div>
               {/*  some brief intro about product */}
            <h1 className="heading">MEN'S NEW ARRIVALS</h1>
            <p className="para">Discover the latest trends of men's sports clothing, shoes and accessories and shop PUMA's new arrivals collection for men. Shop the latest styles for your athleisure look now and make the most out of your training. PUMA sports products combine the high quality of a traditional company with the innovative spirit of a trend-conscious brand. "Always new, always better," is the motto. High-tech materials and the latest findings in sports science are reflected in the newest arrivals.</p>
            <div className="filters-div">
                <div className="filers-line">
                      {/* Select items by categories */}
                    <div className="bar-left">
                        <MultipleSelectCheckmarks title={"Category"} names={Categories}></MultipleSelectCheckmarks>
                        <MultipleSelectCheckmarks title={"ProductType"} names={ProductType}></MultipleSelectCheckmarks>
                        <MultipleSelectCheckmarks title={"Price"} names={Price}></MultipleSelectCheckmarks>
                        <MultipleSelectCheckmarks title={"Gender"} names={Gender}></MultipleSelectCheckmarks>
                        <MultipleSelectCheckmarks title={"Size"} names={Size}></MultipleSelectCheckmarks>
                        <MultipleSelectCheckmarks title={"Color"} names={Color}></MultipleSelectCheckmarks>
                    </div>
                    <div className="bar-right">
                        {/* <MultipleSelectCheckmarks title={"Sortby"} names={Sortby}></MultipleSelectCheckmarks> */}
                        <select name=""  onChange={(e) => setSort(e.target.value)} >
                            <option value="desc"  >Price High To Low</option>
                            <option value="asc"  >Price Low To High</option>
                         </select>
                    </div>
                </div>
            </div>
             {/*  Here  all product details  */}
            {loading ? <div className="loading"><CircularIndeterminate /></div>
                : <div className="product-div">
                    {mensdata?.map((e, i) => {
                        return (
                            <Link to={`/mens/${e._id}`} style={{ textDecoration: 'none' }} key={i} >
                                <div className="product-div-div" key={i}>
                                    <div className="prod-img">
                                        <img src={e.img} alt="img" />
                                    </div>
                                    <div className="prod-title">
                                        <div className="title">
                                            <div>{e.title}</div>
                                            <div>Additional 5% off on prepaid orders</div>
                                        </div>
                                        <div className="price">₹{e.price}</div>
                                    </div>
                                </div> 
                            </Link>
                        )
                    })}

                </div>}
        </div>
    )
}