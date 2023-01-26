import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function SongNewForm() {
    let navigate = useNavigate();

    const [song, setSong] = useState({
        name: '',
        artist: '',
        album: '',
        time:'',
        is_favorite: false
      });


    
      const addSong = (newSong) => {
        axios
          .post(`${API}/songs`, newSong)
          .then(
            () => {
              navigate(`/songs`);
            },
            (error) => console.error(error)
          )
          .catch((c) => console.warn("catch", c));
      };
    
      const handleCheckboxChange = () => {
        setSong({ ...song, is_favorite: !song.is_favorite });
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        addSong(song);
      };
    
      const handleTextChange = (event) => {
        setSong({ ...song, [event.target.id]: event.target.value });
      };
    
      return (
        <div className="Edit">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Title: </label>
          <input
            id="name"
            value={song.name}
            type="text"
            placeholder="Song Title"
            required
            onChange={handleTextChange}
          />
          <label htmlFor="artist">Artist: </label>
          <input
            id="artist"
            value={song.artist}
            type="text"
            placeholder="Who is the artist?"
            required
            onChange={handleTextChange}
          />
          <label htmlFor="album">Album: </label>
          <input
            id="album"
            type="text"
            name="album"
            value={song.album}
            placeholder="Album name"
            onChange={handleTextChange}
          />
           <label htmlFor="time">Time: </label>
          <input
            id="time"
            type="text"
            name="time"
            value={song.time}
            placeholder="song duration"
            onChange={handleTextChange}
          />
          <label htmlFor="is_favorite">Favorite:</label>
          <input
            id="is_favorite"
            type="checkbox"
            onChange={handleCheckboxChange}
            checked={song.is_favorite}
          />

            <br />
            <input type="submit" />
          </form>
        </div>
      );
    }
export default SongNewForm