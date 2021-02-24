import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import DeveloperButton from "./components/DeveloperButton";
import AmenitiesList from "./components/AmenitiesList";
import TravelSection from "./components/TravelSection";
import SearchModal from "./components/SearchModal";
import LoginModal from "./components/LoginModal";
import SignUpModal from "./components/SignUpModal";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const searchState = useSelector((state) => state.modal.search);
  const loginState = useSelector((state) => state.modal.login);
  const signUpState = useSelector((state) => state.modal.signup);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {loginState && <LoginModal />}
      {signUpState && <SignUpModal />}
      {searchState && <SearchModal />}
      <div className="bodyShell">
        <div className="LandingShell" />
      </div>
      <DeveloperButton />
      <div className="bodyShellLower">
        <AmenitiesList />
        <TravelSection />
      </div>
    </>
  );
}

export default App;
