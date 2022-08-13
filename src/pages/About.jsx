import React, { useEffect, useState } from "react";
import axios from "axios";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const About = ({ api }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get(`${api}/feedback`)
        .then((res) => setFeedbacks(res.data), setLoading(false))
        .catch(
          (err) => setError(err.message),
          setLoading(false),
          setFeedbacks([])
        );
      error
        ? document.querySelector(".feedbacks").classList.add("error")
        : document.querySelector(".feedbacks").classList.remove("error");
    }, 1600);
  }, [api, error]);
  return (
    <div className="about_page">
      <div className="nav_section"></div>
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
            <button
              onClick={() => window.location.reload()}
              className="btn btn-outline-primary px-3"
            >
              More
            </button>
          </div>
        </div>
      </div>
      <div className="know_level">
        <div className="wrapper">
          <h3>My knowledge levels</h3>
          <br /> <br />
          <h3 className="level">Front End</h3>
          <div className="languages">
            <div
              className="pie animate no-round"
              style={{ "--p": 85, "--c": "orange", "--b": "10px" }}
            >
              HTML <br />
              85%
            </div>
            <div
              className="pie animate no-round"
              style={{ "--p": 80, "--c": "orange", "--b": "10px" }}
            >
              CSS <br />
              80%
            </div>
            <div
              className="pie animate no-round"
              style={{ "--p": 70, "--c": "orange", "--b": "10px" }}
            >
              JS <br />
              70%
            </div>
            <div
              className="pie animate no-round"
              style={{ "--p": 75, "--c": "orange", "--b": "10px" }}
            >
              React JS <br />
              75%
            </div>
          </div>
          <h3 className="level">Back End (Full Stack)</h3>
          <div className="languages">
            <div
              className="pie animate no-round"
              style={{ "--p": 75, "--c": "orange", "--b": "10px" }}
            >
              Node JS <br />
              75%
            </div>
            <div
              className="pie animate no-round"
              style={{ "--p": 70, "--c": "orange", "--b": "10px" }}
            >
              MERN
              <br />
              70%
            </div>
            <div
              className="pie animate no-round"
              style={{ "--p": 85, "--c": "orange", "--b": "10px" }}
            >
              PHP <br />
              85%
            </div>
            <div
              className="pie animate no-round"
              style={{ "--p": 20, "--c": "orange", "--b": "10px" }}
            >
              Python <br />
              20%
            </div>
          </div>
          <br />
        </div>
      </div>
      <div className="feedbacks">
        {loading && (
          <div className="wrapper">
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
          </div>
        )}
        {feedbacks.length > 0 ? (
          <div className="wrapper">
            {feedbacks.map((feedback) => (
              <div
                className="card text-white bg-dark my-3 d-inline-block w-100"
                key={feedback._id}
              >
                <div className="card-header">{feedback.name}</div>
                <div className="card-body">
                  <p className="card-text">{feedback.comment}</p>
                  <p className="text-muted">
                    {formatDistanceToNow(new Date(feedback.createdAt), {
                      addSuffix: true,
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="empty_box">Feedbacks is empty</p>
        )}
        {error && (
          <div className="error">
            {error === "Network Error"
              ? "Please check your network connection..."
              : error + "."}
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
