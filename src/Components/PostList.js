import {useEffect, useState} from 'react'
import axios from 'axios'
const PostList=()=>{
    const[postData,setPostData]=useState([])
    useEffect(()=>{
        featchAllPost()
    
      },[])
    
      const featchAllPost=async ()=>{
        try{
          let response=await axios.get("http://localhost:3003/post")
          console.log(response.data);
          setPostData(response.data);
    
        }catch(e){
          console.log(e)
        }
      }

      const handleDeletePost= async (id)=>{
        try {
          let response=await axios.delete(`http://localhost:3003/post/${id}`)
          console.log(response.data);
          featchAllPost()
        } catch (error) {
          console.log(error)

          
        }

        

      }
    return(
        <div>
            {postData.map((post)=>{
                return(
                    <div style={{marginBottom:"10px"}}>
                        <div style={{fontSize:"22px",fontWeight:"bolder"}}>{post.title}</div>
                        <div>{post.contant}</div>
                        <button onClick={()=>{handleDeletePost(post._id)}}>Delete</button>
                    </div>)
            })}
            
        </div>
    )
}

export default PostList