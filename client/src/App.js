import "./App.css";
import { useEffect } from "react";
import { getALLProducts } from "./JS/actions/productActions";
import { useDispatch } from "react-redux";
import { Link, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import AddProduct from "./components/AddProduct/AddProduct";
import EditProduct from "./components/EditProduct/EditProduct";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login"
import SignUp from "./components/SignUp/SignUp";
import { getCurrent } from "./JS/actions/userActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getALLProducts());
    dispatch(getCurrent());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NavBar/>
              <ProductList />
              <Link to="/addProduct">
                <button>ADD PRODUCT</button>
              </Link>
            </div>
          }
        />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/editProduct/:id" element={<EditProduct />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<SignUp/>} />
      </Routes> 
    </div>
  );
}

export default App;
