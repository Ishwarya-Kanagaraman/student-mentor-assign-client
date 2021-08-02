import React,{useState} from 'react'
import { useHistory } from 'react-router';
import { TextField,Button } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
export default function CreateStudent({getMentors}) {
    const history=useHistory();
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [surname,setSurname]=useState('');
    const[password,setPassword]=useState('');
    const [mentorId,setMentorID]=useState('');
    const handleSubmit=async ()=>{
        const newStudent={
            name:name,
            surname:surname,
            email:email,
            password:password,
            mentorId:mentorId
        }
         fetch("https://student-mentor-assign-server.herokuapp.com/students",{
            method: "POST",
            headers:{
                "Content-type":"application/json"
            },
            body:
                JSON.stringify(newStudent)
            
          })
          .then(res=>res.json())
          .then(res=>console.log(res))
    }
    return (
       
        <div className="add-mentors">
            
           <ArrowBackIcon   onClick={()=>history.goBack()}/>
      <TextField onInput={(e)=>setName(e.target.value)}id="outlined-basic" label="Enter Name" variant="outlined" />
      <TextField onInput={(e)=>setSurname(e.target.value)}id="outlined-basic" label="Enter surName" variant="outlined" />
      <TextField onInput={(e)=>setEmail(e.target.value)}id="outlined-basic" label="Enter Email" variant="outlined" />
      <TextField onInput={(e)=>setPassword(e.target.value)}id="outlined-basic" label="Enter Password" variant="outlined" />
      <TextField onInput={(e)=>setMentorID(e.target.value)}id="outlined-basic" label="Enter Mentor-Id" variant="outlined" />
      <Button variant="contained" color="secondary" onClick={handleSubmit}>Submit</Button>
        </div>
    )
}
