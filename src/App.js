import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import Home from "./Pages/Home";
import store from "./store/store";
import { Provider } from "react-redux";
function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />

        <Routes>
          <Route path="*" element={<Product />} />
          <Route path="Cart" element={<Cart />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
