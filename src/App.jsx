import React, { Component, Suspense } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Redirect, Route, Switch } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";

import { initialize } from "./redux/appReducer";
import { compose } from "redux";
import Preloader from "./components/common/preloader/preloader";

const DialogContainer = React.lazy(() =>
  import("./components/Dialogs/DialogContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);

class App extends Component {
  componentDidMount() {
    this.props.initialize();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <NavBar />
        <div className="app-wrapper-content">
          <Switch>
            <Redirect exact from="/" to="/profile" />
            <Route
              path="/dialogs"
              render={() => {
                return (
                  <Suspense fallback={<Preloader />}>
                    <DialogContainer />
                  </Suspense>
                );
              }}
            />
            <Route
              path="/profile/:userId?"
              render={() => {
                return (
                  <Suspense fallback={<Preloader />}>
                    <ProfileContainer />
                  </Suspense>
                );
              }}
            />
            <Route path="/news" render={() => <News />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/login/facebook" render={() => <div>facebook</div>} />
            <Route path="/login" render={() => <Login />} />
            <Route path="*" render={() => <div>404</div>} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});
export default compose(connect(mapStateToProps, { initialize }))(App);
