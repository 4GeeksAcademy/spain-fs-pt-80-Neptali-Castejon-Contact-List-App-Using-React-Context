import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const ContactCard = (props) => {
  
  const { store, actions } = useContext(Context);
  const { id, name, phone, email, address } = props.contact;

  return (
    <div className="contact-card card mb-3 rounded-4 m-1" aria-labelledby={`contact-${id}`}>
      <div className="row g-0">
        <div className="col-sm-4 d-flex align-items-center justify-content-center">
          <img
            alt={`Profile image of ${name}`}
            className="contact-image img-fluid rounded-start"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/512px-Breezeicons-actions-22-im-user.svg.png"
            role="img"
          />
        </div>
        <div className="col-sm-7">
          <div className="card-body text-start">
            <h5
              className="card-title fs-3 contact-info--custom"
              id={`contact-${id}`}
              title={name}
              tabIndex="0"
            >
              {name}
            </h5>

            <div className="contact-info mb-1">
              <i
                className="contact-icon fa-solid fa-phone-flip"
                aria-hidden="true"
              ></i>
              <p className="card-text" aria-label={`Phone number of ${name}`}>{phone}</p>
            </div>

            <div className="contact-info mb-1">
              <i
                className="contact-icon fa-regular fa-envelope"
                aria-hidden="true"
              ></i>
              <p className="card-text" aria-label={`Email address of ${name}`}>{email}</p>
            </div>

            <div className="contact-info mb-1">
              <i
                className="contact-icon fa-solid fa-location-dot"
                aria-hidden="true"
              ></i>
              <p
                className="card-text contact-info--custom"
                title={address}
                aria-label={`Address of ${name}`}
              >
                {address}
              </p>
            </div>

          </div>
        </div>

        <div className="col-sm-1 text-end p-3 gap-1 d-flex flex-column text-center">
          <Link
            to={'contact/' + id}
            onClick={() => actions.selectContact(props.contact)}
            aria-label={`Edit contact of ${name}`}
            role="button"
            tabIndex="0"
          >
            <i className="fa-solid fa-pen"></i>
          </Link>
          <Link
            onClick={() => actions.delContact(id)}
            to={''}
            aria-label={`Delete contact of ${name}`}
            role="button"
            tabIndex="0"
          >
            <i className="fa-regular fa-trash-can"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};
