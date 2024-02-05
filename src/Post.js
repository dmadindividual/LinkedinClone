import React, {forwardRef} from "react";
import { Avatar } from "@mui/material";
import InputOption from "./InputOption";
import { ThumbUpAltOutlined, ChatOutlined, ShareOutlined, SendOutlined} from "@mui/icons-material";

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
    const InputIcons = [ThumbUpAltOutlined, ChatOutlined, ShareOutlined, SendOutlined];
    const Titles = ["Like", "Comment", "Share", "Send"];
    const colors = ["text-blue-500", "text-red-500", "text-yellow-500", "text-green-500"];
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
  return (
    <div ref={ref} className="post bg-white p-4 mb-4 rounded-md">
        <div className="post__header flex mb-2.5">
            <Avatar/>
            <div className="post__info ml-2.5">
                <h2 className="text-sm">{name}</h2>
                <p className="text-xs text-gray-500">{description}</p>
            </div>
        </div>

        <div className="post__body text-wrap	">
            <p>{message}</p>
        </div>

        <div className="post__buttton flex justify-evenly">
            {element}

        </div>
            
 
    </div>
  );
});

export default Post;
