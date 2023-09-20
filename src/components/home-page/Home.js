import { useContext } from "react"
import { GalleryContext } from "../../context/GalleryContext"
import { CardHome } from "./CardHome";
import { Link } from "react-router-dom";

export const Home = () => {

  const { galleries } = useContext(GalleryContext);

  return (
    <main>

      <section id="home-page">
        <article className="auto-content">
          <h1>NEWS OF OUR</h1>
          <h2>ART GALLERY</h2>
        </article>
      </section>

      <section id="home-page-content">
        <h1>Statistics of shared publication</h1>
        <article className="home-page-content-publications">

          {/* <!--If there are publications in the database, show the following view for each created publication--> */}
          {galleries.length > 0 ? galleries.map(x => <CardHome key={x._id} gallery={x} />) :
            <article className="no-publication">
              <h1>There are no publications yet.</h1>
              <Link to="/catalog" className="view-gallery">View Gallery</Link>
            </article>}


          {/* <!--If there are no publications yet, show:--> */}

        </article>

      </section>

    </main>
  )
}