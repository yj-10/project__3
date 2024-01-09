import React from "react";
import { FaEye } from "react-icons/fa";
import "./form.css";

const SignupForm = () => {
  return (
    <section className="signup">
      <div className="sign_up_page" id="Sign-up">
        <div className="create">
          <h1> Create Account</h1>
        </div>

        <form className="signup_form">
          <div className="first_form_part">
            <label htmlFor="Email">Email Address</label>
            <input type="Email" />
            <br />
            <label htmlFor="pwd">Confirm Password</label>
            <input type="password" id="pwd" minLength={10} />
            <FaEye className="eye"/>
            <br />
            <label htmlFor="name">First Name</label>
            <input type="text" />
            <br />
            <label htmlFor="add">Address Lie 1</label>
            <input type="text" />
            <br />
            <label htmlFor="company">Company Name</label>
            <input type="text" />
            <br />
            <label htmlFor="state">State/Province</label>
            <input type="text" />
            <br />
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" />
            <br />
          </div>
          <div className="second_form_part">
            <label htmlFor="pwd">Password</label>
            <input
              type="password"
              id="pwd"
              minLength={10}
            />
            <FaEye className="eye"/>
            <br />
            <label for="Country">Country</label>
            <select
              id="country"
              name="country"
              class="form-control"
              placeholder="Select Country"
            >
              <option value="Select Country">Select Country</option>
              <option value="Afghanistan">Afghanistan</option>
              <option value="Åland Islands">Åland Islands</option>
              <option value="Albania">Albania</option>
              <option value="Algeria">Algeria</option>
              <option value="American Samoa">American Samoa</option>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Anguilla">Anguilla</option>
              <option value="Antarctica">Antarctica</option>
              <option value="Antigua and Barbuda">Antigua and Barbuda</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Aruba">Aruba</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bahrain">Bahrain</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Barbados">Barbados</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Belize">Belize</option>
              <option value="Benin">Benin</option>
              <option value="Bermuda">Bermuda</option>
              <option value="Bhutan">Bhutan</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Bosnia and Herzegovina">
                Bosnia and Herzegovina
              </option>
              <option value="Botswana">Botswana</option>
              <option value="Bouvet Island">Bouvet Island</option>
              <option value="Brazil">Brazil</option>
              <option value="British Indian Ocean Territory">
                British Indian Ocean Territory
              </option>
              <option value="Brunei Darussalam">Brunei Darussalam</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Burkina Faso">Burkina Faso</option>
              <option value="Burundi">Burundi</option>
              <option value="Cambodia">Cambodia</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Cape Verde">Cape Verde</option>
              <option value="Cayman Islands">Cayman Islands</option>
              <option value="Central African Republic">
                Central African Republic
              </option>
              <option value="Chad">Chad</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Iceland">Iceland</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Iran, Islamic Republic of">
                Iran, Islamic Republic of
              </option>
              <option value="Iraq">Iraq</option>
              <option value="Ireland">Ireland</option>
              <option value="Isle of Man">Isle of Man</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Japan">Japan</option>
              <option value="Jersey">Jersey</option>
              <option value="Jordan">Jordan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kenya">Kenya</option>
              <option value="Kiribati">Kiribati</option>
              <option value="Korea, Democratic People's Republic of">
                Korea, Democratic People's Republic of
              </option>
              <option value="Korea, Republic of">Korea, Republic of</option>
              <option value="Kuwait">Kuwait</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Lao People's Democratic Republic">
                Lao People's Democratic Republic
              </option>
              <option value="Latvia">Latvia</option>
              <option value="Lebanon">Lebanon</option>
            </select>
            <br />
            <label htmlFor="last_name">Last Name</label>
            <input type="text" />
            <br />
            <label htmlFor="add">Address Line 2</label>
            <input type="text" />
            <br />
            <label htmlFor="city">Suburb/City</label>
            <input type="text" />
            <br />
            <label htmlFor="zip">Zip/Postcode</label>
            <input type="text" />
            <br />
          </div>
        </form>
        <div className="create_butt">
        <button>Create Account</button>
      </div>
      </div>
      
    </section>
  );
};

export default SignupForm;
