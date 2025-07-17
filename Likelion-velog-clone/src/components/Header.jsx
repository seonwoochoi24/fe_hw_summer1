// Header.jsx
import React from "react";
import styled from "styled-components";
import logoIcon from "../assets/icons/velog-logo.svg"
import notificationIcon from "../assets/icons/notification-velog.png";
import searchIcon from "../assets/icons/search-velog.png"

const Box=styled.div`
    display: flex;
    flex-direction: row;
    height: 40px;
    justify-content: space-between;
    justify-items: center;
    align-items: center;
`
const Logo=styled.img`
    height: 20px;
`;
const Icongroup=styled.div`
    width: 172px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`
const Icon=styled.img`
    width: 24px;
    height: 24px;
`;
const Loginbtn=styled.button`
    background-color: black;
    color: white;
    border-radius: 90px;
    width: 80px;
    height: 32px;
`

function Header() {
  return(
  <Box>
    <Logo src={logoIcon}/>
    <Icongroup>
     <Icon src={notificationIcon} alt="종 아이콘"/>
     <Icon src={searchIcon} alt="검색 아이콘"/>
     <Loginbtn>로그인</Loginbtn>
    </Icongroup>
  </Box>
  );

}

export default Header;