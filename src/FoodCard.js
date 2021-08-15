import React from "react";

const FoodCard = ({name, email}) => {
    return (
        <div className="dtc tr tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <h1>Food Delivering to South Bermondsey</h1>
            <img alt="pizza" src={`https://cdn.pixabay.com/photo/2016/02/19/11/30/pizza-1209748_960_720.jpg`} width="200" height="200" />
            <div>
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
        </div>
    );
}

export default FoodCard;