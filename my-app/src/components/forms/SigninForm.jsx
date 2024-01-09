import React from "react";
import "./form.css";
import { FaEye } from "react-icons/fa";

const SigninForm = () => {
  return (
    <section className="Signin">
      <div className="Sign_in_page" id="Sign-in">
        <div className="create">
          <h1> Create Account</h1>
        </div>

        <form className="signin_form">
          <div className="first_form_part">
            <label htmlFor="Email">Email Address</label>
            <input type="Email" />
            <br />
            <label htmlFor="pwd">Password</label>
            <input type="password" id="pwd" minLength={10} />
            <FaEye className="eye" />
            <div className="create_butt2">
              <button>Sign In</button>
              <a href="">Forgot Your Password ?</a>
            </div>
          </div>
          <div className="second_form2_part">
            <h5>New Customer ?</h5>
            <p>Create account with us and you will be able to</p>
            <li>Check Out Fater</li>
            <li>Save Multiple Shopping address</li>
            <li>Access Your Order History</li>
            <li>Track New Orders</li>
            <div className="create_butt2">
              <button>Create Account</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SigninForm;
