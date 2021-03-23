import React from "react";
import styled from "styled-components";
import MainContainer from "../Components/MainContainer";
import SideBar from "../Components/SideBar";
import whatsappHome from "../assets/WhatsAppbg.png";
function Home({ signOut }) {
  return (
    <Container>
      <Main>
        <SideBar signOut={signOut} />
        <div className="sg__2gf5">
          <img src={whatsappHome} alt="" />
        </div>
      </Main>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  width: 100%;
  min-width: 800px;
  max-width: 1400px;
  height: 100%;
  min-height: 600px;
  max-height: 1400px;
  background-color: #fafafa;
`;

const Main = styled.div`
  display: flex;
  height: 100%;

  .sg__2gf5 {
    width: 350px;
    height: 200px;
    margin: auto;
    img {
      width: 100%;
    }
  }
`;
