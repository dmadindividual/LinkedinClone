import React from "react";
import "./Header.css";
import { Search } from '@mui/icons-material'
import linkedinLogo from './linkedinlogo.png'
import HeaderOption from "./HeaderOption";
import { HouseSharp  , NetworkWifiTwoTone, Work, MailOutlined, NotificationAddOutlined } from '@mui/icons-material'
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { auth } from "./firebaseConfig";

const Header = () => {
  const user = useSelector(selectUser)
  const HeaderIcons = [HouseSharp  , NetworkWifiTwoTone, Work, MailOutlined, NotificationAddOutlined];
  const Titles = ["Home", "Network", "Jobs",  "Message", "Notifications"];
  const showAvatar = true; 
  const avatar = showAvatar && user ? <Avatar>{user.email[0]}</Avatar> : null;
  
  const dispatch = useDispatch()

  const element = Titles.map((title, index) => {
    const Icon = HeaderIcons[index]; // Get the corresponding icon for the title

    return (
      <HeaderOption key={index} avatar={avatar} title={title} icon={Icon && <Icon />} />
    );
  });

  const logoutOption = ()=>{
    dispatch(logout())
    auth.signOut()

  }

  return (
    <div className="header flex justify-evenly p-3 w-full sticky top-0 z-50 bg-white ">
      <div className="header_left flex items-center">
        <img className="mr-2.5" src={linkedinLogo} alt="linkedin logo" />

        <div className="header_search flex justify-center p-2 items-center rounded-sm h-6 text-gray-500 bg-[#eef3f8]-200">
          <Search />
          <input className="outline-none border-none bg-none" type="text" placeholder="Search" />
        </div>
      </div>

      <div className="header_right flex">
        {element}
        <div onClick={logoutOption} className="cursor-pointer">
      {avatar}
      </div>

      </div>
    </div>
  );
};

export default Header;
