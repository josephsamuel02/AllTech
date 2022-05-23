import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import { useSelector } from "react-redux";

import Nav from "./Components/Nav/Nav";
import Home from "./Components/HomePage/Home";
import CategoryList from "./Components/CategoryPage/CategoryList";
import Product from "./Components/ProductPage/Product";
import Cart from "./Components/Cart/Cart";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import Orderspage from "./Components/Orderspage/OrdersPage";
import Footer from "./Components/Footer/Footer";
const App = () => {
    const theuser = useSelector((state) => state.LogIn.username);
    // var user = "Guest";
    // theuser ? (user = theuser) : (user = false);

    return (
        <div className="App">
            <Router>
                <Nav />
                <br />
                <br />
                <br /> <br />
                <Routes>
                    <Route
                        path="/register"
                        element={
                            theuser ? <Navigate replace to="/" /> : <Register />
                        }
                    />

                    <Route
                        path="/login"
                        element={
                            theuser ? <Navigate replace to="/" /> : <Login />
                        }
                    />

                    <Route path="/orders" element={<Orderspage />} />

                    <Route path="/cart" element={<Cart />} />

                    <Route path="/product/:id" element={<Product />} />

                    <Route path="/categoryList" element={<CategoryList />} />

                    <Route path="/" element={<Home />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
