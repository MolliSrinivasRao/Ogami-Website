import '../style/FeaturedProducts.css';
import { AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { BiShuffle } from "react-icons/bi";
import Card from "./card";
import { Addtocart } from '../utils/addtocart';

const FeaturedProducts = (props) => {
    return (
        <div>
            <div className='bg-best-seller'>
                <div>
                    <h2>Featured Products</h2>
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
            <div className="featurehead">
                {props?.data?.slice(0, 6).map((e, index) => {
                    return (
                        <Card key={index} product={e}>
                            <div className="icoclas">
                                <AiOutlineHeart className="ricon" />
                                <BsBag className="ricon" onClick={()=>props.setCart((Addtocart(props.cart,e)))}/>
                                <BiShuffle className="ricon" />
                                <AiOutlineEye className="ricon" />
                            </div>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};
export default FeaturedProducts;