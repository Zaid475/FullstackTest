import React, { useContext, useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import api from './axiosconfig'
import { datacontext } from './context'

const Todolist = () => {
    const{state,dispatch}=useContext(datacontext)
    const [alltodos, updatedalltodos] = useState([])

    
    useEffect(() => {
        console.log("state.todos",state.todos)
        if(state?.todos){
            updatedalltodos(state.todos)
        }

    }, [state])


    return (
        <div>
            {alltodos && (alltodos.length > 0 ? <div>
                {alltodos.map((todo) => {
                  return   <h3 key={todo._id}>{todo.task}</h3>

                })}

            </div>
                :


                <div>todo not found</div>)}




        </div>
    )
}



export default Todolist
