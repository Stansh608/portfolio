import React from 'react'
import { useState } from 'react';
import { Display } from 'react-bootstrap-icons';
import sendMessageIcon from '../assets/sendmessage.png';
import axios from 'axios';
import { Alert, AlertTitle } from '@mui/material';
import "../assets/css/popup.css"

const Contact = () => {
  const [name,setName]=useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] =useState(false);
  const [fail, setFail] = useState(false);

  //onsubmit
  const handleSubmit = async (e)=>{
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
    //sending the mail
    try {
      const response = await axios.post("https://portfoliostansh698backend.netlify.app/.netlify/functions/api/sendmail", {
        name:name,
        email:email,
        message:message,
      }
    
    );

    //console.log response
    console.log("Message sent successfully");
    setSuccess(true);
    setEmail("");
    setMessage("");
    setName("");
    setTimeout(() => setSuccess(false), 5000);
       
    }
    catch(error){
      //console.error("Error sending the message", error);
      setFail(true);
      setTimeout(()=>setFail(false), 5000);
    }
    


  }
  return (
    <>
    <div className='popup-alert'>
    {success && <Alert severity="success" onClose={() => setSuccess(false)}>
      <AlertTitle>Success</AlertTitle>
        The email message has been sent successfully.
      </Alert>}
      {fail && <Alert severity="error" onClose={() => setFail(false)}>
      <AlertTitle>Error</AlertTitle>
        An error occurred trying to send the message. Please try again Later.
      </Alert>}

    </div>
    
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
    </>
  )
}

export default Contact