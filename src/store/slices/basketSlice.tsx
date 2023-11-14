import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type BasketState = {
  basket: number[];
};

const initialState: BasketState = {
  basket: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addBasket(state, action: PayloadAction<number>) {
      if (!state.basket.includes(action.payload)) {
        state.basket.push(action.payload);
        localStorage.setItem("id", JSON.stringify(state.basket));
      }
    },
    removeBasket(state, action: PayloadAction<number>) {
      if (state.basket.includes(action.payload)) {
        console.log(state.basket.includes(action.payload))
        state.basket = state.basket.filter(item => item !== action.payload)
        localStorage.setItem("id", JSON.stringify(state.basket));
      }
    },
    updateBasket(state) {
      if (localStorage.getItem("id")) {
        try {
          state.basket = JSON.parse(localStorage.getItem("id") as string)
        } catch {
          state.basket = [];
          localStorage.removeItem("id");
        }
      }
    },
  },
});

const { actions, reducer } = basketSlice;

export const { addBasket, updateBasket, removeBasket } = actions;

export default reducer;
