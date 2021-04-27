import React from "react";
import styled from "styled-components";
import { auth } from "../firebase";

function ChatMessage({ text, timestamp, voice, sender, videos, files }) {
  console.log(timestamp);
  return (
    <Container sender={sender}>
      <Text>
        <p>{text}</p>
      </Text>
      <AttachFiles filesLength={files.length || videos.length}>
        {files &&
          files?.map((file) => (
            <div
              key={file}
              className="image__cont"
              style={{
                width: "200px",
                height: "200px",

                display: "flex",
                alignItems: "stretch",
              }}
            >
              <img
                src={file}
                alt="some thing went wrong"
                style={{
                  width: "100%",

                  imageRendering: "pixelated",
                }}
              />
            </div>
          ))}

        {videos &&
          videos.map((video) => (
            <div
              key={video}
              className="video__cont"
              style={{
                width: "200px",
                height: "200px",
                border: "1px solid green",
                display: "flex",
                alignItems: "center",
              }}
            >
              <video src={video} alt="" width="100%" height="100%" />
            </div>
          ))}
      </AttachFiles>
      <DateMessage>
        <p>{new Date(timestamp.toDate()).toUTCString()}</p>
      </DateMessage>
    </Container>
  );
}

export default ChatMessage;

const Container = styled.div`
  display: flex;
  margin-top: 15px;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 15px;
  flex-direction: column;
  position: relative;
  width: fit-content;
  max-width: 400px;
  padding: 14px;

  padding-right: 20px;
  height: auto;
  align-self: ${(props) =>
    props.sender === auth.currentUser?.email ? "flex-end" : "flex-start"};
  border-radius: 10px;
  background-color: ${(props) =>
    props.sender === auth.currentUser?.email ? "lightgreen" : "lightyellow"};
  font-size: 14px;
`;

const Text = styled.div`
  line-height: 20px;
`;
const DateMessage = styled.div`
  font-size: 11px;
  color: gray;
  font-weight: normal;
  margin-top: 10px;
  align-self: flex-end;
`;

const AttachFiles = styled.div`
  display: grid;
  grid-gap: 10px;

  grid-template-columns: ${(props) =>
    props.filesLength > 1 ? "repeat(2, 200px)" : "200px"};
`;
