import {createSlice} from "@reduxjs/toolkit"


   const cartSystem = createSlice({
    name:"CART",
    initialState:[],
   
    reducers:{
addCart(state,action){


     state.push(action.payload)
//console.log(action.payload);

//state.push("car")

},
removeCart(state,action){
 return state.filter((value)=>value.id!==action.payload)


//     console.log(action.payload);
//    state.pop(action.payload)
    
//state.pop()

}

    }

})

export default cartSystem.reducer
export const {addCart,removeCart} = cartSystem.actions