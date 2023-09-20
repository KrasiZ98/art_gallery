import { Link } from "react-router-dom"

export const CardHome = ({ gallery }) => {
    return (
        <article className="content-publication">
            <h1>Title: {gallery.title}</h1>

            {/* <!--If no one has shared the post yet, the number should be zero --> */}
            <p>Number of people shared the publication: 0</p>
            <Link to={`/details/${gallery._id}`} className="image-details">View publication</Link>
        </article>
    )
}