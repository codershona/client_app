import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FoodCard from './FoodCard';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { foods } from './foods';

ReactDOM.render(
  <React.StrictMode>
    <div>
    <FoodCard id={foods[0].id} restaurant_name={foods[0].restaurant_name} address={foods[0].address} rating={foods[0].rating} image={foods[0].image} />
    <FoodCard id={foods[1].id} restaurant_name={foods[1].restaurant_name} address={foods[1].address} rating={foods[1].rating} image={foods[1].image}/>
    <FoodCard id={foods[2].id} restaurant_name={foods[2].restaurant_name} address={foods[2].address} rating={foods[2].rating} image={foods[2].image} />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
