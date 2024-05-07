import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div style={{ height: "100vh", padding: "20px", backgroundColor: "#232323", color: "white" }}>
      
      
      <ul style={{ listStyle: "none", padding: "0" }}>
        <li style={{ marginBottom: "10px" }}>
          <Link to="/" style={{ color: "#87CEFA", textDecoration: "none" }}>
            DesktopOne
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
