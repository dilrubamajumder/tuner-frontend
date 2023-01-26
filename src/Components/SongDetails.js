import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Heart from "react-heart"
import Reviews from "./Reviews";
const API = process.env.REACT_APP_API_URL;



function SongDetails() {
  const { id } = useParams();
  const [song, setSong] = useState([]);
  const navigate = useNavigate();
  const [active, setActive] = useState(false)


  const deleteSong = () => {
    axios
      .delete(`${API}/songs/${id}`)
      .then(
        () => {
          navigate(`/songs`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleDelete = () => {
    deleteSong();
  };

  useEffect(() => {
    axios
      .get(`${API}/songs/${id}`)
      .then((response) => {
        console.log(response.data);
        setSong(response.data);
      })
      .catch((c) => {
        console.warn("catch", c);
      });
  }, [id]);

  return (
    <article>
      <div className="details-pg">
        <div>
          <img
            className="detailpg-img"
            src="https://i.pinimg.com/originals/ff/ad/a6/ffada6adce9743cf44abdd99577d6391.gif"
            alt="detailpg-img"
          />
        </div>
        <div className="details-article">
          {song.is_favorite ? <span><div style={{ width: "2rem" }}>
			<Heart isActive={active} onClick={() => setActive(!active)} animationTrigger = "both" inactiveColor = "rgba(255,125,125,.75)" activeColor = "#F34C67" style = {{marginTop:'1rem'}} animationDuration = {0.1}/>
		</div>
</span> : null}
          <h2>Title: {song.name}</h2>
          <h3>Artist: {song.artist}</h3>
          <h4>Album: {song.album}</h4>
          <h4>{song.time}</h4>
          <div className="showNavigation">
            <div>
                {" "}
              <Link to={`/songs`}>
                <button>Back</button>
              </Link>
            </div>
            <div>
            {" "}
              <Link to={`/songs/${song.id}/edit`}>
                <button>Edit</button>
              </Link>
            </div>
            <div>
            {" "}
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      </div>
      <Reviews />
    </article>
  );
}

export default SongDetails;
