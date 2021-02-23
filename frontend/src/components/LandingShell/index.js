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
          <div className="menuBox devMenu">
            <a
              className="aboutLink"
              target="_blank"
              href="https://github.com/W-the-V/hairBnB/wiki"
            >
              <h3 className="aboutTitle">
                Wiki <i className="fas fa-book-open aboutIcon"></i>
              </h3>
            </a>
            <a
              className="aboutLink"
              target="_blank"
              href="https://github.com/W-the-V/hairBnB/"
            >
              <h3 className="aboutTitle">
                Github Repository <i className="fas fa-book aboutIcon"></i>
              </h3>
            </a>
            <a
              className="aboutLink"
              target="_blank"
              href="https://github.com/W-the-V/"
            >
              <h3 className="aboutTitle">
                Developer Github{" "}
                <i className="fab fa-github-square aboutIcon"></i>
              </h3>
            </a>
            <a
              className="aboutLink"
              target="_blank"
              href="https://www.linkedin.com/in/walter-hills-a52535205/"
            >
              <h3 className="aboutTitle">
                Developer LinkedIn <i className="fab fa-linkedin aboutIcon"></i>
              </h3>
            </a>
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
