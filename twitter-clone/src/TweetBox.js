import React from 'react'
import './TweetBox.css'
import { Avatar, Button } from '@mui/material'

function TweetBox() {
  return (
    <div className='tweetbox'>
        <form>
            <div className='tweetbox-input'>
                <Avatar src='https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Fwinteriscoming.net%2Ffiles%2F2019%2F01%2FLoki.jpg'></Avatar>
                <input placeholder="What's happening?" type='text'></input>
            </div>
            <Button className='tweetbox-tweetbutton'>Tweet</Button>

        </form>

    </div>
  )
}

export default TweetBox