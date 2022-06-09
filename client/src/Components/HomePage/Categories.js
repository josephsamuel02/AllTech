import "./Categories.css";
import { Link } from "react-router-dom";
const Categories = () => {
    return (
        <div>
            <div className="categoriesBox">
                <div className="categoriesCard">
                    <Link to="/categoryList?category=laptop">
                        <img
                            src="https://res.cloudinary.com/promotion-army/image/upload/v1654795641/AllTech/maxim-hopman-Hin-rzhOdWs-unsplash_hwnl9l.jpg"
                            alt=""
                        />
                        <p>Laptops</p>
                    </Link>
                </div>

                <div className="categoriesCard">
                    <Link to="/categoryList?category=computer">
                        <img
                            src="https://res.cloudinary.com/promotion-army/image/upload/v1654795634/AllTech/pexels-mockupeditorcom-205316_pzsia4.jpg"
                            alt=""
                        />
                        <p>Desktop Computers</p>
                    </Link>
                </div>

                <div className="categoriesCard">
                    <Link to="/categoryList?category=phone">
                        <img
                            src="https://res.cloudinary.com/promotion-army/image/upload/v1654795636/AllTech/pexels-anna-nekrashevich-8533741_cbyf0e.jpg"
                            alt=""
                        />
                        <p>Mobile Phones</p>
                    </Link>
                </div>

                <div className="categoriesCard">
                    <Link to="/categoryList?category=accesory">
                        <img
                            src="https://res.cloudinary.com/promotion-army/image/upload/v1654795650/AllTech/pexels-sound-on-3394650_kxyg6e.jpg"
                            alt=""
                        />
                        <p>Accesories</p>
                    </Link>
                </div>
            </div>

            <div className="categoriesBox">
                <div className="categoriesCard">
                    <Link to="/categoryList?category=cctv">
                        <img
                            src="https://res.cloudinary.com/promotion-army/image/upload/v1654795657/AllTech/pexels-marian-florinel-condruz-7848351_o0cjiz.jpg"
                            alt=""
                        />
                        <p> CCTV Cameras </p>
                    </Link>
                </div>

                <div className="categoriesCard">
                    <Link to="/categoryList?category=battery">
                        <img
                            src="https://res.cloudinary.com/promotion-army/image/upload/v1654795631/AllTech/81OXadNoQkL._AC_UL480_FMwebp_QL65__jo0bkt.webp"
                            alt="cusmethics"
                        />
                        <p> Batteries</p>
                    </Link>
                </div>

                <div className="categoriesCard">
                    <Link to="/categoryList?category=electronics">
                        <img
                            src="https://res.cloudinary.com/promotion-army/image/upload/v1654795642/AllTech/pexels-anton-4132534_ujgtg5.jpg"
                            alt="Veges and Spices"
                        />
                        <p>Electronics</p>
                    </Link>
                </div>
                <div className="categoriesCard">
                    <Link to="/categoryList?category=officetech">
                        <img
                            src="https://res.cloudinary.com/promotion-army/image/upload/v1654795657/AllTech/pexels-ekaterina-bolovtsova-4680351_lqmhfl.jpg"
                            alt=""
                        />
                        <p>Office Tech</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Categories;
