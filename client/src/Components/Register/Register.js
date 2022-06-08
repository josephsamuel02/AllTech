import "./Register.css";

import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdCheckCircleOutline, MdVisibility } from "react-icons/md";
import Spinner from "react-spinner-material";
import * as Yup from "yup";
import { RegisterUser } from "../../store/actions/User";
const Register = () => {
    const RegisterUserState = useSelector((state) => state.RegisterUser);
    const USER = useSelector((state) => state.LogIn);
    const dispatch = useDispatch();

    const [invUser, setInvUser] = useState(false);
    const [passwordShown, setPasswordShown] = useState(false);
    const [pass, setConfirmpass] = useState();
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            password: "",
        },

        validationSchema: Yup.object({
            name: Yup.string()
                .max(15, "name cannot exceed 25 characters")
                .required("required"),
            email: Yup.string().min(10, "check email ").required("required"),
            phone: Yup.string()
                .max(12, "phone cannot exceed 12 characters")
                .required("required"),
            password: Yup.string()
                .min(8, "password cannot be less than 10 characters")
                .required("required"),
        }),

        onSubmit: (formik) => {
            const newUser = {
                username: formik.name,
                email: formik.email,
                phone: formik.phone,
                password: formik.password,
            };
            if (pass === formik.password) {
                dispatch(RegisterUser(newUser));
                if (USER.status == 401) {
                    setInvUser(true);
                } else {
                    setInvUser("successful");
                    setTimeout(() => {
                        window.location.href = "/login";
                    }, 3000);
                }
            }
        },
    });

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    return (
        <div id="redister">
            <form onSubmit={formik.handleSubmit}>
                <h4 id="formlabel">Sign Up</h4>
                <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ? (
                    <p id="warn">{formik.errors.name}</p>
                ) : null}
                <input
                    type="text"
                    id="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ? (
                    <p id="warn">{formik.errors.email}</p>
                ) : null}
                <input
                    type="number"
                    id="phone"
                    placeholder="Phone"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone ? (
                    <p id="warn">{formik.errors.phone}</p>
                ) : null}
                <input
                    type="password"
                    id="password"
                    placeholder="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password ? (
                    <p id="warn">{formik.errors.password}</p>
                ) : null}

                <div id="passbox">
                    <input
                        id="confirmpassword"
                        placeholder="confirm password"
                        type={passwordShown ? "text" : "password"}
                        onChange={(e) => setConfirmpass(e.target.value)}
                    />
                    <span onClick={togglePassword}>
                        <MdVisibility size={17} color="silver" />
                    </span>
                </div>
                <input type="submit" value="Sign Up" id="btn" />
                {RegisterUserState ===
                    "user already exist, use another info" && (
                    <p id="warn">User already exist</p>
                )}
                {invUser === true && <p id="warn"> *user email is in use </p>}
                {invUser === "successful" && (
                    <>
                        <p
                            id="warn"
                            style={{
                                color: "rgb(9, 189, 21)",
                                fontSize: "15px",
                            }}
                        >
                            <MdCheckCircleOutline
                                color="rgb(9, 189, 21)"
                                size={14}
                            />

                            <span style={{ padding: "5px" }}>
                                Registration is Successful.
                            </span>
                        </p>
                        <span
                            style={{
                                margin: "auto",
                                padding: "5px",
                                textAlign: "center",
                            }}
                        >
                            <Spinner
                                radius={17}
                                color={"#9babefbe"}
                                stroke={3}
                                visible={true}
                            />
                        </span>
                    </>
                )}
                <div id="refarebox">
                    <p>
                        Already have an account ?
                        <span onClick={() => window.location.replace("/login")}>
                            LogIn
                        </span>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Register;
