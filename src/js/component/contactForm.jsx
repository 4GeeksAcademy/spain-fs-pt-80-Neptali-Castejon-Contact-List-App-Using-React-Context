import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const ContactForm = () => {

    const { store, actions } = useContext(Context);
    const { id } = useParams(); 

    // Si el contacto esta seleccionad, sera el valor por defecto
    const [formData, setFormData] = useState({
        fname: store.selected?.fname || '',
        address: store.selected?.address || '',
        email: store.selected?.email || '',
        phone: store.selected?.phone || '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
		e.preventDefault();
		
	};

    return (
        <form onSubmit={handleSubmit} className="form-floating form-custom">
            
            <div className="form-floating mb-3">
                <input
                    name="fname"
                    id="fname"
                    type="text"
                    className="form-control rounded-4"
                    placeholder="Name"
                    required
                    value={formData.fname}
                    onChange={handleChange}
                />
                <label htmlFor="fname">Name</label>
            </div>

            <div className="form-floating mb-3">
                <input
                    name="address"
                    id="address"
                    type="text"
                    className="form-control rounded-4"
                    placeholder="Address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                />
                <label htmlFor="address">Address</label>
            </div>

            <div className="form-floating mb-3">
                <input
                    name="email"
                    id="email"
                    type="email"
                    className="form-control rounded-4"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
            </div>

            <div className="form-floating mb-3">
                <input
                    name="phone"
                    id="phone"
                    type="text"
                    className="form-control rounded-4"
                    placeholder="Phone number"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                />
                <label htmlFor="phone">Phone number</label>
            </div>
            { store.selected ? <input type="submit" value={'Editar'} /> : <input type="submit" value={'Create'} /> } 
            <Link to={'/'}>
                Volver a home
            </Link>
        </form>
    );
};
