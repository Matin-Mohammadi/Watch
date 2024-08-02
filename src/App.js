import { Link, NavLink, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div> 
        <nav className="d-flex gap-5 justify-content-center mt-5" style={{width:"100%",background:"rgba(255,255,255,.1)",padding:"1rem 0",backdropFilter:"blur(8px)"}}>
          <Link
            className="font20"
            style={{ textDecoration: "none", color: "whitesmoke",fontSize:"30px" }}
            to="/watches">
            Watches
          </Link>

          <Link
            className="font20"
            to="classics"
            style={{ textDecoration: "none", color: "whitesmoke",fontSize:"30px" }}
          >
            Classics
          </Link>

          <Link
            className="font20"
            to="news"
            style={{ textDecoration: "none", color: "whitesmoke",fontSize:"30px" }}
          >
            News
          </Link>
        </nav>
        <Outlet/>
    </div>
  );
};

export default App;
