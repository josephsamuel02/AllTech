import "./Home.css";

import Categories from "./Categories";
import HomePageProducts from "./HomePageProducts";
import Nav2 from "../Nav2/Nav2";
import { HomePostersSlide, HomePostersSlide2 } from "../Adds/HomePostersSlide";
const Home = () => {
    let dateNow = new Date().getTime();
    let LoginDate = Number(localStorage.getItem("iROkloginExp"));
    if (!LoginDate) {
        console.log("process");
    } else if (LoginDate < dateNow) {
        localStorage.removeItem("iROkloginExp");
        localStorage.removeItem("persist:root");
        window.location.replace("/login");
    } else {
        console.log("process");
    }

    return (
        <div className="home">
            <Nav2 />
            <br />
            <br />

            <Categories />
            <HomePostersSlide />

            <HomePageProducts />
            <HomePostersSlide2 />

            <HomePageProducts />
        </div>
    );
};

export default Home;
