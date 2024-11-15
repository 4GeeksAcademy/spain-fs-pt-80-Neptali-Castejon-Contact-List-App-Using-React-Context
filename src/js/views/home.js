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
            <Link onClick={()=>actions.selectContact(null)} to={'/contact/new'} className="btn btn-primary custom-button mb-3">
                Create contact
            </Link>
            {
                store.contacts?.map(el => 
                    <ContactCard 
                        key={el.id}
                        contact={el}
                    />
                )
            }
        </div>
    );
};
