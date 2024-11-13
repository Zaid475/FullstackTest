import { createContext, useReducer } from "react"

 export const datacontext=createContext();

const Reducer=(state,action)=>{
switch(action.type){
    case "todos":
        console.log("dispatching todos",action.payload)
        return {...state,todos:action.payload}

        default:
            return state
}

}





const initialstate={todos:[]}

const Parentcompo=({children})=>{
const[state,dispatch]=useReducer(Reducer,initialstate)


    return (
        <datacontext.Provider value={{state,dispatch}}>
            {children}

        </datacontext.Provider>




    )




}

export default Parentcompo;