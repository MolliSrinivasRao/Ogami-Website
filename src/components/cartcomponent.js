import React from "react";
import Navbar from "./navbar";
import '../style/cartcomponents.css';
import { FaHome } from "react-icons/fa";
import { ogamiReactBaseUrl } from '../utils/api';
import { deleteCart } from '../utils/addtocart';

function Cartcomponent(props) {
    return (
        <div>
            <Navbar />
            <div className='homee'>
                <p><FaHome className='homeico' />Home</p>
                <p>Shop</p>
                <p>Cart</p>
            </div>
            <div className="cartpage-container" >

                <div class="arrow">shopping cart  <p className="para" >01</p></div>
                <div class="arrow"> checkout <p className="para" >02</p> </div>
                <div class="arrow"> order complete <p className="para" >03</p></div>
            </div>
            <div>
                <div className="specification-cart" >
                    <span className="textfont"  >IMAGE</span>
                    <span className="textfont"  >PRODUCT NAME</span>
                    <span className="textfont"  >PRICE</span>
                    <span className="textfont"  >QUANTITY</span>
                    <span className="textfont"  >TOTAL PRICE</span>
                    <button className="wrongbtn" onClick={() => props.setcount(deleteCart())} >x</button>
                </div>


                <div className="pd-division" >
                    {props?.cart?.products?.map((e, index) => {
                        return (
                            <div className="pd-subdivision" >
                                <span><img className="pd-img" src={ogamiReactBaseUrl + e?.images[0]} /></span>
                                <span className="vegetablesname">{e?.name}</span>
                                <span className="price-pd">{"$" + e?.price}</span>
                                <span className="cart-pd">{e?.productQty}</span>
                                <span className="totalprice-pd">{e?.productQty * e?.price}</span>
                                <button className="wrongbtnn-pd">x</button>
                            </div>
                        )
                    })}
                </div>

                <div className='couponn'>
                    <input className='input' type='text'></input>
                    <button className='coupon'>APPLY COUPON</button>
                    <button className='update'>UPDATE CART</button>
                </div>

                <div className='carttot'>
                    <p>CART TOTAL:</p>
                    <p>SUBTOTAL:</p>
                    <p>SHIPPING :<span>Free shipping Calculate Shipping</span></p>
                    <p>TOTAL:</p>
                    <button className='checkout'>Proceed to Checkout</button>

                </div>
            </div>
        </div>
    )
}
export default Cartcomponent;