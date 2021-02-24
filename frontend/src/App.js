import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import DeveloperButton from "./components/DeveloperButton";
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
      <Switch>
        <Route exact path="/">
          <Navigation isLoaded={isLoaded} />
          <div className="bodyShell">
            <div className="LandingShell" />
          </div>
          <DeveloperButton />
          <div className="bodyShellLower">
            <AmenitiesList />
            <TravelSection />
          </div>
        </Route>
        <Route exact path="/search">
          <Navigation isLoaded={isLoaded} />
          <DeveloperButton />
          <div className="bodyShell">HELLO FROM SEARCH</div>
          <div className="testDiv">HELLO TEST</div>
          <div className="testDiv">HELLO TEST</div>
          <div className="testDiv">HELLO TEST</div>
          <div className="testDiv">HELLO TEST</div>
          <div className="testDiv">HELLO TEST</div>
          <div className="testDiv">HELLO TEST</div>
          <div className="testDiv">{}</div>
        </Route>
      </Switch>
    </>
  );
}

export default App;
