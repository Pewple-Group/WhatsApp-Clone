import React, { useState } from "react";
import styled from "styled-components";
import WhatsappLogo from "../assets/whatsapp.png";

import db, { auth, storage } from "../firebase";

function SignUp({ setSignUp }) {
  // const history = useHistory();
  const storageRef = storage.ref();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [profile, setProfile] = useState("");
  const [disable, setDisable] = useState(false);

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({
          id: result.user.uid,
          displayName: fullname,
          photoURL: profile,
          email: email,
        });

        result.user
          .sendEmailVerification()
          .then(alert("please Verify your Account"))
          .catch((error) => {
            alert(error.message);
          });
        const newUser = {
          fullname: fullname,
          email: email,
          photoURL: profile,
        };
        db.collection("users").doc(result.user.uid).set(newUser);

        setSignUp(false);
      })
      .catch((error) => alert(error.message));
  };

  const setPicture = async (e) => {
    setDisable(true);
    const file = e.target.files[0];
    console.log(file);

    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    const link = await fileRef.getDownloadURL();
    setProfile(link);
    console.log(profile);
    setDisable(false);
  };

  return (
    <Container>
      <Header>
        <div className="header__logo">
          <img src={WhatsappLogo} alt="" />
        </div>

        <div className="header__title">
          <p>Whatsapp Web</p>
        </div>
      </Header>
      <SignUpComponent>
        <h3>Create Whatsapp Account</h3>
        <SignUpForm>
          <Name>
            <p>Full Name</p>
            <input
              type="text"
              name="name"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
          </Name>
          <Email>
            <p>Email</p>
            <input
              type="email"
              name="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Email>
          <Password>
            <p>Password</p>

            <input
              required
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Password>

          <RePassword>
            <p>Re-Password</p>
            <input
              required
              type="password"
              name="password"
              value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
            />
          </RePassword>

          <ProfilePicture>
            <p>Profile Picture</p>
            <input accept="image/*" type="file" onChange={setPicture} />
          </ProfilePicture>
          <button onClick={signUp} disabled={disable}>
            Create a Account
          </button>
          <button onClick={() => setSignUp(false)}>back to login</button>
        </SignUpForm>
      </SignUpComponent>
    </Container>
  );
}

export default SignUp;

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

  @media (max-width: 650px) {
    height: 100%;
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

const SignUpComponent = styled.div`
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

const SignUpForm = styled.div`
  margin-left: 50px;
  margin-top: 30px;

  button {
    margin-top: 20px;
    height: 35px;
    padding: 5px 20px 5px 20px;
    width: 15em;
    background-color: #62f0d1;
    border: none;
    border-radius: 6px;
    margin-right: 20px;
  }
`;

const Name = styled.div`
  p {
    font-size: 18px;
    margin-bottom: 10px;
  }

  input {
    width: 80%;
    padding-left: 10px;
    height: 30px;
    border-radius: 6px;
    border: 1px solid lightgrey;
    outline: none;
  }

  margin-bottom: 20px;
`;

const Email = styled.div`
  p {
    font-size: 18px;
    margin-bottom: 10px;
  }

  input {
    width: 80%;
    padding-left: 10px;
    height: 30px;
    border-radius: 6px;
    border: 1px solid lightgrey;
    outline: none;
  }
  margin-bottom: 20px;
`;
const Password = styled.div`
  p {
    font-size: 18px;
    margin-bottom: 10px;
  }

  input {
    width: 80%;
    padding-left: 10px;
    height: 30px;
    border-radius: 6px;
    border: 1px solid lightgrey;
    outline: none;
  }
  margin-bottom: 20px;
`;

const RePassword = styled.div`
  p {
    font-size: 18px;
    margin-bottom: 10px;
  }

  input {
    width: 80%;
    padding-left: 10px;
    height: 30px;
    border-radius: 6px;
    border: 1px solid lightgrey;
    outline: none;
  }
  margin-bottom: 20px;
`;

const ProfilePicture = styled.div`
  p {
    font-size: 18px;
    margin-bottom: 10px;
  }

  input {
    width: 80%;
    padding-left: 10px;
    height: 30px;
    border-radius: 6px;

    outline: none;
  }

  margin-bottom: 20px;
`;
