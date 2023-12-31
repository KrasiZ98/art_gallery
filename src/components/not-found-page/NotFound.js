import { Link } from "react-router-dom"

export const NotFound = () => {
    return (
        <section id="not-found-page">
            <div className="not-found-page-container">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>The Page you are looking for doesn't exist or another error occurred. Go to <Link to="/">ArtGallery</Link>.</p>
            </div>
        </section>
    )
}