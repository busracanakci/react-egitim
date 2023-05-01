import React , {useState} from 'react';
//import ExpenseItem from './components/ExpenseItem';
//import ExerciseComponent from './ExerciseComponent';
//import Navbar from './components/Navbar';
//import User from './components/User';
import './style.css';


export default function App() {
  const [newItem,setNewItem]=useState("");
  const [items,setItems] = useState([]);


  function addItem(){
    if(!newItem){
      alert("Yapılacaklar listesine bir içerik girmediniz");
      return;
    }

    const item = {
      id: Math.floor(Math.random()*1000),
      value : newItem
    };

    setItems((oldList) => [...oldList, item]);
    setNewItem("");

  }
  function remove(id){
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }
  return(
    <div className="text-color">
      <h1 className='div-center'>Yapılacaklar Listesi</h1>
      <div className='div-center'>
      <form onSubmit={(e)=> {
        e.preventDefault();
        addItem();
      }}>
      <input className='text-color'
      type="text"
      value={newItem}
      onChange={e => setNewItem(e.target.value)}
      />
      </form>
      <button onClick={(e) => addItem()}>Ekle</button>

      </div>
      <div className='div-center'>
      <ul >
       {items.map(item => {
        return <li className='list' key={item.id}> {item.value} <button onClick={e => remove(item.id)}>X</button>  </li>
       })}
      </ul>
      </div>
      
    </div>
    //<div>
    //  <Todo></Todo>
    //</div>
    //<div>
    //  
    //  <Navbar></Navbar>
    //  <hr/>
    //  <User
    //  name = "Büşra Çanakçı"
    //  task = "React Eğitim"
    //  time = "12686 dk"
    //  />
    //   <User
    //  name = "Deneme deneme"
    //  task = "React Eğitim"
    //  time = "12686 dk"
    //  />
    //  
    //</div>
  );
  // <ExerciseComponent />;
  
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