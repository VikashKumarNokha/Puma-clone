import "../css/Home.css"
import { Link } from "react-router-dom"

export const Home = () => {


    return (
        <div className="home">
            <div className="banner1">
                <div className="banner_content1">
                    <div className="head11">END OF</div>
                    <div>SEASON SALE</div>
                    <div className="btns_div">
                        <Link to="/mens" style={{ textDecoration: 'none' }} ><button className="btn">SHOP MEN</button></Link>
                        <Link to="/womens" style={{ textDecoration: 'none' }} ><button className="btn">SHOP WOMEN</button></Link>
                        <Link to="/mens" style={{ textDecoration: 'none' }} ><button className="btn">SHOP KIDS</button></Link>
                    </div>
                </div>
            </div>
            <br/>
            <div className="banner2">
                <div className="banner_content2">
                    <div className="head11">FAVOURITE STYLES</div>
                    <div>AT BEST PRICE</div>
                    <div className="btns_div">
                    <Link to="/mens" style={{ textDecoration: 'none' }} ><button className="btn">SHOP MEN</button></Link>
                    <Link to="/womens" style={{ textDecoration: 'none' }} ><button className="btn">SHOP WOMEN</button></Link>
                    <Link to="/mens" style={{ textDecoration: 'none' }} ><button className="btn">SHOP KIDS</button></Link>
                    </div>
                </div>
            </div>
            {/* <br /> */}
            <div className="banner3">
                <div className="banner_content3">
                    <div className="head11">BLINK AND MISS</div>
                    <div className="btns_div">
                        <button className="btn">SHOP NOW</button>
                    </div>
                </div>
            </div>
            <br />
            <div className="banner4">
                <div className="banner_content4">
                    <div className="head11">FLEX FRESH FITS</div>
                    <div className="btns_div">
                    <Link to="/mens" style={{ textDecoration: 'none' }} ><button className="btn">SHOP MEN</button></Link>
                    <Link to="/womens" style={{ textDecoration: 'none' }} ><button className="btn">SHOP WOMEN</button></Link>
                    <Link to="/mens" style={{ textDecoration: 'none' }} ><button className="btn">SHOP KIDS</button></Link>
                    </div>
                </div>
            </div>
            <br />
            <div className="trending_section">
                <div className="trending_content">
                    <div className="trending_title">TRENDING NOW</div>
                    <p>Categories in Spotlight</p>
                    <div className="trending_buttons">
                        <button >SHOES</button>
                        <button >T-SHIRTS</button>
                        <button >TIGHTS</button>
                        <button >RAIN JACKETS</button>
                    </div>
                    <div className="trending_buttons">
                        <button >SNEKERS</button>
                        <button >RAIN JACKETS</button>
                    </div>
                </div>
            </div>
            <br />
            <div className="banner5">
                <div className="banner_content4">
                    <div className="head11">MIN 30% OFF</div>
                    <div className="btns_div">
                    <Link to="/mens" style={{ textDecoration: 'none' }} ><button className="btn">SHOP NOW</button></Link>
                    </div>
                </div>
            </div>
            <br />
            <div className="banner6">
                <div className="banner_content6">
                    <div className="head11">MAKE YOUR MOVE</div>
                    <div className="btns_div">
                    <Link to="/mens" style={{ textDecoration: 'none' }} ><button className="btn">SHOP NOW</button></Link>
                    </div>
                </div>
            </div>
            <br />
            <div className="banner7">
                <div className="banner_content6">
                    <div className="head11">WOMEN'S BASICS</div>
                    <div className="btns_div">
                    <Link to="/mens" style={{ textDecoration: 'none' }} ><button className="btn">SHOP NOW</button></Link>
                    </div>
                </div>
            </div>
            <br />
            <div className="banner8">
                <div className="banner_content6">
                    <div className="head11">WALK IT OFF</div>
                    <div className="btns_div">
                    <Link to="/mens" style={{ textDecoration: 'none' }} ><button className="btn">SHOP MEN</button></Link>
                    <Link to="/womens" style={{ textDecoration: 'none' }} ><button className="btn">SHOP WOMEN</button></Link>
                    <Link to="/mens" style={{ textDecoration: 'none' }} ><button className="btn">SHOP KIDS</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}