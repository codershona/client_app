import React, { useState, useEffect } from "react";
import FoodCardList from '../food_components/FoodCardList';
import { foods } from '../foods';
import SearchFoodBox from '../food_components/SearchFoodBox';
import '../react_containers/App.css';
import Scroll from '../food_components/Scroll';
import ErrorBoundry from '../food_components/ErrorBoundry';

function App () {
    // constructor() {
    // super()
    // this.state = {
    // foods: [],
    // searchfield: ''
    // }
    // console.log('constructor 1');
    // }

    // componentDidMount() {
    // setTimeout(() => {
    // this.setState({foods: foods})
    //     }, 1000)
        // console.log('check');
        // If we use any json api then we can use this method
        // fetch('https://jsonplaceholder.typicode.com/users')
        // .then(response => response.json())
        // .then(users => this.setState({ foods: users }));
        // console.log('componentDidMount 2');
    // }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }
    render () {
        const { foods, searchfield } = this.state;
        const filteredFoods = foods.filter(foods => {
            return foods.restaurant_name.toLowerCase().includes(searchfield.toLowerCase());
        })
        // if (foods.length === 0) {
            return !foods.length ?
            <h1> LOADING....</h1> :
            (
                <div
                className="tc"
                >
                <h1
                className="f-subheadline"
                >
                    ARK Food Delivery Services
                    </h1>
                <SearchFoodBox
                searchChange={this.onSearchChange}
                />
                <br/>
                <Scroll>
                  <ErrorBoundry>
                <FoodCardList
                foods={filteredFoods}
                />
                </ErrorBoundry>
                </Scroll>
                </div>
            );
        }
        // console.log('render 3');
      //   console.log(event.target.value);
    //   console.log(filteredFoods);
    }

export default App;