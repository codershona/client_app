import React, { Component } from "react";
import FoodCardList from './FoodCardList';
import { foods } from './foods';
import SearchFoodBox from './SearchFoodBox';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            foods: [],
            searchfield: ''
        }
        // console.log('constructor 1');
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({foods: foods})
          }, 1000)
        // console.log('check');
        // If we use any json api then we can use this method
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response => response.json())
        // .then(users => this.setState({ foods: users }));
        // console.log('componentDidMount 2');
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    render () {
        const filteredFoods = this.state.foods.filter(foods => {
            return foods.restaurant_name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if (this.state.foods.length === 0) {
            return <h1> LOADING....</h1>
        } else {
            return (
                <div className="tc">
                <h1 className="f-subheadline">ARK Food Delivery Services</h1>
                <SearchFoodBox searchChange={this.onSearchChange} />
                <br/>
                <FoodCardList foods={filteredFoods} />
                </div>
            );
        }
        // console.log('render 3');
      //   console.log(event.target.value);
    //   console.log(filteredFoods);
    }
}

export default App;