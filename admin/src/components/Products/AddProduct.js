import "./AddProduct.css";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { CreateProduct } from "../../store/actions/Procucts";
import Select from "react-select";
import { storage } from "../../FireBase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const AddProduct = () => {
    const RegisterUserState = useSelector((state) => state.RegisterUser);
    const userId = useSelector((state) => state.LogIn._id);
    const dispatch = useDispatch();
    const [catisempty, setCatisEmpty] = useState();
    const [qualityisempty, setQualityisEmpty] = useState();
    const [progress, setProgress] = useState(0);
    const [image, setImage] = useState("");
    const [qualityValue, setQualityValue] = useState();
    const [catValue, setCatValue] = useState();
    const customStyles = {
        option: (provided, state) => ({
            ...provided,

            margin: "0px",
            padding: "6px",
            borderBottom: "1px dotted silver",
            color: state.isSelected ? "white" : "black",
            backgroundColor: state.isSelected
                ? "rgba(245, 13, 13, 0.241)"
                : "white",
        }),

        control: (base) => ({
            ...base,
            margin: "auto",
            border: "solid 1px silver",
            boxShadow: "none",
        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 0.8;
            const transition = "opacity 300ms";

            return { ...provided, opacity, transition };
        },
    };

    const selectOptions = [
        { value: "computer", label: "Computers" },
        { value: "laptop", label: "Laptops" },
        { value: "accesory", label: "Accesories" },
        { value: "officetech", label: "Office Tech" },
        { value: "phone", label: "Smart Phones" },
        { value: "battery", label: "Battries" },
        { value: "cctv", label: "CCTV" },
        { value: "gameconsole", label: "Game Consoles" },
    ];
    const ukusedoptions = [
        { value: true, label: "UK Used" },
        { value: false, label: " Brand New" },
    ];
    var evalue = [];
    const handlecategoryvalue = (e) => {
        evalue = [];
        e &&
            e.map((element) => {
                evalue.push(element.value);
            });

        setCatValue(evalue);
        setCatisEmpty(false);
    };

    const handlequalityvalue = (e) => {
        setQualityValue(e.value);
    };

    const formik = useFormik({
        initialValues: {
            image: `${image}`,
            title: "",
            category: "",
            price: "",
            size: "",
            color: "",
            ukUsed: qualityValue,
            inStock: "",
            desc: "",
        },

        validationSchema: Yup.object({
            image: Yup.string(),

            title: Yup.string()
                .min(5, "product name is too short ")
                .required("required"),

            category: Yup.array(),

            price: Yup.number().min(3, "Invalid Price").required("required"),

            size: Yup.string(),
            color: Yup.string(),
            ukUsed: Yup.boolean(),
            inStock: Yup.number().required("required"),

            desc: Yup.string()
                .min(8, "Description is too short")
                .required("required"),
        }),

        onSubmit: (formik) => {
            if (!catValue[0]) {
                setCatisEmpty(true);
            } else if (!qualityValue) {
                setQualityisEmpty(true);
            } else {
                const product = {
                    image: image,
                    title: formik.title,
                    category: catValue,
                    price: formik.price,
                    size: formik.size,
                    color: formik.color,
                    ukUsed: qualityValue,
                    inStock: formik.inStock,
                    desc: formik.desc,
                };
                setCatisEmpty(false);
                // uploadfile(image).then(dispatch(CreateProduct(product)));

                // uploadfile(image);
                // setTimeout(() => {
                //     dispatch(CreateProduct(product));
                // }, 1600);

                console.log(product);
            }
        },
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        const file = e.target.files[0];

        setImage(file);
    };

    const uploadfile = (file) => {
        if (!file) return;
        const storageRef = ref(storage, `/files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const prog = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );

                setProgress(prog);
            },
            (err) =>
                // HANDLE_ERR
                console.log(err),
            () => {
                // CALL_BACK
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                    setImage(url);
                });
            }
        );
    };
    return (
        <div className="addproductdiv">
            <h1>AddProduct</h1>

            {image && <img src={URL.createObjectURL(image)} alt="" />}

            {progress > 0 && progress != 100 && <h3>loading {progress} %</h3>}

            <form onSubmit={formik.handleSubmit}>
                <input
                    id="image"
                    type="file"
                    onChange={handleSubmit}
                    required
                />
                <br />
                <p>{formik.errors.image}</p>
                <br />
                <input
                    type="text"
                    id="title"
                    placeholder="Product Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.title}
                />
                {formik.touched.title && formik.errors.title ? (
                    <p>{formik.errors.title}</p>
                ) : null}
                <br />
                <Select
                    className="select"
                    id="category"
                    styles={customStyles}
                    isMulti
                    options={selectOptions}
                    placeholder={"Categories"}
                    onChange={(e) => {
                        handlecategoryvalue(e);
                    }}
                />
                {catisempty ? <p>empty</p> : null}
                <br />
                <Select
                    className="select"
                    id="ukUsed"
                    styles={customStyles}
                    options={ukusedoptions}
                    placeholder={"Quality"}
                    onChange={(e) => {
                        handlequalityvalue(e);
                    }}
                />
                {qualityisempty ? <p>required</p> : null}
                <br />
                <input
                    type="number"
                    id="inStock"
                    placeholder="Available Quantity"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.inStock}
                />
                {formik.touched.inStock && formik.errors.inStock ? (
                    <p>{formik.errors.inStock}</p>
                ) : null}
                <br /> <br />
                <br />
                <input
                    type="text"
                    id="size"
                    placeholder="Size"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.size}
                />
                {formik.touched.size && formik.errors.size ? (
                    <p>{formik.errors.size}</p>
                ) : null}
                <br />
                <input
                    type="text"
                    id="color"
                    placeholder="Color"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.color}
                />
                {formik.touched.inStock && formik.errors.color ? (
                    <p>{formik.errors.color}</p>
                ) : null}
                <br />
                <input
                    type="number"
                    id="price"
                    placeholder="Product Price"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.price}
                />
                {formik.touched.price && formik.errors.price ? (
                    <p>{formik.errors.price}</p>
                ) : null}
                <br />
                <textarea
                    name="desc"
                    id="desc"
                    placeholder="Product Description"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.desc}
                />
                {formik.touched.desc && formik.errors.desc ? (
                    <p>{formik.errors.desc}</p>
                ) : null}
                <br />
                <input type="submit" value="Save" id="btn" />
                <br />
            </form>
        </div>
    );
};

export default AddProduct;
