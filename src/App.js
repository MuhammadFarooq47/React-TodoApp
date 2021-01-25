import React, { useState } from 'react';
import './App.css';
import ToDoList from './ToDoLists'
import Inc_Dec from './Inc&Dec'
import Tooltip from '@material-ui/core/Tooltip';


function App() {

  //inputList hamara main hy jsmy hum apny input ka data pass kry hn or phr ya data hum items store kry hn...
  const [inputList, setInputList] = useState("")
  
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value)
  };

  const listofItems = () => {
    setItems((oldItems) => {
      //oldItems is a empty array...
      console.log(oldItems)
      return [...oldItems, inputList]
    })
    setInputList("")
    
  };

    const deleteItems = (id) =>{
      console.log("del")
      setItems((oldItems)=>{
        return oldItems.filter((arrElement, index) => {
          return index !== id;

        })
      })
        
    }

  return (
   <>
  
   <div className="App">

    <h1>ToDo List</h1>
    <br />
    <input type="text" placeholder= "Enter Items" value = {inputList} onChange = {itemEvent} />
    <Tooltip title="add">
    <button onClick = {listofItems}> + </button>
    </Tooltip>
    <ol>
      {/* <li> {inputList} </li> */}
    {/* map function k andr 4 chezn hoti hn 1. current value, 2. current value ka index number 
    3. kis array k sath deal kry hn hum wo, 4. this not useable */}
   {items.map((itemValue, index) => {

     return <ToDoList key = {index} 
     id = {index} 
     text = {itemValue} 
     set = {deleteItems} />
     
      })}

    </ol>
    
    

   </div>
   
   <Inc_Dec />

   </>
  );
}

export default App;
