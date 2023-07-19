import React, { useEffect, useState } from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post';
// import bd from './firebase';

function Feed() {
    const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     bd.collection('posts').onSnapshot(snapshot =>(
    //         setPosts(snapshot.docs.map(doc => doc.data()))
    //     ))
    // }, []);

  return (
    <div className='feed'>
        {/*header*/}
        <div className='feed-header'>
            <h2>Home</h2>
        </div>
        

        {/*tweetbox*/}
        <TweetBox />
        {/* {posts.map(post => (
            <Post
                displayname={post.displayname}
                username={post.username}
                verfified= {post.verfified}
                text={post.text}
                avatar={post.avatar}
                image={post.image}
            />
        ))} */}



        {/*post*/}
        <Post 
        displayname='Tony Stark'
        username='iamtony'
        verfified= {true}
        text='i am iron man'
        avatar='https://cdn.costumewall.com/wp-content/uploads/2019/08/tony-stark.jpg'
        image='https://i.pinimg.com/originals/01/36/4e/01364e7fa4776c0f1f075f0e33b600c5.gif'
        />

        <Post 
        displayname='Hela'
        username='thefavorite'
        verfified= {true}
        text='i will rule the world'
        avatar='https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2017%2F03%2F0002509873283273432343-2000.jpg&q=60'
        />

        <Post 
        displayname='God of Thunder'
        username='thorodison'
        verfified= {true}
        text='hello'
        avatar='https://cdn.britannica.com/73/182873-050-E1C686F4/Chris-Hemsworth-Thor-Thor-The-Dark-World.jpg'
     
        />
        
        
       
    </div>
  )
}

export default Feed