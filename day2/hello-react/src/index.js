/**
 * Created by ripzery on 2/27/17.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import Counter from './components/Counter'

const Hello = (props) => <h1>Hello, {props.firstname} {props.lastname}</h1>;

ReactDOM.render(
    <Counter label="This is a counter"/>,
    document.getElementById('react-root')
);