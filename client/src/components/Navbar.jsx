import React, { useState } from "react";
import styled from "styled-components";
import Upload from "./Upload.jsx";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import VideoCallOutlinedIcon from "@mui/icons-material/VideoCallOutlined";
import SeachOutlined from "@mui/icons-material/SearchOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { red } from "@mui/material/colors";

const Container = styled.div`
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 56px;
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  padding: 0px 20px;
  justify-content: flex-end;
  position: relative;
`;
const Search = styled.div`
  width: 40%;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  color: ${({ theme }) => theme.text};
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  background-color: #999;
  border-radius: 50%;
`;

const Navbar = () => {
  const navigate = useNavigate();

  const { currentUser } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  return (
    <>
      <Container>
        <Wrapper>
          <Search>
            <Input
              placeholder='Search'
              onChange={(e) => setQuery(e.target.value)}
            />
            <SeachOutlined onClick={() => navigate(`/search?q=${query}`)} />
          </Search>
          {currentUser ? (
            <User>
              <VideoCallOutlinedIcon
                style={{ cursor: "pointer" }}
                onClick={() => setOpen(true)}
              />
              <Avatar src={currentUser.img} />
              {currentUser.name}
            </User>
          ) : (
            <Link to='signin' style={{ textDecoration: "none" }}>
              <Button>
                <AccountCircleOutlinedIcon />
                SIGN IN
              </Button>
            </Link>
          )}
        </Wrapper>
      </Container>
      {open && <Upload setOpen={setOpen} />}
    </>
  );
};

export default Navbar;
