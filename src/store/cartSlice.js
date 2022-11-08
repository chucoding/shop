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
        addList(state, action) {
            const item = {...action.payload};
            item.name = item.title;
            item.count = 1;
            state.push(item);
        }
    }
})

export const { changeCount, addList } = cart.actions;
export default cart;