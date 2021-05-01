import "./App.css";
import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import Profile from "./components/Profile";
import { Route, Switch } from "react-router-dom";
import proImg from "./images/image3.jpg";

function App() {
  const [userName, setUserName] = useState("Maite S. Casillas Masluia");
  const [Image, setImage] = useState(proImg);
  const handleGoogleLoing = (Name, Img) => {
    setImage(Img);
    setUserName(Name);
  };
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LoginPage handleGoogleLoing={handleGoogleLoing} />
        </Route>
        <Route exact path="/profile">
          <Profile userName={userName} Image={Image} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
