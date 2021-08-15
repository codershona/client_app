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
    <FoodCard id={foods[0].id} name={foods[0].name} email={foods[0].email} />
    <FoodCard id={foods[1].id} name={foods[1].name} email={foods[1].email} />
    <FoodCard id={foods[2].id} name={foods[2].name} email={foods[2].email} />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
