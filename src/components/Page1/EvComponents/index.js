import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import img1 from "../../../assets/Automation.jpg"
import img2 from "../../../assets/evTech.webp"
import img3 from "../../../assets/ev.jpg"
function EvComponents() {
  return (
    <div className="ev-links">
      <Link className="link" to={`/automations`}>
        <div className="image">
          <h2>Automations</h2>
          <img className="img" src={img1} alt="Image failed to load" />
        </div>
      </Link>
      <Link className="link" to={'/evtech'}>
        <div className="image">
          <h2>EV-Tech</h2>
          <img src={img2} alt="Image failed to load" />
        </div>
      </Link>
      <Link className="link" to={'/ev'}>
        <div className="image">
          <h2>EV</h2>
          <img src={img3} alt="Image failed to load" />
        </div>
      </Link>
    </div>
  );
}

export default EvComponents;
