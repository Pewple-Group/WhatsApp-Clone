import React, { useState } from "react";
import styled from "styled-components";
import MoodIcon from "@material-ui/icons/Mood";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic";
import { auth } from "../firebase";
function ChatInput({ sendMessage }) {
  const [messageData, setMessageData] = useState({
    message: "",
    email: auth.currentUser?.email,
  });
  const send = (e) => {
    e.preventDefault();
    sendMessage(messageData);
    setMessageData({
      message: "",
    });
  };

  return (
    <Container>
      <EmojiIcon />
      <AttachIcon />

      <MessageInputContainer>
        <form onSubmit={send}>
          <input
            type="text"
            placeholder="Type a Message.."
            value={messageData.message}
            onChange={(e) =>
              setMessageData({
                message: e.target.value,
                email: auth.currentUser?.email,
              })
            }
          />
        </form>
      </MessageInputContainer>

      <RecordIcon />
    </Container>
  );
}

export default ChatInput;

const Container = styled.div`
  height: 60px;
  width: 100%;
  min-height: 60px;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
`;

const EmojiIcon = styled(MoodIcon)`
  margin-left: 20px;
  font-size: 25px !important;
  font-weight: 300 !important;
  color: #868383;
`;

const AttachIcon = styled(AttachFileIcon)`
  margin-left: 15px;
  font-size: 25px !important;
  font-weight: 300 !important;
  color: #868383;
`;

const MessageInputContainer = styled.div`
  flex: 1;
  margin-left: 20px;
  form {
    input {
      width: 100%;
      height: 35px;
      border-radius: 30px;
      border: none;
      padding-left: 15px;
      outline: none;
    }
  }
`;

const RecordIcon = styled(MicIcon)`
  margin-left: 30px;
  margin-right: 20px;
  font-size: 25px !important;
  font-weight: 300 !important;
  color: #868383;
`;
