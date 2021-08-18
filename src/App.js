import React from "react";
import FoodCardList from './FoodCardList';
import { foods } from './foods';
import SearchFoodBox from './SearchFoodBox';

const App = () => {
    return (
        <div className="tc">
        <h1>ARK Food Delivery Services</h1>
        <SearchFoodBox />
        <br/>
        <FoodCardList foods={foods} />
        </div>
    );
}

export default App;