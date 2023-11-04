import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
function Signup() {
  const nav = useNavigate();
  const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setname] = useState("")
    const onChangeemail = (e) => {
        setEmail(e.target.value)
    }
    useEffect(() => {
      if(localStorage.getItem("token")!=null){
        nav("/");
      }
    });
    const onChangepassword = (e) => {
        setPassword(e.target.value)
    }
    const onChangename = (e) => {
        setname(e.target.value)
    }
    const handleSignup = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/authorization/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: name, email: email, password: password })
        });
        const jsonData = await response.json();
        if (jsonData.success === true) {
            localStorage.setItem("token", jsonData.authToken)
            nav("/")
            window.location.reload()
        }
        else {
            if (jsonData.errors) {
                jsonData.errors.forEach(error => {
                    alert(error.msg)
                });
            }
            else{
                console.log(jsonData.message)
            }
        }
    }
  return (
    <>
      <div className="signup-page">
        <div className="signup-container">
          <div className="logo-signup">
            <img src="VENTURE VAULT-logos.jpeg" alt="Logo" />
          </div>
          <div className="signup-form">
            <h2>Sign Up</h2>
            <h4>Start your journey today!</h4>
            <form onSubmit={handleSignup}>
              <label htmlFor="signup-input-name" className="label">
                Name
              </label>
              <input
                type="text"
                className="signup-input"
                id="signup-input-name"
                required
                onChange={onChangename}
              />
              <label htmlFor="signup-input" className="label">
                Email Address
              </label>
              <input
                type="email"
                className="signup-input"
                id="signup-input"
                required
                onChange={onChangeemail}
              />

              <label htmlFor="signup-input-password" className="label">
                Password
              </label>
              <input
                type="password"
                className="signup-input"
                id="signup-input-password"
                onChange={onChangepassword}
                required
              />

              {/* <label htmlFor="signup-confirm-password" className="label">
                Confirm Password
              </label>
              <input
                type="password"
                className="signup-input"
                id="signup-confirm-password"
                required
              /> */}

              <button className="btn-login" type="submit">
                Sign Up
              </button>
              <p className="auth-para">
                Already have an account?
                <span>
                  <Link to="/login"> Login </Link>
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
