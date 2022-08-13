import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  setInterval(() => {
    const d = new Date();
    const date = `${d.getHours() <= 9 ? "0" + d.getHours() : d.getHours()}:${
      d.getMinutes() <= 9 ? "0" + d.getMinutes() : d.getMinutes()
    }:${
      d.getSeconds() <= 9 ? "0" + d.getSeconds() : d.getSeconds()
    } - ${d.getFullYear()}.${
      d.getMonth() <= 9 ? "0" + d.getMonth() : d.getMonth()
    }.${d.getDate() <= 9 ? "0" + d.getDate() : d.getDate()}`;
    document.querySelector(".date").innerHTML = date;
  });
  return (
    <footer>
      <h4>My Contacts</h4>
      <div className="messangers">
        <div className="messanger">
          <a
            className="link link_f"
            href="https://www.facebook.com/evilEnemy.a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFacebook />
          </a>
        </div>
        <div className="messanger">
          <a
            className="link link_f"
            href="https://www.instagram.com/_evil.enemy_"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiInstagram />
          </a>
        </div>
        <div className="messanger">
          <a
            className="link link_f"
            href="https://t.me/to_evilEnemy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTelegram />
          </a>
        </div>
      </div>
      <div className="date">Time</div>
      <h4>
        Powered by{" "}
        <Link className="link" to={"/"}>
          Evil Enemy
        </Link>
      </h4>
    </footer>
  );
};

export default Footer;
