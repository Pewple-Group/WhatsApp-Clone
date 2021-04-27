import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import TollIcon from "@material-ui/icons/Toll";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FriendProfile from "./FriendProfile";
import db, { auth } from "../firebase";
import { useHistory } from "react-router-dom";
// import firebase from "firebase";

function SideBar({ signOut }) {
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const [friendsList, setFriendsList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // const [searchElement, setSearchElement] = useState({});

  useEffect(() => {
    const fetchdata = async () => {
      const data = await db.collection("users").get();
      setUsers(
        data.docs.filter((doc) => doc.data().email !== auth.currentUser?.email)
      );
    };
    const fetchFriends = async () => {
      const data = await db
        .collection("FriendsList")
        .doc(auth.currentUser?.uid)
        .collection("list")
        .onSnapshot((snapshot) => {
          setFriendsList(snapshot.docs);
        });
    };
    fetchdata();
    fetchFriends();
  }, [users]);

  const searching = (e) => {
    setSearchInput(e.target.value);
  };
  const goToUser = (id) => {
    if (id) {
      history.push(`/${id}`);
    }
  };

  const searchItem = users.filter((data) => {
    if (searchInput) {
      if (
        data.data().email.toLowerCase().includes(searchInput.toLowerCase()) ||
        data.data().fullname.toLowerCase().includes(searchInput.toLowerCase())
      ) {
        return data;
      }
    }
  });

  const item = searchItem.map((data) => {
    return (
      <FriendProfile
        fullname={data?.data().fullname}
        photoURL={data?.data().photoURL}
        onClick={() => goToUser(data.id)}
      ></FriendProfile>
    );
  });

  return (
    <Container>
      <Header>
        <Profile
          onClick={() => {
            history.push("/");
            signOut();
          }}
        >
          {auth?.currentUser?.photoURL ? (
            <img
              className="user__profile__image"
              src={auth.currentUser.photoURL}
              alt=""
            />
          ) : (
            <ProfilePicture />
          )}
        </Profile>

        <HeaderRight>
          <StatusIcon />

          <NewChatIcon />
          <MoreIcon />
        </HeaderRight>
      </Header>

      <SearchContainer>
        <SearchBar
          placeholder="Search.."
          onChange={searching}
          value={searchInput}
        />
      </SearchContainer>

      <MainContent>
        {item.length > 0 ? (
          item
        ) : (
          <div className="friends__lists">
            {friendsList.map((friend) => (
              <FriendProfile
                fullname={friend.data().fullname}
                photoURL={friend.data().photoURL}
                onClick={() => goToUser(friend.id)}
              />
            ))}
          </div>
        )}
      </MainContent>
    </Container>
  );
}

export default SideBar;
const Container = styled.div`
  width: 350px;
  min-width: 362px;
  border-right: 1px solid lightgray;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  height: 50px;

  padding: 5px 0 5px 10px;
  background-color: #ededed;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Profile = styled.div`
  cursor: pointer;
  .MuiSvgIcon-root {
    font-size: 45px !important;
    color: #dfe5e7;
    cursor: pointer;
  }
  .user__profile__image {
    width: 45px;
    border-radius: 100%;
  }
`;
const ProfilePicture = styled(AccountCircleIcon)``;

const HeaderRight = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  width: 130px;
  justify-content: space-around;
`;

const StatusIcon = styled(TollIcon)`
  font-size: 22px !important;
  color: #868383;
  cursor: pointer;
`;

const NewChatIcon = styled(InsertCommentIcon)`
  font-size: 22px !important;
  color: #868383;
  cursor: pointer;
`;

const MoreIcon = styled(MoreVertIcon)`
  font-size: 22px !important;
  color: #868383;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f6;
`;

const SearchBar = styled.input`
  height: 30px;
  padding-left: 13px;
  font-size: 14px;
  width: 90%;
  border-radius: 20px;
  border: none;
  outline: none;
`;

const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #cccccc;
  }
`;
