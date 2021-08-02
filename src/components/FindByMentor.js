import React,{useState,useEffect} from 'react'
import { FormControl, InputLabel, Select, MenuItem,Button } from "@material-ui/core";

export default function FindByMentor() {
    const [mentors, setMentors] = useState([]);
   const[filterStudents,setFilterStudents]=useState([]);
    function getMentors() {
      
      fetch("https://student-mentor-assign-server.herokuapp.com/mentors", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((res) => setMentors(res))
        .then((res) => console.log(res));
    }
    useEffect(() => {
      getMentors();
    }, []);
  
   
    const [mentorId, setMentorId] = useState("");
    const handleMentorChange = (event) => {
      setMentorId(event.target.value);
      console.log(event.target.value);
      console.log("mentor Id is ",mentorId)
    };
  
    const findByMentor=async ()=>{
        
         if(mentorId===""){
            alert("please select a mentor");
        }
        else{
        const data={
           
            mentorId:mentorId
        }
         const res=await fetch("https://student-mentor-assign-server.herokuapp.com/students/find-by-mentor",
         {
             method:"POST",
             headers:{
                 "Content-type":"application/json",
             },
             body:JSON.stringify(data)
         })
         if(!(res.status===200)){
             alert("Failed!!")
         }
        else{
            alert("success!")
        }
       const filterdata=await res.json();
       console.log("filterdata",filterdata)
       setFilterStudents(filterdata);
      }
    }
    return (
        <div>
              <FormControl style={{ width: "300px",margin:'25px' }}>
            <InputLabel id="demo-simple-select-label">Select Mentor</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={mentorId}
              onChange={handleMentorChange}
            >
              {mentors.map((e) => (
                <MenuItem value={e.mentorId}>{e.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button onClick={findByMentor} variant="contained" color="primary">Find</Button>
          {filterStudents.map(e=>(
              <p>{e.name}</p>
          ))}
        </div>
    )
}
