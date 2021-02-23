import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./LandingShell.css";
import { changeDeveloper } from "../../store/showMenu";

function LandingShell() {
  const dispatch = useDispatch();
  const devState = useSelector((state) => state.menu.developer);
  useEffect(() => {
    const closeDev = () => {
      dispatch(changeDeveloper());
    };
    if (devState) {
      document
        .querySelector(".developerButton")
        .setAttribute("class", "developerButton active");
      document.querySelector(".bodyShell").addEventListener("click", closeDev);
      document.querySelector(".homeButton").addEventListener("click", closeDev);
    } else {
      document
        .querySelector(".developerButton")
        .setAttribute("class", "developerButton");
    }

    return () => {
      document
        .querySelector(".bodyShell")
        .removeEventListener("click", closeDev);
      document
        .querySelector(".homeButton")
        .removeEventListener("click", closeDev);
    };
  }, [devState]);
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
