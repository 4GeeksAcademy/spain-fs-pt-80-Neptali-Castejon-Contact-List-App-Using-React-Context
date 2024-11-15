import React from "react";
import { ContactForm } from "./contactForm.jsx";
import "../../styles/contactForm.css";

export const Contact = () => {
    return(
        <div className="text-center mt-5 d-flex justify-content-center flex-column align-items-center">
            <header>
                <h1 className="todo-app__title">Create Contact</h1>
            </header>
            <div className="d-flex justify-content-center">
                <ContactForm />
            </div>
        </div>
    )
}