import React, { Component } from "react";
import FoodCardList from './FoodCardList';
import { foods } from './foods';
import SearchFoodBox from './SearchFoodBox';

class App extends Component {
    constructor() {
        super()
        this.state = {
            foods: foods,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    render () {
        const filteredFoods = this.state.foods.filter(foods => {
            return foods.restaurant_name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
      //   console.log(event.target.value);
      console.log(filteredFoods);
        return (
            <div className="tc">
            <h1>ARK Food Delivery Services</h1>
            <SearchFoodBox searchChange={this.onSearchChange} />
            <br/>
            <FoodCardList foods={filteredFoods} />
            </div>
        );
    }
}

export default App;