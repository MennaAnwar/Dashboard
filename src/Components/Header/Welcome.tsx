import HEADER from "../../assets/images/top-header.png";
import "./Welcome.css";

export default function Welcome() {
  return (
    <div className="iq-navbar-header">
      <div className="container-fluid iq-container">
        <div className="row">
          <div className="col-md-12">
            <div className="flex-wrap d-flex justify-content-between align-items-center">
              <div>
                <h1>Welcome to the future of automation !</h1>
                <p>
                  "Your command is the catalyst for technological brilliance.
                  Let's shape the future !"
                </p>
              </div>
              <div>img to be added</div>
            </div>
          </div>
        </div>
      </div>
      <div className="iq-header-img">
        <img
          src={HEADER}
          alt="header"
          className="theme-color-default-img img-fluid w-100 h-100 animated-scaleX"
        />
      </div>
    </div>
  );
}
