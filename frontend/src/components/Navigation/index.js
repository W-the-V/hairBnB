import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import SearchTabs from "../SearchTabs";
import SearchBar from "../SearchBar";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import src from "../../images/logotext.png";

import { changeMenu } from "../../store/showMenu";

function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const menuState = useSelector((state) => state.menu.open);

  const sessionLinks = <ProfileButton user={sessionUser} />;
  const openMenu = () => {
    if (menuState) return;
    dispatch(changeMenu());
  };

  return (
    <div className="navOuterShell">
      <div className="navBar">
        <NavLink exact to="/" className="homeLink">
          <button className="homeButton">
            <img className="logoText" src={src}></img>
          </button>
        </NavLink>
        <SearchTabs />
        {menuState && (
          <button className="navButton active" onClick={() => openMenu()}>
            <i className="fas fa-bars"></i>
            <i className="fas fa-user-circle" />
          </button>
        )}
        {!menuState && (
          <button className="navButton" onClick={() => openMenu()}>
            <i className="fas fa-bars"></i>
            <i className="fas fa-user-circle" />
          </button>
        )}
      </div>
      <div className="searchShell">
        <SearchBar />
      </div>
      <div className="userMenuShell">{isLoaded && sessionLinks}</div>
    </div>
  );
}

export default Navigation;
