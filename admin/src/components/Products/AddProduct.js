import "./AddProduct.css";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { CreateProduct } from "../../store/actions/Procucts";
import { storage } from "../../FireBase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

const AddProduct = () => {
    const RegisterUserState = useSelector((state) => state.RegisterUser);
    const userId = useSelector((state) => state.LogIn._id);
    const dispatch = useDispatch();

    const [progress, setProgress] = useState(0);
    const [image, setImage] = useState("");

    const formik = useFormik({
        initialValues: {
            image: `${image}`,
            title: "",
            desc: "",
            category: "",
            price: "",
        },

        validationSchema: Yup.object({
            image: Yup.string(),
            title: Yup.string()
                .min(5, "product name is too short ")
                .required("required"),
            desc: Yup.string()
                .min(8, "Description is too short")
                .required("required"),
            category: Yup.string()
                .min(3, "Category cannot be less than 3 characters")
                .required("required"),
            price: Yup.number().min(2, "Invalid Price").required("required"),
        }),

        onSubmit: (formik) => {
            const product = {
                title: formik.title,
                desc: formik.desc,
                image: image,

                category: [formik.category],
                price: formik.price,
            };
            dispatch(CreateProduct(product));
            console.log(product);
        },
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        uploadfile(file);
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
        <div>
            <h1>AddProduct</h1>
            <br />
            <div>{image && <img src={image} alt="" />}</div> <br />
            <form>
                <input type="file" onChange={handleSubmit} />
            </form>
            <br />
            {progress > 0 && progress != 100 && <h3>loading {progress} %</h3>}
            <br /> <br />
            <form onSubmit={formik.handleSubmit}>
                {formik.touched.image && formik.errors.image ? (
                    <p>{formik.errors.image}</p>
                ) : null}
                <br /> <br />
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
                <br /> <br />
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
                <input
                    type="text"
                    id="category"
                    placeholder="product Category"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.category}
                />
                {formik.touched.category && formik.errors.category ? (
                    <p>{formik.errors.category}</p>
                ) : null}
                <br /> <br />
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
                <br /> <br />
                <h5>Is this procuct currently availabel for sale</h5>
                <br /> <br />
                <input type="submit" value="Save" id="btn" />
                <br /> <br />
            </form>
        </div>
    );
};

export default AddProduct;
