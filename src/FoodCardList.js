import React from 'react';
import FoodCard from './FoodCard';

const FoodCardList = ({ foods }) => {
    const foodcardComponent = foods.map((user, x) => {
        return (
        <FoodCard
        key={x}
        id={foods[x].id}
        restaurant_name={foods[x].restaurant_name}
        address={foods[x].address}
        rating={foods[x].rating}
        image={foods[x].image}
        />
        );
    })
    return(
    <div>
      { foodcardComponent }
    </div>
    );
};

export default FoodCardList;