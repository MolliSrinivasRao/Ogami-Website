import "../style/navbar.css";
import { AiTwotoneMail } from "react-icons/ai"
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BiLogoPinterestAlt } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSearch } from "react-icons/bi"
import { AiOutlineHeart } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="header">
            <div className="header-top">
                <div className="lefhead">
                    <AiTwotoneMail className="icon" /><p>info.deercreative@gmail.com</p>
                    <BsFillTelephoneFill className="icon" /><p>+65 11.188.888</p>
                </div>

                <div className="rihead">
                    <BiLogoFacebook className="icon" />
                    <AiOutlineTwitter className="icon" />
                    <BsLinkedin className="icon" />
                    <BiLogoPinterestAlt className="icon" />


                    <div>
                        <select className="drop">
                            <option>English</option>
                            <option>Japanese</option>
                            <option>Vietnam</option>
                        </select>
                    </div>
                    <div>
                        <Link to={"/signin"} >
                        <p><BsFillPersonFill />Login</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="container2">
                <div>
                    <img src="https://ogami-react.vercel.app/assets/images/logo.png"></img>
                </div>
                <div className="searchh">
                    <div>
                        <select className="drops">
                            <option className="ds">All Categories</option>
                            <option>Bread</option>
                            <option>FastFood</option>
                            <option>Fresh Meat</option>
                            <option>OceanFoods</option>
                            <option>Oranges</option>
                        </select>
                    </div>
                    <div>
                        <input className="inp" type="text" placeholder="What do u need" ></input>
                        <button className="sear-btn"> <BiSearch className="ionn" /></button>
                    </div>

                </div>

                <div>
                    <select className="drop2">
                        <option>Home</option>
                        <option>HomePage1</option>
                        <option>HomePage2</option>
                        <option>HomePage3</option>
                        <option>HomePage4</option>
                    </select>
                </div>

                <select className="drop2">
                    <option>Shop</option>
                    <option>Layout Shop</option>
                    <option>Detail Shop</option>
                    <option>Pages Shop</option>
                </select>

                <select className="drop2">
                    <option>Blog</option>
                    <option>Blog list slilde bar</option>
                    <option>Blog Masonry</option>
                </select>

                <p className="pa">Pages</p>
                <p className="pa">About Us</p>
                <AiOutlineHeart className="heart" />
                <BsBag className="bag"  />
            </div>
        </div>
    );
}

export default Navbar;