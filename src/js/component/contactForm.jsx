import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const ContactForm = () => {

    const { store, actions } = useContext(Context);
    const { id } = useParams(); 
    const navigate = useNavigate();

    // Si el contacto esta seleccionad, sera el valor por defecto
    const [formData, setFormData] = useState({
        name: store.selected?.name || '',
        phone: store.selected?.phone || '',
        email: store.selected?.email || '',
        address: store.selected?.address || '',      
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        store.selected ?
            actions.UpdContact(id, formData)
            :
            actions.createContact(formData)
            navigate('/')
    }

    return (
        <form onSubmit={handleSubmit} className="form-floating form-custom">
            <div className="form-floating mb-3">
                <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control rounded-4"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    aria-label="Contact's name"
                />
                <label htmlFor="name">Name</label>
            </div>

            <div className="form-floating mb-3">
                <input
                    id="phone"
                    name="phone"
                    type="text"
                    className="form-control rounded-4"
                    placeholder="Phone number"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    aria-label="Contact's phone number"
                />
                <label htmlFor="phone">Phone number</label>
            </div>

            <div className="form-floating mb-3">
                <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control rounded-4"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    aria-label="Contact's email address"
                />
                <label htmlFor="email">Email</label>
            </div>

            <div className="form-floating mb-3">
                <input
                    id="address"
                    name="address"
                    type="text"
                    className="form-control rounded-4"
                    placeholder="Address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    aria-label="Contact's address"
                />
                <label htmlFor="address">Address</label>
            </div>

            {store.selected ? 
                <input type="submit" value={'Edit Contact'} className="btn btn-primary custom-button" /> 
                : 
                <input type="submit" value={'Create Contact'} className="btn btn-primary custom-button" /> 
            }

            <Link to={'/'} className="btn btn-primary custom-button ms-2" aria-label="View agenda">
                Check Agenda
            </Link>
        </form>
    );
};
