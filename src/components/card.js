import React from "react";
import "../style/cards.css";
import { Link } from "react-router-dom";


export default function Card(props) {
    return (
        <div className="product-card-container">
            <Link to={"/"+props.product.slug}>
                <div className="product-container">
                    <img className="product-card-img" src={"https://ogami-react.vercel.app/" + props.product.coverImage} />
                    <p className="product-card-category">{props.product.category}</p>
                    <p className="product-card-name">{props.product.name}</p>
                    <p className="product-price">{props.product.price.toFixed(2)}</p>
                </div>
            </Link>
            {props.children}
        </div>
    )
}