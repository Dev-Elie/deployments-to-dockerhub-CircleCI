import "./App.css";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    // Validate the form
    if (!name || !email || !message) {
      setError("Please fill out all the fields");
      setLoading(false);
      return;
    } else if (name.length < 3 || name.length > 30) {
      setError("Name must be between 3 and 30 characters");
      setLoading(false);
      return;
    } else if (!email.includes("@")) {
      setError("Please enter a valid email");
      setLoading(false);
      return;
    } else {
      setSuccess(`Thank you ${name} for your message!`);
      setName("");
      setEmail("");
      setMessage("");
    }

    setLoading(false);
  };

  const HandleNameChange = (e) => {
    setName(e.target.value);
  };

  const HandleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const HandleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="text-center mt-5">
              <h1>Contact Us</h1>
              <p>
                Hello! If you have any questions or feedback for us, please fill
                out the form below and we'll get back to you as soon as
                possible.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              method="post"
              className="contact-form"
            >
              <div className="row">
                <div className="col form-group">
                  <input
                    type="name"
                    data-test="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                    value={name}
                    onChange={HandleNameChange}
                  />
                </div>
                <div className="col form-group">
                  <input
                    type="email"
                    data-test="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    required
                    value={email}
                    onChange={HandleEmailChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  data-test="message"
                  rows="5"
                  placeholder="Message"
                  required
                  value={message}
                  onChange={HandleMessageChange}
                ></textarea>
              </div>
              <div className="my-3">
                {error && (
                  <div
                    className="alert alert-danger alert-dismissible fade show"
                    role="alert"
                    data-test="error-message"
                  >
                    {error}
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                )}
                {loading && <div className="spinner-border"></div>}
                {success && (
                  <div
                    className="alert alert-success alert-dismissible fade show"
                    role="alert"
                    data-test="success-message"
                  >
                    {success}
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                )}
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary"
                  data-test="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
