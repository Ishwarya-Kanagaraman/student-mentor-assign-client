import React from "react";
import { Link} from "react-router-dom";
import './navbar.css';

export default function Navbar() {
  return (
    <div className="container-fluid">
      <div className="row">
       
          <ul class="navbar">
              <li id="heading">Creators Institute for Budding Developers</li>
            <li className="col-sm-12 col-md-6 listElemt">
            <Link className="link" to="/">Home</Link>
            <Link className="link" to="/mentors">Mentors</Link>
            <Link className="link" to="/students">Students</Link>
            <Link className="link" to="/assign-mentor">Asign-Mentor</Link>
            <Link className="link" to="/change-mentor">Change-Mentor</Link>
            <Link className="link" to="/find-by-mentor">Find-By-Mentor</Link>
            </li>
           
          </ul>
         
      </div>
    </div>
  );
}
