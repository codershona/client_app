import React from 'react';
import FoodCard from './FoodCard';

const FoodCardList = ({ foods }) => {
    return(
    <div>
      {
        foods.map((user, x) => {
            return (
            <FoodCard
            key={x}
            id={foods[x].id}
            userId={foods[x].userId}
            restaurant_name={foods[x].restaurant_name}
            address={foods[x].address}
            rating={foods[x].rating}
            image={foods[x].image}
            />
            );
        })
      }
    </div>
    );
};

export default FoodCardList;