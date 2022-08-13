import React, { useEffect, useState } from "react";
import axios from "axios";
import profile_image from "../img/profile_img_insta.jpg";

const Contact = ({ api }) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [loading_2, setLoading_2] = useState(false);
  const [error, setError] = useState(null);
  const [error_2, setError_2] = useState(null);
  const [contacts, setContacts] = useState([]);
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
    setLoading_2(true);
    setTimeout(() => {
      axios
        .get(`${api}/contact`)
        .then((res) => setContacts(res.data), setLoading_2(false))
        .catch((err) => setError_2(err.message), setLoading_2(false));
    }, 1500);
  }, [api]);
  return (
    <div className="contact_page">
      <div className="nav_section"></div>
      <div className="contact_section">
        <h3>Send Feedback</h3>

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
      <div className="messenger_section">
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <div
              className={`contact_messengers ${contact.type}`}
              key={contact._id}
            >
              <img
                src={`${
                  contact.type !== "instagram"
                    ? contact.profile_img
                    : profile_image
                }`}
                alt="account logo"
                className={`account_image ${contact.type}_img`}
                crossOrigin="anonymous"
                draggable="false"
              />
              <a
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "5%" }}
              >
                <button className="btn_show btn btn-outline-dark ">Show</button>
              </a>
              <a
                href={contact.sendMessage}
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: "130px", marginLeft: "5px" }}
              >
                <button className="btn_sendMessage btn btn-outline-dark">
                  Send Message
                </button>
              </a>
              <h4>
                <div
                  className={`status ${contact.status ? "active" : ""}`}
                ></div>{" "}
                Status:{" "}
                <span id="status" style={{ marginLeft: "5px" }}>
                  {contact.status ? "active" : "paused"}
                </span>
              </h4>
              <div className="messanger">
                <img
                  src={contact.img}
                  alt="logo"
                  className="logo"
                  style={{ width: "20px", height: "20px", marginLeft: "5px" }}
                />
                <h3 className="contact_type">{contact.type}</h3>
              </div>
            </div>
          ))
        ) : loading_2 ? (
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <div className="error">{error_2}</div>
        )}
      </div>
    </div>
  );
};

export default Contact;
