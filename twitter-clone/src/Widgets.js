import React from 'react'
import './Widgets.css'
import SearchIcon from '@mui/icons-material/Search';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';


function Widgets() {
  return (
    <div className='widgets'>
        <div className='widgetsinput'>
            <SearchIcon className='widgetssearchicon' />
            <input placeholder='Search Twitter' type='text' />
        </div>

        <div className='widgetswidgetscontainer'>
            <h2>What's happening</h2>
            <TwitterTweetEmbed tweetId={'1679143590742884352'} />
            <TwitterTimelineEmbed 
                sourceType='profile'
                screenName='MarvelStudios'
                options={{height: 400}} />

            <TwitterShareButton
                url={'https://facebook.com/Marvel'}
                options={{ text: "Watch Marvel's latest", via: 'Marvel' }}
            />

        </div>
        
    </div>
  )
}

export default Widgets