import React from "react";
import './FoodCard.css';

const FoodCard = ({restaurant_name, userId, address, rating, image}) => {
    return (
    <article className="pa0 bg-light-red tc grow br3 ma4 dib bw0 shadow-5 mw7 center ph5-ns fl w-100 w-50-ns">
        <h1>{userId}</h1>
            <img alt="food_items" src={`${image}`} width="500" height="250" />
            <div>
                <h2>{ restaurant_name }</h2>
                <p>{ address }</p>
                <p><span>{ rating }</span></p>
         </div>
         </article>

    );
}

export default FoodCard;