import React, { useContext, useEffect, useState } from 'react'

import { toast } from 'react-hot-toast';
import api from "./axiosconfig";
import { datacontext } from './context';

const Addtodo = () => {
    const{state,dispatch}=useContext(datacontext)
    

    const [singledata, updateddata] = useState("")//state to store user task
    function adddata(event) {
        updateddata(event.target.value)


    }
    async function submit(event) {
        
        event.preventDefault()
        
        try {
            const response = await api.post("/addtodo",{task:singledata})
            if (response.data.success) {
                toast.success(response.data.message)
                updateddata("")
                gettodos();
            }


        }
        catch (error) {
            toast.error(error.response?.data?.message)
        }
    }
    const gettodos=async()=>{
        try{
            const response=await api.get("/todos")
            console.log("response from back",response.data)
            if(response.data.success){
                console.log("dispatching todos",response.data.todoexists)
                dispatch({type:"todos",payload:response.data.todoexists})
                
            }
        }
        catch(error){

        }

    }

    useEffect(()=>{
        gettodos()
    },[])


    return (
        <div>
            <form onSubmit={submit}>
                <label>Task---</label>
                <input placeholder='Enter your task' name='task' onChange={adddata} value={singledata} type='text'></input>
                <input type="submit"></input>


            </form>

        </div>
    )
}

export default Addtodo
