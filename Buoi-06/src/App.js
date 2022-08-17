import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/Home'
import LoginPage from "./pages/Login/";
import Register from "./pages/Register";
import SearchPage from "./pages/Search";
import PostPage from "./pages/Post/PostPage";

function App() {

  return (


    <Router>
      <div className="wrapper-content">
        <Header />
        <Switch>
          <Route path="/post/:slug">
            <PostPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
        <div className="spacing" />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
