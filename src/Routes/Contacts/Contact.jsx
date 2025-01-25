import React from "react";
import { Link } from "react-router-dom";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { LuMessagesSquare } from "react-icons/lu";
import { RiTimerLine } from "react-icons/ri";
import { FaRegAddressCard } from "react-icons/fa";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-component">
      <div className="map-con">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d317893.9737282887!2d-0.11951900000000001!3d51.503186!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604b900d26973%3A0x4291f3172409ea92!2slastminute.com%20London%20Eye!5e0!3m2!1sen!2sus!4v1737761652916!5m2!1sen!2sus"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="message-info">
          <h3>Leave a Message</h3>
        <form action="">
          {/* <div className="input"> */}
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Contact number" required />
            <textarea name="message" placeholder="Message" required id=""></textarea>
          {/* </div> */}
          <button>SUBMIT</button>
        </form>
      </div>
      <div className="address-info">
        <div className="phone">
        <MdOutlinePhoneIphone className="address-icon" />
        <div className="number">
          <a href="http://tel:2347011560069" target="_blank"><h4>Phone: 701 1560 069</h4></a>
          <a href="http://mailto:haryomidey15@gmail.com" target="_blank">haryomidey15@gmail.com</a>
        </div>
        </div>

        <div className="message">
        <LuMessagesSquare className="address-icon" />
        <div className="support">
          <h4>Support 24x7</h4>
          <p>We are always online</p>
        </div>
        </div>

        <div className="timing">
        <RiTimerLine className="address-icon" />
        <div className="open">
          <h4>Shop open timing</h4>
          <p>9am-11am</p>
        </div>
        </div>

        <div className="address">
        <FaRegAddressCard className="address-icon" />
        <div className="locate">
          <h4>Address 8770 SE17EB</h4>
          <p>Ibadan, Oyo State</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
