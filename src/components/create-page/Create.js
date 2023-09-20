import { useContext } from "react";
import useFormCreate from "../../custom-hooks/hook-forms/useFormCreate"
import { Notification } from "../error-box/Notification";
import { GalleryContext } from "../../context/GalleryContext";

export const Create = () => {
  const { serverError } = useContext(GalleryContext);
  const { value, formError, onChange, onSubmit } = useFormCreate();
  return (
    <section id="create-container">
      {serverError && <Notification error={serverError} />}
      {formError.title && <Notification error={formError.title} />}
      {formError.painting_tech && <Notification error={formError.painting_tech} />}
      {formError.picture && <Notification error={formError.picture} />}
      {formError.certificate && <Notification error={formError.certificate} />}
      <div className="create-container-info">
        {/* <!-- Do not forget to change the path to the image --> */}
        <img src="/style/img/blog-img12.jpg" alt="image" />

        <form className="container-text" onSubmit={onSubmit}>

          <h2>Create Publication</h2>
          <p>Add your own masterpiece!</p>

          <label htmlFor="title">Title:</label>
          <input type="text"
            id="title"
            placeholder="Spring in the garden"
            name="title"
            onChange={onChange}
            value={value.title}
          />

          <label htmlFor="painting-tech">Painting technique:</label>
          <input type="text"
            id="painting_tech"
            placeholder="Oil paints"
            name="painting_tech"
            onChange={onChange}
            value={value.painting_tech}
          />

          <label htmlFor="picture">Art picture:</label>
          <input type="text"
            id="picture"
            placeholder="http://..."
            name="picture"
            onChange={onChange}
            value={value.picture}
          />

          <label htmlFor="certificate">Certificate of authenticity:</label>
          <input type="text"
            id="certificate"
            placeholder="Yes"
            name="certificate"
            onChange={onChange}
            value={value.certificate}
          />

          <button className="create-btn">Create</button>

        </form>

      </div>
    </section>
  )
}