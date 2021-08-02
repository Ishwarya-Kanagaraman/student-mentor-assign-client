import React,{useState,useEffect} from 'react'
import './navbar.css';
import{ Button}  from "@material-ui/core"; 
import {Link} from "react-router-dom"
export default function Students() {
  const [students,setStudents]=useState([])
 
    function getStudents() {
     
    
        // fetch("https://609e2a6033eed80017957df0.mockapi.io/usersList", {
            fetch("https://student-mentor-assign-server.herokuapp.com/students",{
          method: "GET",
        })
          .then((res) => res.json())
          .then(res=>setStudents(res))
          .then((res) => console.log(res));
      }
      useEffect(()=>{
        getStudents();
      },[])
    
    
    return (
        <div>
         
          <ul className="studentsList">
          <h3>Our Buds Going to bloom</h3>
          {students.map((e,idx)=>(
            <div  key={idx}>
                  
                    <li type="1"><p>{e.name} {e.surname}</p></li>
                 
            </div>
          ))}
           <Link className="link" to="/add-student"><Button variant="contained" color="secondary">Add new Student</Button></Link>
           </ul>
          
        </div>
    )
}
