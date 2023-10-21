import Card from "./card";
import {AiOutlineHeart,AiOutlineEye} from "react-icons/ai";
import {BsBag} from "react-icons/bs";
import {BiShuffle} from "react-icons/bi";
import "../style/bestseller.css";
const Bestseller=(props)=>{
    return (
        <div className="featurehead">
            {props?.data?.slice(0,6).map((e,index)=>{
                return (
                    <Card key={index}product={e}>
                        <div className="icoclas">
                            <AiOutlineHeart className="ricon"/>
                            <BsBag className="ricon"/>
                            <BiShuffle className="ricon"/>
                            <AiOutlineEye className="ricon"/>
                        </div>
                    </Card>
                );
            })}
        </div>
    );
};
 export default Bestseller;