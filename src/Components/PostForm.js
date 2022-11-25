import axios from "axios";
import { useState } from "react";
const PostForm =()=>{
    const [formData,setFormData]=useState({});


  

    const handlePostSubmit=async(e)=>{
      e.preventDefault()
  
      try{
        let response=await axios.post(`http://localhost:3003/post`,formData)
        console.log(response.data);
        document.getElementById("post-form").reset();
        setFormData({});
  
      } catch(e){
        console.log(e);
      }
  
    }
  
    const handleChange=(e)=>{
      let data={...formData}
      data[e.target.name]=e.target.value;
      setFormData(data);
  
  
    }
    return(
        <form onSubmit={handlePostSubmit} id='post-form'>
        <div>
            <lable htmlFor='title'>Title</lable>
            <input type={"text"} id='title' name='title' onChange={handleChange}/>
        </div>
        <br/>
        <div>
          <lable htmlFor='contant'>Create Your Post...</lable>
          <textarea id='contant' name='contant' cols={12} rows={4} onChange={handleChange}/>

        </div>
        <br/>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    )
}

export default PostForm;