import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import DeveloperButton from "./components/DeveloperButton";
import AmenitiesList from "./components/AmenitiesList";
import TravelSection from "./components/TravelSection";
import { useParams } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  let { url } = useParams();
  useEffect(() => {
    console.log(url);
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <Switch>
        <Route exact path="/">
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
