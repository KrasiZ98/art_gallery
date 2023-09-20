import { Link, useParams } from "react-router-dom"
import useGetById from "../../custom-hooks/hook-request/useGetById";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const Details = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const [gallery, setGallery] = useGetById(id, []);
  const { title, painting_tech, picture, certificate, author, _ownerId, _id } = gallery;
  const isOwner = _ownerId === user._id;
  console.log(isOwner)

  return (
    <section id="details-page">
      <h1>Details</h1>
      <article className="details-card">

        <article className="details-card-text">
          <h2>Title: {title}</h2>
          <h3>Author: {author}</h3>
          <h3>Painting technique: {painting_tech}</h3>
          <h3>Certificate of authenticity: {certificate}</h3>

          {/* <!-- If there is no registered user, do not display buttons--> */}
          <div className="buttons">
            {/* <!-- Only for registered user and author of the publication --> */}
            {isOwner && <>

              <Link to={`/edit/${_id}`} className="btn-edit">Edit</Link>
              <Link to={`/delete/${_id}`} className="btn-delete">Delete</Link>
            </>}

            {user.accessToken && isOwner === false && <>
              :  <>
                <Link to="/" className="btn-share">Share publication</Link>
                <p className="shared-pub">You already shared this publication</p>
              </>  </>}
            {/* <!-- logged in user who has not yet shared the publication--> */}
            {/* <!-- logged in user who has already shared the publication--> */}
          </div>

        </article>

        <article className="details-card-image">
          <img src={picture} alt="art-image2" />
        </article>

      </article>
    </section>
  )
}