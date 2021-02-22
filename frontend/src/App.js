import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import LandingShell from "./components/LandingShell";
import AmenitiesList from "./components/AmenitiesList";
import TravelSection from "./components/TravelSection";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <div className="bodyShell">
        <LandingShell />
        <AmenitiesList />
        <TravelSection />
      </div>
    </>
  );
}

export default App;
