import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./LandingShell.css";
import { changeDeveloper } from "../../store/showMenu";

function LandingShell() {
  const dispatch = useDispatch();
  const devState = useSelector((state) => state.menu.developer);
  return (
    <div className="LandingShell">
      <div className="localBox">
        <p className="largeText">Local Spots</p>
        <button className="largeButton" onClick={() => console.log("Hello!")}>
          Explore local options
        </button>
      </div>
      <div className="developerBox">
        {devState && (
          <div className="menuBox">
            <h3 className="aboutTitle">
              Wiki :{" "}
              <a target="_blank" href="https://github.com/W-the-V/hairBnB/wiki">
                <i className="fas fa-book-open"></i>
              </a>
            </h3>
            <h3 className="aboutTitle">
              Github Repository :{" "}
              <a target="_blank" href="https://github.com/W-the-V/hairBnB/">
                <i class="fas fa-book"></i>
              </a>
            </h3>
            <h3 className="aboutTitle">
              Developer Github :{" "}
              <a target="_blank" href="https://github.com/W-the-V/">
                <i class="fab fa-github-square"></i>
              </a>
            </h3>
            <h3 className="aboutTitle">
              Developer LinkedIn :{" "}
              <a
                target="_blank"
                href="https://www.linkedin.com/in/walter-hills-a52535205/"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </h3>
          </div>
        )}
        <button
          className="developerButton"
          onClick={() => dispatch(changeDeveloper())}
        >
          More about this Website / Meet the Developer
        </button>
      </div>
    </div>
  );
}

export default LandingShell;
