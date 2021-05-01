import React, { useState } from "react";
import Image from "../images/image-1.png";
import { useHistory } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import "bootstrap/dist/css/bootstrap.min.css";

const LoginPage = ({ handleGoogleLoing }) => {
  const [emailInput, setemailInput] = useState("");
  const [passInput, setpassInput] = useState("");
  const history = useHistory();
  const handleInputMail = (e) => {
    setemailInput(e.target.value);
  };
  const handleInputPass = (e) => {
    setpassInput(e.target.value);
  };
  const handleLogin = () => {
    if (emailInput !== "" && passInput !== "") {
      history.push("/profile");
    } else {
      alert("email/password is empty");
    }
  };
  const responseGoogle = (response) => {
    console.log(response);
    history.push("/profile");
    handleGoogleLoing(response.profileObj.name, response.profileObj.imageUrl);
  };
  const googleFailure = () => {
    alert("error");
    history.push("/");
  };
  return (
    <section className="From my-4 mx-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 py-3">
            <img src={Image} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-5 px-5 pt-5 my-3 formContent">
            <h1 className="font-weight-bold py-3">Login</h1>
            <h4>Sign into your Account</h4>
            <form>
              <div className="form-row">
                <div className="col-lg-7">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control my-3 p-4"
                    // value={Input.email}
                    onChange={handleInputMail}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-7">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control my-3 p-4"
                    // value={Input.password}
                    onChange={handleInputPass}
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-7">
                  <button type="button" className="btn1" onClick={handleLogin}>
                    Login
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-3 google">
            <GoogleLogin
              clientId="606406346575-5q8sagsg1d9o2nsdh4ssh1ep87e4il6c.apps.googleusercontent.com"
              onSuccess={responseGoogle}
              onFailure={googleFailure}
              className="googleButton"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
