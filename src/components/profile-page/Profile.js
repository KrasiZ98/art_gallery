import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext";
import { GalleryContext } from "../../context/GalleryContext";

export const Profile = () => {

  const { user } = useContext(AuthContext);
  const { galleries } = useContext(GalleryContext);

  const [profile, setProfile] = useState({});
  const [serverError, setServerError] = useState(null);
  const [myGallery, setMyGallery] = useState([]);
  const currentGallery = galleries.filter(x => x._ownerId === user._id);


  useEffect(() => {
    setMyGallery(currentGallery.map(x => x.title))
  }, [])
  // setMyGallery(oldGallery => [...oldGallery, currentGallery]);
  // useEffect(() => {
  // }, []);

  console.log(myGallery.join(', '));

  

  useEffect(() => {
    fetch('http://localhost:3030/users/me', {
      method: 'GET',
      headers: {
        'X-Authorization': user.accessToken
      }
    })
      .then((response) => response.json())
      .then((result) => setProfile(result))
      .catch((error) => setServerError(error.message));
  }, []);

  // console.log(profile, serverError);
  return (
    <section id="profile-page">
      <h1>Full Profile Information</h1>
      <article className="profile-card">

        <article className="profile-card-info">
          <h2>Username: {profile.email}</h2>
          <h3>Address: {profile.address}</h3>

          {myGallery.length > 0 ?
            <h4>Titles of which the user is the author: {myGallery.join(', ')}</h4> :
            <h4>Titles of which the user is the author: Not yet.</h4>}

          {/* <!--If the user has created their own publications, separate their titles with a comma and a space (, )--> */}

          {/* <!--If not display:--> */}


        </article>

        <article className="profile-card-icon">
          {/* <!-- Do not forget to change the path to the image --> */}
          <img src="./style/img/vip-user.png" alt="art-image1" />
        </article>

      </article>
    </section>
  )
}