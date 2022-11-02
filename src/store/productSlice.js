const { createSlice } = require("@reduxjs/toolkit");
// ____________________________States and other
export const STATUSES = Object.freeze({
  IDEL: "ide",
  ERROR: "error",
  LOADING: "loading",
});
// ___________________main_function🙂
const productSlice = createSlice({
  name: "Product",
  initialState: {
    data: [],
    status: STATUSES.IDEL,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});
export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

//___________________________________Thunk_for_ApI_request:😘
export function fetchProducts() {
  return async function fetchProducts(dispatch, getState) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await res.json();
      dispatch(setProducts(data));
      dispatch(setStatus(STATUSES.IDEL));
    } catch (err) {
      console.log("Error from me" + err);
      dispatch(setStatus(STATUSES.ERROR));  
    }
  };
}
