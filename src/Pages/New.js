import SongNewForm from "../Components/SongNewForm";

function New() {
  return (
    <div className="New-pg">
      {/* <div>
        <img
          className="new-logo"
          src="https://1b-f.s3.eu-west-1.amazonaws.com/a/67432-A8F74521-E418-4C01-8D6A-CAA81C38D106-0-1491818778.gif"
          alt="nav-logo"
          width={300}
        />
      </div> */}
      <div>
        <h2>New</h2>
      <SongNewForm />
      </div>
      
    </div>
  );
}

export default New;