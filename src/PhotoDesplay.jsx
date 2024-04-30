import React from 'react'
import axios from 'axios'
import {useEffect,useState} from 'react'


const PhotoDesplay = () => {

    const [posts,setPosts]=useState([])
    useEffect (()=>{
        const fetchData = async (req,res)=>{
            try {
                const posts = await axios.get('http://localhost:3000/posts')
                setPosts(posts.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    },[])
  return (
    <div className='gridContainer'>
        {posts.map((post,index)=>(

            <div>
                <img className='blogImage'
                key={index}
                src={`http://localhost:3000/${post.image}`}
                />
                <p>{post.title}</p>
                <p>{post.subtitle}</p>
                <p>{post.desc}</p>
            </div>

        ))}
      
    </div>
  )
}

export default PhotoDesplay
