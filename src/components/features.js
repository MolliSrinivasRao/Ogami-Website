import Card from "./card";
import {AiOutlineHeart,AiOutlineEye} from "react-icons/ai";
import {BsBag} from "react-icons/bs";
import {BiShuffle} from "react-icons/bi";
import "../style/features.css";
import { Addtocart } from "../utils/addtocart";
const Features=(props)=>{
    return (
        <div className="featurehead">
            {props?.data?.map((e,index)=>{
                return (
                    <Card key={index}product={e}>
                        <div className="icoclas">
                            <AiOutlineHeart className="ricon"/>
                            <BsBag className="ricon" onClick={()=>props.setCart((Addtocart(props.cart,e)))}/>
                            <BiShuffle className="ricon"/>
                            <AiOutlineEye className="ricon"/>
                        </div>
                    </Card>
                );
            })}
        </div>
    );
};
 export default Features;