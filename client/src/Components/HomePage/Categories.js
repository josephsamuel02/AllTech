import "./Categories.css";
import { Link } from "react-router-dom";
const Categories = () => {
    return (
        <div>
            <div className="categoriesBox">
                <div className="categoriesCard">
                    <Link to="/categoryList?category=foodstuffs">
                        <img src="photos/measure foods.jpg" alt="" />
                        <p>Food Stuffs</p>
                    </Link>
                </div>

                <div className="categoriesCard">
                    <Link to="/categoryList?category=groceries">
                        <img src="photos/PackagedFoods.jpg" alt="" />
                        <p>Groceries</p>
                    </Link>
                </div>

                <div className="categoriesCard">
                    <Link to="/categoryList?category=food">
                        <img src="photos/Baked food.jpg" alt="" />
                        <p>Baked Foods</p>
                    </Link>
                </div>

                <div className="categoriesCard">
                    <Link to="/categoryList?category=vegesandspices">
                        <img
                            src="photos/measure foods.jpg"
                            alt="Veges and Spices"
                        />
                        <p>Veges and Spices</p>
                    </Link>
                </div>
            </div>

            <div className="categoriesBox">
                <div className="categoriesCard">
                    <Link to="/categoryList?category=cusmethics">
                        <img src="photos/Pets.jpg" alt="cusmethics" />
                        <p>Cusmethics</p>
                    </Link>
                </div>
                <div className="categoriesCard">
                    <Link to="/categoryList?category=accesories">
                        <img src="photos/accesories.jpg" alt="" />
                        <p>Accesories</p>
                    </Link>
                </div>

                <div className="categoriesCard">
                    <Link to="/categoryList?category=computers">
                        <img src="photos/computers 1.jpg" alt="" />
                        <p>Computers</p>
                    </Link>
                </div>

                <div className="categoriesCard">
                    <Link to="/categoryList?category=wears">
                        <img src="photos/Wears.jpg" alt="" />
                        <p>Wears</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Categories;
