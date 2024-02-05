import React, { useState, useEffect } from "react";
import Create from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import Posts from "./Post";
import {
  Image,
  Subscriptions,
  EventNote,
  CalendarViewDay,
} from "@mui/icons-material"
import {db} from './firebaseConfig'
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";


const Feed = () => {
  const user = useSelector(selectUser)
  const [post, setPosts] = useState([]);
  const [input, setInput] = useState("");
  const InputIcons = [Image, Subscriptions, EventNote, CalendarViewDay];
  const Titles = ["Photos", "Videos", "Events", "Calendar"];
  const colors = [
    "text-blue-500",
    "text-red-500",
    "text-yellow-500",
    "text-green-500",
  ];
  const element = Titles.map((title, index) => {
    const Icon = InputIcons[index]; // Get the corresponding icon for the title
    return (
      <InputOption
        key={index}
        title={title}
        icon={Icon && <Icon />}
        color={colors[index]}
      />
    );
  });

  useEffect(()=>{
    db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot)=>{
      setPosts(snapshot.docs.map((doc)=>{
        return{
          id:doc.id,
          data:doc.data()
        }
      }))
    })

  })

  const inputChange = (e) => {
    setInput(e.target.value);
  };

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: user.displayName ,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: new Date().toString(),

    })
    setInput("")

    console.log('input')




  };



  return (
    <div className="feed my-0 mx-5 w-5/12	">
      <div className="feed_InputContainer bg-white p-2.5 pb-5 rounded-xl mb-5">
        <div className="feed_Input border border-gray-300 flex p-2.5 pl-3.5 rounded-sm text-gray-900		 ">
          <Create />
          <form className="flex w-full">
            <input
              className="border-none flex-1 ml-2.5 font-semibold outline-0"
              type="text"
              value={input}
              onChange={inputChange}
            />
            <button onClick={sendPost} className="hidden">
              Send
            </button>
          </form>
        </div>
        <div className="Feed_InputOptions flex justify-evenly ">{element}</div>
      </div>

<FlipMove>
      {post.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Posts
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
