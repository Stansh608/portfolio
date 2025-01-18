import React from 'react'
import { useState } from 'react';
import { Display } from 'react-bootstrap-icons';
import sendMessageIcon from '../assets/sendmessage.png';
import axios from 'axios';

const Contact = () => {
  const [name,setName]=useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit =(e)=>{
    e.preventDefault();

    if(!name){
      document.getElementById("name").style.border="2px solid red";
      return
    } else{
      document.getElementById("name").style.border="2px solid black";
    }
    if(!email){
      document.getElementById("email").style.border="2px solid red";
      return
    } else{
      document.getElementById("email").style.border="2px solid black";
    }
    if(!message){
      document.getElementById("message").style.border="2px solid red";
      return
    } else{
      document.getElementById("message").style.border="2px solid black";
    }
    axios.post("https://portfoliostansh698backend.netlify.app/.netlify/functions/api/sendmail", {
      name:name,
      email:email,
      message:message
,
    }).then((response)=>{
      console.log(response.data);
    }).catch((error)=>{
      console.error("Error", error);
    })
    


  }
  return (
    <div className='contact' id='contact'>
      <form >
        <h2 style={{textAlign:"center"}}>Contact Me</h2><br />
        <div style={{display:"flex", margin:"auto", alignItems:"center", marginBottom:"20px"}}>
          <label style={{marginRight:"10px", width:"100px"}} htmlFor="input">Name: </label>
          <input id='name' type="text" required value={name} onChange={(e)=>setName(e.target.value)} />
        </div>
        <div style={{display:"flex", margin:"auto", alignItems:"center", marginBottom:"20px"}}>
          <label style={{marginRight:"10px" , width:"100px"}} htmlFor="input">Email: </label>
          <input id='email' type="email" required value={email}  onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div style={{display:"flex", margin:"auto", alignItems:"center", }}>
          <label style={{marginRight:"10px", width:"100px"}} htmlFor="input">Message: </label>
          <textarea id='message' value={message} cols={33} rows={5} onChange={(e)=>setMessage(e.target.value)} />
        </div>
        <div className='submit' onClick={handleSubmit}>
        <button type='submit'><p>Send</p></button> &nbsp;<img src={sendMessageIcon} />
        </div>
        
        
      </form>
      <span className='separater'></span>
      <div className="content">
        <p>Feel free to contact me for any leads.</p>
        <br />
        <p>More content</p>
      </div>
    </div>
  )
}

export default Contact