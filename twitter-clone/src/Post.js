import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';


function Post({displayname, username, verfified, text, image, avatar}) {
  return (
    <div className='post'> 
        <div className='post-avatar'>
            <Avatar src={avatar}></Avatar>
        </div>
        <div className='postbody'>
            <div className='postheader'>
                <div className='postheadertext'>
                    <h3>
                        {displayname} 
                        <span>
                           {verfified && <VerifiedIcon className='postbadge' />} <span className='postheaderspecial'> @{username}</span>
                        </span> 
                        
                    </h3>
                </div>
                <div className='postheaderdescription'>
                    <p>{text}</p>
                </div>
            </div>
            <img 
                src={image}
            />
            <div className='postfooter'>
                <ChatBubbleOutlineIcon fontSize='small' />
                <RepeatIcon fontSize='small' />
                <FavoriteBorderIcon fontSize='small' />
                <PublishIcon fontSize='small' />

            </div>
        </div>
    </div>
  )
}

export default Post