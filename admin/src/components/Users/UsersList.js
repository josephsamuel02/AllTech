import "./UsersList.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format } from "timeago.js";

import { GetUsers } from "../../store/actions/User";

const UsersList = () => {
    const Users = useSelector((state) => state.GetUsers);
    const dispatch = useDispatch();
    useEffect(() => dispatch(GetUsers()), [dispatch]);

    return (
        <div className="userslist">
            <h2>Users </h2>
            <div className="listusersbox">
                {Users &&
                    Users.map((i) => (
                        <Link to={"/usser"} key={i._id}>
                            <div className="listuserscard">
                                <img src="https://picsum.photos/250" alt="" />
                                <div className="detail">
                                    <h4>{i.username}</h4>

                                    <p>
                                        E-mail: <span>{i.email}</span>
                                    </p>
                                    {i.address && (
                                        <p>
                                            Address:
                                            <span>
                                                user address street adresss
                                            </span>
                                        </p>
                                    )}
                                    <p>
                                        Phone: <span>{i.phone}</span>
                                    </p>
                                    <p>
                                        Online:
                                        <span> {format(i.createrAt)}</span>
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    );
};

export default UsersList;
