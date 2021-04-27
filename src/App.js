import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Home";
import { useState } from "react";
import { auth } from "./firebase";
import MainContainer from "./Components/MainContainer";
import SideBar from "./Components/SideBar";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const [signUp, setSignUp] = useState(false);
  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
        localStorage.removeItem("user");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Container>
      <Router>
        {!user && signUp ? (
          <SignUp setSignUp={setSignUp} />
        ) : !user && !signUp ? (
          <Login setUser={setUser} setSignUp={setSignUp} />
        ) : (
          <Switch>
            <Route path="/:userId" exact>
              <div className="chatDisplay">
                <SideBar signOut={signOut} />
                <MainContainer userName={user.fullname} />
              </div>
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/">
              <Home signOut={signOut} />
            </Route>
          </Switch>
        )}
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  min-height: fit-content;
  justify-content: center;

  background-color: #fafafa;
  @media (max-width: 800px) {
    justify-content: flex-start;
  }

  .chatDisplay {
    width: 100%;

    height: 100vh;
    min-height: 600px;

    background-color: #fafafa;
    display: flex;
  }
  /* 8849358896 */
`;
