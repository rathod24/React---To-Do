import React from 'react'

const TodoList = ({list,SetList}) => {
    const removeItem=(e,index)=>{
        e.preventDefault()
        let updatedList =list.filter((item)=>{
            return list.indexOf(item)!==index;
        })
        SetList(updatedList)
    }
  return (
    <div className='TodoList'>
        {
            list.map((item,index)=>{
                return (
                    <div className='item-box' key={index}>
                        <p>{item}</p>
                        <button onClick={(e)=>removeItem(e,index)} ><ion-icon name="close-outline" id='delete-btn' ></ion-icon></button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default TodoList