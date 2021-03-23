import React from "react";
import styled from "styled-components";

function FriendProfile({ fullname, photoURL, displayChatInfo, onClick }) {
  return (
    <Container onClick={onClick}>
      <ProfilePicture>
        <img src={photoURL} alt="" />
      </ProfilePicture>

      <Content>
        <div className="line-one">
          <p className="='username">{fullname}</p>

          {displayChatInfo ? <p className="date">26/07/2021</p> : ""}
        </div>
        {displayChatInfo ? <p className="_dfrtes">Hey How are you?</p> : ""}
      </Content>
    </Container>
  );
}

export default FriendProfile;

const Container = styled.div`
  width: 100%;

  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;
  display: flex;
  align-items: center;
`;

const ProfilePicture = styled.div`
  margin-left: 10px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border: 0.2px solid #eeeeee;
  }
`;

const Content = styled.div`
  margin-left: 15px;

  .line-one {
    width: 250px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
    .date {
      color: gray;
      font-size: 14px;
    }
  }

  ._dfrtes {
    font-size: 13px;
  }
`;
