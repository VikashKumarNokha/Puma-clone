import "../css/Navbar.css"
import { FiHeart } from 'react-icons/fi';
import { BsCart3 } from 'react-icons/bs';
import { VscAccount } from 'react-icons/vsc';
import { FiSearch } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = () => {

    let Cart = useSelector((state) => state.carts.cart)
    console.log(Cart.length)

    return (
        <div className="navcontainer">
            <div className="nav_section">
                    <div className="nav_logo">
                    <Link to="/" style={{ textDecoration: 'none' }} ><img className="nav_logo_img" src="https://logos-world.net/wp-content/uploads/2020/04/Puma-Logo-1970-1974.png" alt="" /></Link>
                    </div>
                <div className="nav_catgories">
                    <Link to="/mens" style={{ textDecoration: 'none' }} ><div className="links">New Arrivals</div></Link>
                    <Link to="/womens" style={{ textDecoration: 'none' }} ><div className="links">Womem</div></Link>
                    <Link to="/mens" style={{ textDecoration: 'none' }} ><div className="links">Men</div></Link>
                    <Link to="/mens" style={{ textDecoration: 'none' }} ><div className="links">Kids</div></Link>
                    <div>Collabrations</div>
                    <div>Sport</div>
                    <div>Outlet</div>
                </div>
            </div>
            <div className="nav_icon">
                <div className="nav_search_icon"><FiSearch></FiSearch></div>
                <div className="nav_search">
                    <input className="nav_input" type="text" placeholder="SEARCH PUMA.COM" />
                </div>
                <div className="navbar-icons">
                    <div className="navbar-icons-div" ><FiHeart></FiHeart></div>
                    <Link to="/cart" style={{ textDecoration: 'none' }} ><div className="navbar-icons-div"><BsCart3></BsCart3><div className="cartno">{Cart.length}</div></div></Link>
                    <Link to="/account" style={{ textDecoration: 'none' }} ><div className="navbar-icons-div"><VscAccount></VscAccount></div></Link>
                </div>
            </div>
        </div>
    )
}