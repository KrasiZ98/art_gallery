import { useContext } from "react";
import useFormEdit from "../../custom-hooks/hook-forms/useFormEdit"
import { Notification } from "../error-box/Notification";
import { GalleryContext } from "../../context/GalleryContext";

export const Edit = () => {
  const { serverError } = useContext(GalleryContext);
  const { value, formError, onChange, onSubmit } = useFormEdit();
  return (
    <section id="edit-container">
      {serverError && <Notification error={serverError} />}
      {formError.title && <Notification error={formError.title} />}
      {formError.painting_tech && <Notification error={formError.painting_tech} />}
      {formError.picture && <Notification error={formError.picture} />}
      {formError.certificate && <Notification error={formError.certificate} />}
      <div className="edit-container-info">
        {/* <!-- Do not forget to change the path to the image --> */}
        <img src="/style/img/blog-img12.jpg" alt="image" />

        <form className="container-text" onSubmit={onSubmit}>
          <h2>Edit</h2>
          <p>Edit your masterpiece!</p>

          <label htmlFor="title">Title:</label>
          <input type="text"
            id="title"
            name="title"
            onChange={onChange}
            value={value.title}
          />

          <label htmlFor="painting-tech">Painting technique:</label>
          <input type="text"
            id="painting_tech"
            name="painting_tech"
            onChange={onChange}
            value={value.painting_tech}
          />

          <label htmlFor="picture">Art picture:</label>
          <input type="text"
            id="picture"
            name="picture"
            onChange={onChange}
            value={value.picture}
          />

          <label htmlFor="certificate">Certificate of authenticity:</label>
          <input type="text"
            id="certificate"
            name="certificate"
            onChange={onChange}
            value={value.certificate}
          />

          <button className="edit-btn">Edit</button>
        </form>

      </div>
    </section>
  )
}