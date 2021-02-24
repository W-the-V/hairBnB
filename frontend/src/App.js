import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import DeveloperButton from "./components/DeveloperButton";
import AmenitiesList from "./components/AmenitiesList";
import TravelSection from "./components/TravelSection";
import SearchModal from "./components/SearchModal";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const searchState = useSelector((state) => state.modal.search);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
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
