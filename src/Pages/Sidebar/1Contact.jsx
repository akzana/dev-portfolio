import React from "react";
import '../../index.css';

function Contact({item}) {
    return (
        <li className="contact-item">
        <div className="contact-logo">
          {item.icon}
        </div>
        <div className="contact-info">
          <p className="contact-title">{item.title}</p>
          <a href={item.link} className="contact-link">
            {item.value}
          </a>
        </div>
      </li>
    );
}

export default Contact;