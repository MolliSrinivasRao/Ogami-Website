import '../style/footer.css';
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BiLogoPinterestAlt } from "react-icons/bi";

function Footer() {
    return (
        <div className="footer">
            <div className="footer-bg">
                <div className="footer-bg-img1">
                    <img className='bg-imgg' src="https://ogami-react.vercel.app/assets/images/sections/banner/one/1.png"></img>
                    <div>
                        <h2>Strawberry</h2>
                        <h2>Jam 100% Natural </h2>
                        <h2>Fruit Juice Sale</h2>
                        <h2>Off 65%</h2>
                        <button className='footer-btn'>Shop Now</button>
                    </div>
                </div>
                <div className="footer-bg-img2">
                    <img className='bg-imgg' src="https://ogami-react.vercel.app/assets/images/sections/banner/one/2.png"></img>
                    <div>
                        <h2>Strawberry</h2>
                        <h2>Jam 100% Natural </h2>
                        <h2>Fruit Juice Sale</h2>
                        <h2>Off 65%</h2>
                        <button className='footer-btn'>Shop Now</button>
                    </div>
                </div>
            </div>
            <div className='footer-details'>
                <div>
                    <img src='https://ogami-react.vercel.app/assets/images/logo.png'></img>
                    <p>Address: 60-49 Road 11378 New York</p>
                    <p>Phone: +65 11.188.888</p>
                    <p>Email: info.deercreative@gmail.com</p>
                    <BiLogoFacebook className='footer-icon' />
                    <AiOutlineTwitter className='footer-icon' />
                    <BsLinkedin className='footer-icon' />
                    <BiLogoPinterestAlt className='footer-icon' />
                </div>
                <div>
                    <h2>INFOMATION</h2>
                    <p>About us</p>
                    <p>Check out</p>
                    <p>Contact</p>
                    <p>Service</p>
                </div>
                <div>
                    <h2>MY ACCOUNT</h2>
                    <p>My account</p>
                    <p>Contact</p>
                    <p>Shop Cart</p>
                    <p>Tracking Order</p>
                </div>
                <div>
                    <h2>QUICK SHOP</h2>
                    <p>About us</p>
                    <p>Check out</p>
                    <p>Contact</p>
                    <p>Service</p>
                </div>
                <div>
                    <div>
                        <h1 className='footer-join'>Join Our Newsletter Now</h1>
                        Get E-mail updates about our latest
                        <p>shop and special offers.</p>
                        
                    </div>
                    <div className='footer-bg-text'>
                        <input type='text' className='footer-text' placeholder='ENTER YOUR.........................'></input>
                        <button type='button' className='footer-btn-text'>Subscribe</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Footer;