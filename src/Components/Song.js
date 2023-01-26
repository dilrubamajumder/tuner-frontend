import { Link } from "react-router-dom";
import Heart from "react-heart";
import { useState,useEffect } from "react"

function Song({song}) {
    const [active, setActive] = useState(false)

  

    const { name, artist, is_favorite } = song
    return (
        <tr>
          <td>
            {is_favorite ? (

            <span><div style={{ width: "2rem" }}>
			<Heart isActive={active} onClick={() => setActive(!active)} animationTrigger = "both" inactiveColor = "rgba(255,125,125,.75)" activeColor = "#e019ae" style = {{marginTop:'1rem'}} animationDuration = {0.1}/>
		</div></span>
            ) : (
              <span>&nbsp; &nbsp; &nbsp;</span>
            )}
          </td>
          <td>
            <h2>Title: {name}</h2>
            <h3>By: {artist}</h3>
            {/* <Link to={`/songs/${song.id}`}><button className="artistbutton">details</button></Link> */}
            {/* <h3>Album:{album}</h3>
            <h3>Time:{time}</h3> */}
          </td>
          <td>
          <Link to={`/songs/${song.id}`}><button className="artistbutton">More..</button></Link>

          </td>
          
        </tr>
      );
}

export default Song