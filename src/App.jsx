import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Route, BrowserRouter } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogContainer from "./components/Dialogs/DialogContainer";
import UserContainer from "./components/Users/UserContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer /> 
        <NavBar />
        <div className="app-wrapper-content">  
          <Route path="/dialogs" render={() => <DialogContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/users" render={() => <UserContainer />} />
          <Route path="/login" render={() => <Login/>} />
        </div>
      </div> 
    </BrowserRouter>
  );
};

export default App;
