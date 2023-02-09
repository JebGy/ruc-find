import { Link } from "react-router-dom";
import "../styles/main.css";
function Home() {
  return (
    <div className="container">
      <div className="main">
        <h2 className="title">Search any ruc free!</h2>
        <Link to="/consultar" className="actions">
          Let's start
        </Link>
        <footer className="footer">Created by Favio Munayco</footer>
      </div>
    </div>
  );
}

export default Home;
