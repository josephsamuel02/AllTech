import "./Categories.css";
import { Link } from "react-router-dom";
const Categories = () => {
    return (
        <div>
            <div className="categoriesBox">
                <div className="categoriesCard">
                    <Link to="/categoryList?category=laptops">
                        <img src="photos/measure foods.jpg" alt="" />
                        <p>Laptops</p>
                    </Link>
                </div>

                <div className="categoriesCard">
                    <Link to="/categoryList?category=computer">
                        <img src="photos/PackagedFoods.jpg" alt="" />
                        <p>Desktop Computers</p>
                    </Link>
                </div>

                <div className="categoriesCard">
                    <Link to="/categoryList?category=phones">
                        <img src="photos/computers 1.jpg" alt="" />
                        <p>Mobile Phones</p>
                    </Link>
                </div>

                <div className="categoriesCard">
                    <Link to="/categoryList?category=accesories">
                        <img src="photos/Baked food.jpg" alt="" />
                        <p>Accesories</p>
                    </Link>
                </div>
            </div>

            <div className="categoriesBox">
                <div className="categoriesCard">
                    <Link to="/categoryList?category=cctv">
                        <img src="photos/Wears.jpg" alt="" />
                        <p> CCTV Cameras </p>
                    </Link>
                </div>

                <div className="categoriesCard">
                    <Link to="/categoryList?category=batteries">
                        <img src="photos/Pets.jpg" alt="cusmethics" />
                        <p> Batteries</p>
                    </Link>
                </div>

                <div className="categoriesCard">
                    <Link to="/categoryList?category=electronics">
                        <img
                            src="photos/measure foods.jpg"
                            alt="Veges and Spices"
                        />
                        <p>Electronics</p>
                    </Link>
                </div>
                <div className="categoriesCard">
                    <Link to="/categoryList?category=officetech">
                        <img src="photos/accesories.jpg" alt="" />
                        <p>Office Tech</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Categories;
