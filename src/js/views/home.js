import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import "../../styles/contactCard.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";
import { ContactCard } from "../component/contactCard.jsx";

export const Home = () => {
    const { store, actions } = useContext(Context);


    return (
        <div className="text-center mt-5 d-flex justify-content-center flex-column align-items-center">
            <header>
                <h1 className="todo-app__title">Contact Book</h1>
            </header>
            <ContactCard id={5} fname={'Pepe'} email={'pepe@pepe.pe'} address={'Pepe str'} phone={123456789} />
            <Link to={'/contact/new'}>
                Create contact
            </Link>
        </div>
    );
};
