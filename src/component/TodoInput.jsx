import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';

const getTodo=()=>{
    let list=JSON.parse(localStorage.getItem("todo"));
    if(list){
        return list
    }else return []
}
const TodoInput = () => {
    const [inputItem,SetInputItem]=useState("");
    const [list,SetList]=useState(getTodo);

    useEffect(()=>{
        localStorage.setItem("todo",JSON.stringify(list))
    },[list])
    
    function addItem(e){
       e.preventDefault();
       if(!inputItem){
         alert("Enter Todo -Item")
       }else{
        SetList([...list,inputItem]);
        SetInputItem("");
       }
       
       
    }
    
  return (
    <div className='container' >
        <form onSubmit={addItem}>
            <input type="text" className='input-box'value={inputItem} onChange={(e)=>SetInputItem(e.target.value)}/>
            <button  type='submit'><ion-icon name="add-sharp" id='add-btn' ></ion-icon></button>
        </form>
        <TodoList list={list} SetList={SetList}/>
        
    </div>
  )
}

export default TodoInput