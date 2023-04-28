import React from 'react';
import ExpenseItem from './components/ExpenseItem';
import ExerciseComponent from './ExerciseComponent';

import './style.css';


export default function App() {
  return <ExerciseComponent />
       //return <p>deneme</p>
//    const [messageValidity, setMessageValidity] = React.useState('Invalid');
//    
//    function messageChangeHandler(event) {
//        const value = event.target.value;
//        if (value.trim().length < 3) {
//            setMessageValidity('Geçersiz')
//        } else {
//            setMessageValidity('Geçerli');
//        }
//    }
//    
//    return (
//        <form>
//            <label>Your message</label>
//            <input type="text" onChange={messageChangeHandler} />
//            <p>{messageValidity} message</p>
//        </form>
//    );
//const [counter, setCounter] = React.useState(0);
//    
//    function incrementCounterHandler() {
//        setCounter(prevCounter => prevCounter + 1);
//    }
//    
//    return (
//      <div>
//        <p id="counter">{counter}</p>
//        <button onClick={incrementCounterHandler}>Arttır</button>
//      </div>
//    );
}