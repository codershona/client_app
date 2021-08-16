import React from "react";
import './FoodCard.css';

const FoodCard = ({restaurant_name, address, rating, image}) => {
    return (
        <div className="dtc tr tc grow bg-light-red br3 pa2 ma2 dib bw2 shadow-5">
            <h1>Food Delivering to South Bermondsey</h1>
            <img alt="food_items" src={`${image}`} width="200" height="200" />
            <div>
                <h2>{ restaurant_name }</h2>
                <p>{ address }</p>
                <p><span>{ rating }</span></p>
            </div>
        </div>
    );
}

export default FoodCard;