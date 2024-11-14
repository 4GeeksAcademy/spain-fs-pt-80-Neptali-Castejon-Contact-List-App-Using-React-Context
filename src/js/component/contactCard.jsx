import React from "react";
import { Link } from "react-router-dom";

export const ContactCard = ({ id, fname, address, email, phone }) => {
  return (
    <div className="contact-card card mb-3 rounded-4 m-1">
      <div className="row g-0">
        <div className="col-sm-4">
          <img
            alt={fname}
            className="contact-image img-fluid rounded-start"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/512px-Breezeicons-actions-22-im-user.svg.png"
          />
        </div>
        <div className="col-sm-7">
          <div className="card-body text-start">
            <h5 className="card-title fs-3 mb-1">{fname}</h5>

            <div className="contact-info">
              <i className="contact-icon fa-solid fa-location-dot"></i>
              <p className="card-text mb-1">{address}</p>
            </div>

            <div className="contact-info">
              <i className="contact-icon fa-regular fa-envelope"></i>
              <p className="card-text mb-1">{email}</p>
            </div>

            <div className="contact-info">
              <i className="contact-icon fa-solid fa-phone-flip"></i>
              <p className="card-text mb-1">{phone}</p>
            </div>
          </div>
        </div>
        
        <div className="col-sm-1 text-end p-3 gap-1 d-flex flex-column text-center">
          <Link to={'contact/'+id} >
            <i className="fa-solid fa-pen"></i>
          </Link>
          <Link to={''} >
            <i className="fa-regular fa-trash-can"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};
