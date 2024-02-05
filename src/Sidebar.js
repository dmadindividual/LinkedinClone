import React from "react";
import { Avatar } from "@mui/material";
import bgImage from'./bgImage.jpg'
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

const Sidebar = () => {
  const user = useSelector(selectUser)
    const recentItems = ['React', 'programming', 'javascript', 'python', 'java', 'c++'];
    const element = recentItems.map((item, index) => {
        return (
            <div className="sidebar__recent_item flex text-gray-600 cursor-pointer p-1  mb-1 hover:bg-slate-300	 rounded hover:text-black " key={index}>
                <span className="mr-2.5 ml-1.5">#</span>
                <p>{item}</p>

            </div>
        );
    });
  return (
    <div className="sidebar rounded-lg text-center h-fit sticky top-20 flex-none ">
      <div className="sidebar__top flex flex-col items-center border border-sky-500 border-b-0 rounded-t-lg bg-white pb-2.5">
        <img className="mb-[-20px] w-full h-16 rounded-t-lg object-cover " src={bgImage} alt="Background Stats" />
        <Avatar className="sidebar__avatar mb-2.5" >{user.email[0]}</Avatar>
        <h2 className="text-lg">{user.displayName}</h2>
        <h4 className="text-gray-700 text-xs	">{user.email}</h4>
      </div>

      <div className="sidebar__stats  text-gray-600 text-sm font-semibold p-2.5 bg-white rounded-b-lg  ">
        <div className="sidebar__stat mt-2.5 flex justify-between ">
          <p>Who viewed you</p>
          <p className="stat_number font-bold text-textxolor">23,444</p>
        </div>

        <div className="sidebar__stat mt-2.5 flex justify-between ">
          <p>View on Post</p>
          <p className="stat_number font-bold text-textxolor">23,444</p>
        </div>
      </div>

      <div className="sidebar__bottom bg-white p-2.5 m-2.5 rounded-xl border text-left  border-yellow-500">
        <p>Recent</p>
        {element}

        </div>
    </div>
  );
};

export default Sidebar;
