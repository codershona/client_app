import React from "react";
import './FoodCard.css';

const FoodCard = ({restaurant_name, address, rating, image}) => {
    return (
    <article class="bg-light-red tc grow br3 pa3 ma2 dib bw2 shadow-5 fl w-third br4 mw9 center ph3-ns br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
         <div className="cf ph2-ns pa2 ph3-ns pb3-ns dt w-100 mt1 dtc">
        <h1>Food Items</h1>
            <img alt="food_items" src={`${image}`} width="200" height="200" />
            <div>
                <h2>{ restaurant_name }</h2>
                <p>{ address }</p>
                <p><span>{ rating }</span></p>
         </div>
         </div>
         </article>

    );
}

export default FoodCard;