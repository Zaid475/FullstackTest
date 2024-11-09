import React, { useState } from 'react'

import { toast } from 'react-hot-toast';
import api from "./axiosconfig";

const Addtodo = () => {
    

    const [singledata, updateddata] = useState("")//state to store user task
    function adddata(event) {
        updateddata(event.target.value)


    }
    async function submit(event) {
        
        event.preventDefault()
        
        try {
            const response = await api.post("/addtodo", {Userdata: {task: singledata}})
            if (response.data.success) {
                toast.success(response.data.message)
                singledata("")
            }


        }
        catch (error) {
            toast.error(error)
        }
    }


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
