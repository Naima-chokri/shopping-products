import "./App.css";
import { useEffect } from "react";
import { getALLProducts } from "./JS/actions/productActions";
import { useDispatch } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import AddProduct from "./components/AddProduct/AddProduct";
import EditProduct from "./components/EditProduct/EditProduct";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getALLProducts());
  }, []);

  return (
    <div className="App">
      <h1>WORKSHOP MERN</h1>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <ProductList />
              <Link to="/addProduct">
                <button>ADD PRODUCT</button>
              </Link>
            </div>
          }
        />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/editProduct/:id" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
