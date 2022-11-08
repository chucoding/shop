import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name : 'cart',
    initialState: [
        {id:0, name:'White and Black', count:2},
        {id:2, name:'Grey Yordan', count:1}
    ],
    reducers : {
        changeCount(state, action) {
            const item = state.find(item => item.id == action.payload);
            item.count += 1;
        },
        addItem(state, action) {
            const item = state.find(item => item.id === action.payload.id) || {...action.payload};
            if(state.includes(item)) {
                item.count += 1;
            } else {
                item.name = item.title;
                item.count = 1;
                state.push(item); 
            }
        },
        removeItem(state, action) {
            state.splice(state.findIndex(item => item.id == action.payload),1);
        }
    }
})

export const { changeCount, addItem, removeItem } = cart.actions;
export default cart;