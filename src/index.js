import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from "./TodoList"
import * as serviceWorker from './serviceWorker';

var destination = document.querySelector("#container");


ReactDOM.render(
    <TodoList/>,
  destination,
 
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
