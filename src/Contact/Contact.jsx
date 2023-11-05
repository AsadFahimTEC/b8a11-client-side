import "./Contact.css";
const Contact = () => {
  return (
    <div className="mt-2">
      <div className="row">
        <h1>Our Team</h1>
      </div>
      <div className="row">
        {/* <!-- Column 1--> */}
        <div className="column">
          <div className="card">
            <div className="img-container">
              <img src="https://i.ibb.co/25NP0HR/Doctor-03-350x350.jpg" />
            </div>
            <h3>George Herrada</h3>
            <p>Founder</p>
            <div className="icons">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
              <a href="#">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Column 2--> */}
        <div className="column">
          <div className="card">
            <div className="img-container">
              <img src="https://i.ibb.co/CWfvxVT/depart-3-370x275.jpg" />
            </div>
            <h3>Smith Farfán</h3>
            <p>Developer</p>
            <div className="icons">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
              <a href="#">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Column 3--> */}
        <div className="column">
          <div className="card">
            <div className="img-container">
              <img src="https://i.ibb.co/Bfr95cY/Doctor-01-350x350.jpg" />
            </div>
            <h3>Enghel Felix</h3>
            <p>Designer</p>
            <div className="icons">
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#">
                <i className="fab fa-github"></i>
              </a>
              <a href="#">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
