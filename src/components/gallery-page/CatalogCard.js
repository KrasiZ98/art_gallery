import { Link } from "react-router-dom"

export const CatalogCard = ({ gallery }) => {
    const { title, painting_tech, picture, certificate, } = gallery;
    return (
        <article className="card-info">
            <article className="card-info-image">
                <img src={picture} alt="art-image" />
            </article>
            <article className="card-info-text">
                <h2>Title: {title}</h2>
                <h3>Certificate of authenticity: {certificate}</h3>
                <Link to={`/details/${gallery._id}`} className="details-btn">Details</Link>
            </article>
        </article>
    )
}

