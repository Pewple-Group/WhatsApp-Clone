import styled from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
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
  const history = useHistory();
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
    <Router>
      {!user && signUp ? (
        <SignUp setSignUp={setSignUp} />
      ) : !user && !signUp ? (
        <Login setUser={setUser} setSignUp={setSignUp} />
      ) : (
        <Container>
          <Switch>
            <Route path="/:userId" exact>
              <SideBar signOut={signOut} />
              <MainContainer userName={user.fullname} />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/">
              <Home signOut={signOut} />
            </Route>
          </Switch>
        </Container>
      )}
    </Router>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  min-height: fit-content;
  justify-content: center;
`;
