import { de } from "@faker-js/faker";
import { requestAnimFrame } from "chart.js/helpers";
import { name } from "faker/lib/locales/az";
import { title } from "process";
// import createSlice from "./slices/cartSlice"




const { createSlice } =require("@reduxjs/toolkit");

const initialState=(typeof window !== "undefined" && JSON.parse(localStorage.getItem("cart"))) || []; 

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
     addToCart: (state, action) => {
    const {id , title, salePrice, imageUrl, storeId:vendorId } = action.payload;
    //check if the item already exists in the cart
    const existingItem = state.find((item) => item.id === id);
    if(existingItem){
        //if the item exists, update the quantity
        existingItem.qty += 1;

    } else {
        // if the item doesn't exist, add it to the cart
        const newItem= { id, title, salePrice, qty:1, imageUrl, vendorId};
        state.push(newItem);
        if(typeof window !== "undefined" ){
            localStorage.setItem("cart",JSON.stringify([...state]));
        }
    }
},

// Your Logic for addToCart
removeFromCart: (state, action) => {
    const cartId = action.payload;
    const newState = state.filter((item)=> item.id !== cartId);
    if(typeof window !== "undefined" ){
        localStorage.setItem("card",JSON.stringify(newState));
       
    }
     return newState;

},

//Your Logic for removeFromCart
incrementQty: (state, action) => {
    const cartId = action.payload;
    const cartItem = state.find((item) => item.id === cartId);
if(cartItem) {
    cartItem.qty +=1;
    if(typeof window !== "undefined" ){
        localStorage.setItem("cart",JSON.stringify([...state]));
       
    }

} 

},
decrementQty: (state, action) => {
    const cartId = action.payload;
    const cartItem = state.find((item) => item.id === cartId);
if(cartItem && cartItem.qty > 1) {
    cartItem.qty -= 1;
      
        if(typeof window !== "undefined" ){
         
            localStorage.setItem("cart",JSON.stringify([...state]));

        }
    }
},
// Your Logic for decrementQty
},
  });

export const { addToCart,removeFromCart,incrementQty,decrementQty} = cartSlice.actions;
    export default cartSlice.reducer;





// import { de } from "@faker-js/faker";
// import { requestAnimFrame } from "chart.js/helpers";
// import { name } from "faker/lib/locales/az";
// import { title } from "process";
// // import cartSlice from "./slices/cartSlice"


// const { createSlice } =require("@reduxjs/toolkit");
// const initialState=[];
// const cartSlice = createSlice({
//     name:"cart",
//     initialState,
//     // reducers:{
        
//     //     initiaState,
// reducers: {
// addToCart: (state, action) => {
//     const {id , title, salePrice, imageUrl } = action.payload;
//     const existingItem = state.find((item)=>item.id===id);
//     if(existingItem){
//         existingItem.qty +=1;

//     }else{
//         state.push({id,title,salePrice,qty:1,imageUrl});
//     }
// },

// // Your Logic for addToCart
// removeFromCart: (state, action) => {
//     const cartId = action.payload;
//     return state.filter((item)=> item.id !== cartId);
// },

// //Your Logic for removeFromCart
// incrementQty: (state, action) => {
//     const cartId = action.payload;
//     const cartItem = state.find((item) => item.id === cartId);
// if(cartItem){
//     cartItem.qty +=1;

// } 

// },
// decrementQty: (state, action) => {
//     const cartId = action.payload;
//     const cartItem = state.find((item) => item.id === cartId);
// if(cartItem && cartItem.qty > 1){
//     cartItem.qty -= 1;

// }
// },
// // Your Logic for decrementQty
// },
//     // },
// });

// export const { addToCart,removeFromCart,incrementQty,decrementQty} = cartSlice.actions;
//     export default cartSlice.reducer;

