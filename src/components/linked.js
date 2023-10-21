import '../style/linked.css';
import {AiOutlineHeart,AiOutlineEye} from "react-icons/ai";
import {BsBag} from "react-icons/bs";
import {BiShuffle} from "react-icons/bi";

function Linked() {
    return (
        <div className='linked-header'>

            <div className="linked-top">
                <p>All</p>
                <p>Bread</p>
                <p> FastFood</p>
                <p>Fresh Meat</p>
                <p> Ocean Food</p>
                <p>Oranges</p>
            </div>
            <div className="linked-details">
                <div>
                    <img className='linked-img' src="https://ogami-react.vercel.app/assets/images/other/benefits/1.png"></img>
                    <h5>Free Shipping</h5>
                    <p>For all orders over $99</p>
                </div>
                <div>
                    <img className='linked-img' src="https://ogami-react.vercel.app/assets/images/other/benefits/2.png"></img>
                    <h5>Delivery on time</h5>
                    <p>If good has problems</p>
                </div>
                <div>
                    <img className='linked-img' src="https://ogami-react.vercel.app/assets/images/other/benefits/3.png"></img>
                    <h5>Secure payments</h5>
                    <p>100% secure payment</p>
                </div>
                <div>
                    <img className='linked-img' src="https://ogami-react.vercel.app/assets/images/other/benefits/4.png"></img>
                    <h5>24/7 support</h5>
                    <p>Dedicated support</p>
                </div>
            </div>
            <div className='bg-time'>
                <div className='bg-time-top'>
                    <h1>Deal Of The Week</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elitt incididunt ut labore</p>
                    <div className='timer-date'>
                        <span>DAYS</span>
                        <span>HR</span>
                        <span>MIN</span>
                        <span>SEC</span>
                    </div>
                    <div>
                        <button className='bg-time-btn'>Shop Now</button>
                    </div>
                </div>
                <div>
                    <img className='bg-time-imgg' src='https://ogami-react.vercel.app/assets/images/sections/dale-of-week/two/1.png'></img>
                </div>
            </div>
            <div className='bg-best-seller'>
                <div>
                    <h2>BEST SELLER</h2>
                </div>
                <div className='bg-best-all'>
                    <h4>All</h4>
                    <h4>Bread</h4>
                    <h4>Fastfood</h4>
                    <h4>Fresh Meat</h4>
                    <h4>Ocean Foods</h4>
                    <h4>Oranges</h4>
                </div>
            </div>
            
        </div>
    )
}
export default Linked;