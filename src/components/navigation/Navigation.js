import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

export const Navigation = () => {
    const {user} = useContext(AuthContext);

    return (
        <nav>

            {/* <!-- Do not forget to change the path to the image --> */}
            <img src="/style/img/art-logo.png" alt="logo" />
            <Link to="/">ArtGallery</Link>

            <ul className="menu">
                <li><Link to="/catalog">Gallery</Link></li>
                {/* <!-- Logged users --> */}
                {user.email ? <>
                    <li><Link to="/create">Create Publication</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                <span>Welcome {user.email}</span>

                </> : <>
                {/* <!-- Guest users --> */}
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                </>}
            </ul>

        </nav>
    )
}