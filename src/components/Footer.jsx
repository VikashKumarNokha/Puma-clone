import "../css/Footer.css";
import { AiFillFacebook } from 'react-icons/ai';
import { FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillYoutube} from 'react-icons/ai';

export const Footer = () => {
    
    return (
       <div id="footer">
          <div className="footer_info">
          <div className="left">
            <div className="left_1">
              <h2>Support</h2>
              <div className="footer_links">
                <ul>
                  <li><a href="">Contact Us</a></li>
                  <li><a href="">FAQ</a></li>
                  <li><a href="">Promotions & Sale</a></li>
                  <li><a href="">My Account</a></li>
                  <li><a href="">Track Order</a></li>
                </ul>
                <ul>
                  <li><a href="">Return Policy</a></li>
                  <li><a href="">Privacy Policy</a></li>
                  <li><a href="">Terms & consitions</a></li>
                  <li><a href="">Initiate Return</a></li>
                </ul>
              </div>
            </div>
            <div className="left_2">
              <h2>About PUMA</h2>
              <div className="footer_links">
                <ul>
                  <li><a href="">Company</a></li>
                  <li><a href="">Corporate News</a></li>
                  <li><a href="">Press Center</a></li>
                </ul>
                <ul>
                  <li><a href="">Investors</a></li>
                  <li><a href="">Sustainability</a></li>
                  <li><a href="">Careers</a></li>
                  <li><a href="">Store Finder</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right">
            <h2>More Inspiration</h2>
            <div className="social_icons">
              <a href=""><AiFillFacebook></AiFillFacebook></a>
              <a href=""><FaTwitter></FaTwitter></a>
              <a href=""><AiFillInstagram></AiFillInstagram></a>
              <a href=""><AiFillYoutube></AiFillYoutube></a>
            </div>
            <br />
            <br />
            <div className="company d-flex">
              <div className="company_logo">
                <img
                  src="https://in.puma.com/on/demandware.static/-/Sites-IN-Library/default/dwe13dbf96/web-components/pumatrac-logo.svg"
                  alt=""
                />
              </div>
              <div className="info">
                <p>TRAIN WITH THE FASTEST</p>
              </div>
            </div>
            <hr style={{
            border : "0.1px solid black",
          }}/>
          </div>
            </div>
            <div className="hr_line">
            <hr style={{
                border : "0.1px solid gray",
            }}></hr>
            <div className="about_company d-flex">
                <select name="country" id="country">
                <option value="india">ENGLISH</option>
                </select>
                <p className="small p-0 m-0">© PUMA SE, 2021. All Rights Reserved</p>
                <p className="small p-0 m-0">Imprint & Legal Data</p>
            </div>
            </div>
        </div>
    )
  }
