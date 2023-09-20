import { Link } from "react-router-dom"
import useFormLogin from "../../custom-hooks/hook-forms/useFormLogin"
import { Notification } from "../error-box/Notification";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Login = () => {
  const { serverError } = useContext(AuthContext);
  const { value, formError, onChange, onSubmit } = useFormLogin();
  console.log(formError)
  return (
    <section id="login-container">
      {serverError && <Notification error={serverError} />}
      {formError.email && <Notification error={formError.email} />}
      {formError.password && <Notification error={formError.password} />}
      <div className="container">
        {/* <!-- Do not forget to change the path to the image --> */}
        <img src="./style/img/slider.jpg" alt="image" />

        <form className="container-text" onSubmit={onSubmit}>
          <h2>Login</h2>
          <p>Welcome, see the new masterpieces!</p>

          <label htmlFor="username">Email:</label>
          {formError.email && <p>{formError.email}</p>}
          <input type="text"
            id="email"
            placeholder="ivan@abv.bg"
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

          <button className="login-btn">Login</button>
          <div className="card-no-account">
            <p>Don't have an account? <Link to="/register">Sign up</Link>.</p>
          </div>

        </form>
      </div>

    </section>
  )
}