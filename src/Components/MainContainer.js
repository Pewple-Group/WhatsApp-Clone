import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ChatImage from "../chatImage.png";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import { useParams } from "react-router-dom";
import db, { auth } from "../firebase";
import firebase from "firebase";
function MainContainer({ userName }) {
  let { userId } = useParams();
  const [user, setUser] = useState([]);
  const getUser = () => {
    db.collection("users")
      .doc(userId)
      .onSnapshot((snapshot) => {
        setUser(snapshot.data());
      });
  };

  const sendMessage = (messageData) => {
    // if (userId) {
    //   let payload = {
    //     text: messageData.message,
    //     senderEmail: messageData.email,
    //     hostEmail: user.email,
    //     timestamp: firebase.firestore.Timestamp.now(),
    //   };
    //   db.collection("chats").doc(userId).collection("messages").add(payload);
    // }
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <Container>
      <Header>
        <HeaderLeft>
          <Profile>
            {user?.photoURL ? (
              <img
                src={user?.photoURL}
                style={{
                  width: "35px",
                  height: "35px",
                  marginLeft: "10px",
                  borderRadius: "50%",
                }}
                alt="error"
              />
            ) : (
              <ProfilePicture />
            )}
          </Profile>

          <p className="_ghter54">{user?.fullname}</p>
        </HeaderLeft>
        <HeaderRight>
          <SearchIconic />
          <MoreIcon />
        </HeaderRight>
      </Header>

      <MessageContainer></MessageContainer>

      <ChatInput sendMessage={sendMessage} />
    </Container>
  );
}

export default MainContainer;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Header = styled.div`
  height: 58px;
  width: 100%;

  background-color: #ededed;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-left: 15px;
  }

  cursor: pointer;
`;
const HeaderRight = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-around;
  color: #868383;
`;

const Profile = styled.div`
  .MuiSvgIcon-root {
    font-size: 45px !important;
    color: #dfe5e7;
    cursor: pointer;
  }
`;
const ProfilePicture = styled(AccountCircleIcon)``;

const SearchIconic = styled(SearchIcon)`
  cursor: pointer;
`;
const MoreIcon = styled(MoreVertIcon)`
  cursor: pointer;
`;

const MessageContainer = styled.div`
  background-image: url(https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png);
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background: #b6b6b6;
  }
`;
