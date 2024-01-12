import { useEffect } from 'react';
import "./Sidebar.css"
import { useNavigate,Link } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (!token || !userId) {
      navigate("/admin-login");
      return;
    }
  }, [navigate]);


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    navigate("/");
    return;
  }

  return (
    <>
      <div className="area" />
      <nav className="main-menu">
        <ul>
          <li>
            <Link to={"/admin"}>
              <i className="fa fa-home fa-2x" />
              <span className="nav-text">Dashboard</span>
            </Link>
          </li>
          <li className="has-subnav">
            <Link to={"/admin/users"}>
              <i className="fa fa-users" />
              <span className="nav-text">All Users</span>
            </Link>
          </li>
          <li className="has-subnav">
            <Link to={"/admin/shop"}>
              <i className="fa fa-comments fa-2x" />
              <span className="nav-text">Shop</span>
            </Link>
          </li>
          <li className="has-subnav">
            <a href="#">
              <i className="fa fa-camera-retro fa-2x" />
              <span className="nav-text">Product</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-film fa-2x" />
              <span className="nav-text">Categories</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-book fa-2x" />
              <span className="nav-text">Inventory</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-cogs fa-2x" />
              <span className="nav-text">Tools &amp; Reports</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-map-marker fa-2x" />
              <span className="nav-text">Member Map</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa fa-info fa-2x" />
              <span className="nav-text">Documentation</span>
            </a>
          </li>
        </ul>
        <ul className="logout">
          <li>
            <a onClick={handleLogout} >
              <i className="fa fa-power-off fa-2x" />
              <span className="nav-text"> Logout</span>

            </a>
          </li>
        </ul>
      </nav>
    </>

  )
}

export default Sidebar