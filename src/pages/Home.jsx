import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";
import axios from "axios";

const Home = ({ api }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const el = React.useRef(null);
  const typed = React.useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const feedback = { name, comment };
    setLoading(true);
    setTimeout(() => {
      axios
        .post(`${api}/feedback`, feedback)
        .then(() => setName(""), setComment(""), setLoading(false))
        .catch(
          (err) => setError(err.message),
          setComment(comment),
          setLoading(false)
        );
    }, 1500);
  };

  useEffect(() => {
    const options = {
      strings: ["Amirbek Olimov", "Developer", "Freelancer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <div className="home_page">
      <div className="nav_section"></div>
      <div className="headermenu">
        <h3>Hello, </h3>
        <h4>Welcome to my portfolio</h4>
        <h4>
          I am <span style={{ whiteSpace: "pre", color: "gold" }} ref={el} />
        </h4>
        <Link to={"/about"}>
          <button className="btn btn-outline-info">About me</button>
        </Link>
      </div>
      <div className="about_section">
        <div className="wrapper">
          <div className="left">
            <div className="line"></div>
            <div className="img"></div>
          </div>
          <div className="right">
            <h3>About Me</h3>
            <div className="line"></div>
            <p>
              I am now 15 years old and I started my studies a year ago. I'm
              currently a Junior developer and I'm trying to perfect what needs
              to be done. I also know the languages needed for the additional
              backend. For example: Node JS, php, python. <br /> <br /> I am
              currently learning the MERN stack and working on various projects.
            </p>
            <Link to={"/about"}>
              <button className="btn btn-outline-primary px-3">More</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="contact_section">
        <h3>Contact</h3>
        <div className="line"></div>

        <form onSubmit={handleSubmit} autoComplete={"off"}>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              className="form-control w-75"
              id="name"
              placeholder="Robert Johnson"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="comment">Comment</label>
            <textarea
              style={{ resize: "none" }}
              className="form-control w-75 label_2"
              id="comment"
              placeholder="I liked your work..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            />
          </div>
          {!loading && (
            <button type="submit" className="btn btn-outline-danger px-2">
              Submit
            </button>
          )}
          {loading && (
            <button
              className="btn btn-outline-danger px-2"
              type="submit"
              disabled
            >
              <span
                className="spinner-border spinner-border-sm mr-2"
                role="status"
                aria-hidden="true"
              ></span>
              Submitting...
            </button>
          )}
          <br />
          {error && (
            <div className="error">
              {error === "Network Error"
                ? "Please check your network connection."
                : error + "."}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Home;
