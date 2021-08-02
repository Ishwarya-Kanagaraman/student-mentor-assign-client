import React, { useState, useEffect } from "react";
import "./assignMentor.css";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { Button, FormControlLabel } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";

export default function AssignMentors() {
  const [students, setStudents] = useState([]);
  const [mentors, setMentors] = useState([]);
  function getStudents() {
    // fetch("https://609e2a6033eed80017957df0.mockapi.io/usersList", {
    fetch("https://student-mentor-assign-server.herokuapp.com/students", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => setStudents(res))
      .then((res) => console.log(res));
  }
  useEffect(() => {
    getStudents();
  }, []);

  function getMentors() {
    // fetch("https://609e2a6033eed80017957df0.mockapi.io/usersList", {
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
  //   const [Selectedstudents,setSelectedStudents]=useState([]);
  const [mentorId, setMentorId] = useState("");
  const[studentId,setStudentId]=useState('')
  const filter = [];
  const handleChange = (event) => {
    setMentorId(event.target.value);
    console.log(event.target.value);
  };
  const handleCheck = (e) => {
    const target = e.target;
    if (target.checked) {
      console.log(target.value);
      setStudentId(target.value)
      console.log("Student id is ",studentId)
      filter.push(target.value);
      console.log("filter Array ",filter,filter.length);
    }
  };
  const assignStudents = async () => {
    // if (filter.length <1) {
    //   alert("select atleast one student");
    // }
      if (mentorId === "") {
      alert("please select a mentor");
    }
     else {
        
            const request = await fetch(
                "https://student-mentor-assign-server.herokuapp.com/students/assign-mentor",
                {
                  method: "POST",
                  headers: {
                    ContentType: "application/json",
                  },
                  body: JSON.stringify({
                    id:studentId,
                    mentorId: mentorId,
                  }),
                }
              );
              if (!(request.status === 200)) {
                window.alert("assigning Failed..!");
              } else {
                window.alert("Students assigned successfully!");
              }
    }
  };

  return (
    <>
      <div className="mentor-student-assign">
        <div className="students">
          {students.map((e) => (
            <p>
              <FormControlLabel
                onChange={handleCheck}
                value={e._id}
                control={<Checkbox color="primary" />}
                label={`${e.name}${e.surname}`}
                labelPlacement="end"
              />
            </p>
          ))}
        </div>
        <div className="mentors">
          <FormControl style={{ width: "300px" }}>
            <InputLabel id="demo-simple-select-label">Select Mentor</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={mentorId}
              onChange={handleChange}
            >
              {mentors.map((e) => (
                <MenuItem value={e.mentorId}>{e.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </div>
      <Button onClick={assignStudents} variant="outlined" color="secondary">
        Assign
      </Button>
    </>
  );
}
