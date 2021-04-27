import React, { useState } from "react";
import styled from "styled-components";
import WhatsappLogo from "../assets/whatsapp.png";

import GoogleLogo from "../assets/google.png";

import db, { auth, provider } from "../firebase";
import { useStateValue } from "../StateProvider";
function Login({ setUser, setSignUp }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const signInWithGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const newUser = {
          fullname: result.user.displayName,
          email: result.user.email,
          photoURL: result.user.photoURL,
        };
        setUser(newUser);
        localStorage.setItem("user", JSON.stringify(newUser));
        db.collection("users").doc(result.user.uid).set(newUser);
      })
      .catch((err) => alert(err.message));
  };

  const signInWithEmail = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth.user.emailVerified) {
          dispatch({
            type: "SET_USER",
            user: auth.user,
          });
          const newUser = {
            name: auth.user.displayName,
            photo: auth.user.photoURL,
          };
          setUser(newUser);
          localStorage.setItem("user", JSON.stringify(newUser));
        } else {
          alert("Please Verify Your Account");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <Container>
      <Header>
        <div className="header__logo">
          <img src={WhatsappLogo} alt="" />
        </div>
        {/* 8140492335 */}
        <div className="header__title">
          <p>Whatsapp Web</p>
        </div>
      </Header>
      <LoginComponent>
        <h3>Sign-In</h3>

        <LoginForm onSubmit={signInWithEmail}>
          <Email>
            <p>Email</p>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Email>
          <Password>
            <p>Password</p>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Password>

          <div className="signInOptions">
            <button onClick={signInWithEmail}>Sign-In Securely</button>
            <OtherSignInOption onClick={signInWithGoogle}>
              <img src={GoogleLogo} alt="" />
              <p>Sign In With Google</p>
            </OtherSignInOption>
          </div>

          <p className="or__divider">
            ------------ <span className="OR__word">&nbsp; OR &nbsp;</span>{" "}
            ------------
          </p>

          <button className="register__btn" onClick={() => setSignUp(true)}>
            Create a Whatsapp Account
          </button>
        </LoginForm>
      </LoginComponent>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  width: 100vw;

  position: relative;

  display: flex;
  flex-direction: column;
  height: 140vh;
  padding-bottom: 100px;
  background-color: #c3c3c3;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 222px !important;
    max-height: 222px;
    background-color: #00bfa5;
  }

  @media (max-width: 800px) {
    justify-content: flex-start;
    overflow: hidden !important;

    margin-right: 0px;
  }
`;

const Header = styled.div`
  width: 90%;
  height: 50px;

  position: absolute;
  top: 20px;
  align-self: center;
  display: flex;
  align-items: center;
  .header__logo {
    width: 50px;
    margin-right: 20px;
    img {
      width: 100%;
    }
  }

  .header__title {
    font-size: 24px;
    text-transform: Capitalized;
    color: white;
  }
`;

const LoginComponent = styled.div`
  height: fit-content;
  padding-bottom: 5%;
  width: 80%;
  position: absolute;

  align-self: center;
  top: 130px;

  background-color: #ffffff;

  display: flex;
  flex-direction: column;

  flex: none;
  max-width: 1050px;
  z-index: 2;

  @media (max-width: 650px) {
    width: 100%;
    height: 100%;
    padding-bottom: 40px;
  }

  h3 {
    margin-left: 50px;
    margin-top: 30px;
    font-size: 24px;
    font-weight: 400;
  }
`;

const LoginForm = styled.div`
  margin-left: 50px;
  margin-top: 30px;
  width: 80%;
  button {
    margin-top: 30px;
    padding: 5px 20px 5px 20px;
    width: 10em;
    background-color: #62f0d1;
    border: none;
    border-radius: 6px;
    margin-right: 20px;
  }

  .or__divider {
    margin-top: 30px;
    margin-left: 45px;
    color: gray;
    letter-spacing: -3px;
  }
  .OR__word {
    letter-spacing: -0.5px;
  }

  .register__btn {
    width: 18em;
    margin-top: 15px;
    height: 35px;
    background-color: lightsteelblue;
  }

  .signInOptions {
    display: flex;
  }
`;

const Email = styled.div`
  p {
    font-size: 18px;
    margin-bottom: 20px;
  }

  input {
    width: 80%;
    padding-left: 10px;
    height: 30px;
    border-radius: 6px;
    border: 1px solid lightgrey;
    outline: none;
  }
`;
const Password = styled.div`
  p {
    font-size: 18px;
    margin-bottom: 20px;
    margin-top: 20px;
  }

  input {
    width: 80%;
    padding-left: 10px;
    height: 30px;
    border-radius: 6px;
    border: 1px solid lightgrey;
    outline: none;
  }
`;

const OtherSignInOption = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgray;
  padding: 5px 20px 5px 20px;
  cursor: pointer;
  border-radius: 5px;
  width: fit-content;

  margin-top: 30px;
  @media (max-width: 800px) {
    width: 50px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 30px;
    margin-right: 15px;
    margin-left: 15px;
  }

  p {
    @media (max-width: 800px) {
      display: none;
    }
  }
`;
