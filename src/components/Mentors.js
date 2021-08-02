import { Button } from '@material-ui/core';
import React,{useState,useEffect} from 'react'
import './navbar.css';

import {Link} from "react-router-dom"
// import CreateMentor from './CreateMentor';
export default function Mentors() {
 
  const[mentors,setMentors]=useState([])
   
      function getMentors() {
        // fetch("https://609e2a6033eed80017957df0.mockapi.io/usersList", {
            fetch("https://student-mentor-assign-server.herokuapp.com/mentors",{
          method: "GET",
        })
          .then((res) => res.json())
          .then(res=>setMentors(res))
          .then((res) => console.log(res));
      }
      useEffect(()=>{
        getMentors();
      },[])
    
    return (
        <div>
          <ul className="studentsList">
          <h3>Our Creators</h3>
          {mentors.map((e,idx)=>(
            <div  key={idx}>
                    <li type="1"><p>{e.name}({e.mentorId})</p></li>
            </div>
          ))}
          <Link className="link" to="/add-mentor"><Button variant="contained" color="secondary">Add new Mentor</Button></Link>
          {/* <Route path="/add-mentor">
               <CreateMentor getMentors={getMentors}/>
           </Route> */}
           </ul>
          
        </div>
    )
}
