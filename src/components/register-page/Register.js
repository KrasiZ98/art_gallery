import { Link } from "react-router-dom"
import useFormRegister from "../../custom-hooks/hook-forms/useFormRegister"
import { Notification } from "../error-box/Notification";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Register = () => {
  const { serverError } = useContext(AuthContext);
  const { value, formError, onChange, onSubmit } = useFormRegister();
  return (
    <section id="register-container">
      {serverError && <Notification error={serverError} />}
      {formError.email && <Notification error={formError.email} />}
      {formError.password && <Notification error={formError.password} />}
      {formError.rePassword && <Notification error={formError.rePassword} />}
      {formError.address && <Notification error={formError.address} />}
      <div className="register-container-info">
        {/* <!-- Do not forget to change the path to the image --> */}
        <img src="./style/img/slider.jpg" alt="image" />

        <form className="container-text" onSubmit={onSubmit}>
          <h2>Register</h2>
          <p>Register to get ideas and view the latest masterpieces.</p>

          <label htmlFor="email">Email:</label>
          <input type="text"
            id="email"
            placeholder="ivan_00"
            name="email"
            onChange={onChange}
            value={value.email}
          />

          <label htmlFor="password">Password:</label>
          <input type="password"
            id="password"
            placeholder="*****"
            name="password"
            onChange={onChange}
            value={value.password}
          />

          <label htmlFor="re-password">Repeat password:</label>
          <input type="password"
            id="rePassword"
            placeholder="*****"
            name="rePassword"
            onChange={onChange}
            value={value.rePassword}
          />

          <label htmlFor="address">Address:</label>
          <input type="text"
            id="address"
            placeholder="2572 Orphan Road"
            name="address"
            onChange={onChange}
            value={value.address}
          />

          <button className="register-btn">Register</button>
          <div className="card-no-account">
            <p>Already have an account?<Link to="/login">Sign it</Link></p>
          </div>

        </form>
      </div>

    </section>
  )
}