import React from "react";
import styled from "styled-components";

function ChatMessage() {
  return (
    <Container>
      <Text>
        <p>
          Pdpatel is good web developer and programmer he know each and every
          programming language Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Culpa atque earum, itaque beatae praesentium tempora? Excepturi
          eius, possimus pariatur, amet ab libero culpa odit iste, ratione
          blanditiis et iure explicabo?
        </p>
      </Text>
      <Date>
        <p>19-3-2021 16:47</p>
      </Date>
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
  height: auto;
  border-radius: 10px;
  background-color: lightyellow;
  font-size: 14px;
`;

const Text = styled.div`
  line-height: 20px;
`;
const Date = styled.div`
  font-size: 11px;
  color: gray;
  font-weight: normal;
  margin-top: 10px;
  align-self: flex-end;
`;
