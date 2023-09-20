import { useContext } from "react"
import { GalleryContext } from "../../context/GalleryContext"
import { CatalogCard } from "./CatalogCard";
import { Link } from "react-router-dom";

export const Catalog = () => {
  const { galleries } = useContext(GalleryContext);

  return (
    <section id="gallery">
      <h1>Gallery</h1>
      <article className="gallery-container">

        {/* <!--If there are art publications in the database, show each of them--> */}
        {galleries.length > 0 ? galleries.map(x => <CatalogCard key={x._id} gallery={x} />) :
          <article className="no-available-publications">
            <h1>No publications created yet.</h1>
            <Link to="/create" className="create-pub">Create publication</Link>
          </article>}



        {/* <!--If there are still no art publications in the database display:--> */}


      </article>
    </section>
  )
}