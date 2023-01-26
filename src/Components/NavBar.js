import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <div>
        {/* <img
          className="homepg-img"
          src="https://media.baamboozle.com/uploads/images/57251/1615728434_27845_gif-url.gif"
          // src=""
          alt="homepg-img"
          width={100}
        /> */}
        <h1 className="BuG">
        <Link to="/">Tuner</Link>
      </h1>
      </div>
      
      <div className="bothnav-btn">
        <button>
          <Link to="/songs">All Songs</Link>
        </button>
        <button className="nav-btn">
          <Link to="/songs/new">New Songs</Link>
        </button>
      </div>
    </nav>
  );
}
