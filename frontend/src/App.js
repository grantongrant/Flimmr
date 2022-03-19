import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import Photostream from "./components/Photostream";
import PhotoInputForm from "./components/PhotoInputForm";
import SinglePhoto from "./components/SinglePhoto";
// import PhotoEditForm from "./components/PhotoEditForm";
import AlbumPage from "./components/Album/AlbumPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      <main>
      {isLoaded && (
        <Switch>
          <Route exact path="/">
            <SplashPage />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/photos">
            <Photostream />
          </Route>
          <Route exact path="/photos/upload">
            <PhotoInputForm />
          </Route>
          <Route exact path="/photos/:id">
            <SinglePhoto />
          </Route>
          {/* <Route exact path="photos/:id/edit">
              <PhotoEditForm />
          </Route> */}
          <Route exact path="/albums/:id">
            <AlbumPage/>
          </Route>
          <Route>
            404: Not Found
          </Route>
        </Switch>
      )}
      </main>
    </>
  );
}

export default App;
