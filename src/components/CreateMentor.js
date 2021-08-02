import React,{useState} from 'react'
import { useHistory } from 'react-router';
import { TextField,Button } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
export default function CreateMentor({getMentors}) {
    const history=useHistory();
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [mentorId,setMentorID]=useState('');
    const handleSubmit=async ()=>{
        const newMentor={
            name:name,
            email:email,
            mentorId:mentorId
        }
         fetch("https://student-mentor-assign-server.herokuapp.com/mentors",{
            method: "POST",
            headers:{
                "Content-type":"application/json"
            },
            body:
                JSON.stringify(newMentor)
            
          })
          .then(res=>res.json())
          .then(res=>console.log(res))
    }
    return (
       
        <div className="add-mentors">
            
           <ArrowBackIcon   onClick={()=>history.goBack()}/>
      <TextField onInput={(e)=>setName(e.target.value)}id="outlined-basic" label="Enter Name" variant="outlined" />
      <TextField onInput={(e)=>setEmail(e.target.value)}id="outlined-basic" label="Enter Email" variant="outlined" />
      <TextField onInput={(e)=>setMentorID(e.target.value)}id="outlined-basic" label="Enter Mentor-Id" variant="outlined" />
      <Button variant="contained" color="secondary" onClick={handleSubmit}>Submit</Button>
       {/* <form className="myForm"onSubmit={handleSubmit(handleSubmit)}>
      <input {...register("name")} placeholder="Enter name of Mentor" />
      {errors.name && (
        <span style={{ color: "crimson" }}> {errors.name.message} </span>
      )}
      <input {...register("email")} placeholder="Enter email-Id" />
      {errors.avatar && (
        <span style={{ color: "crimson" }}> {errors.email.message} </span>
      )}
  
      <br />

      <input type="submit" />
    </form> */}
        </div>
    )
}
