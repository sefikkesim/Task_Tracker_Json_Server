import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import Style from "../styles/CreateExercise.css";

function CerateExercise() {
    const [exercise,setExercise] = useState({
        title :"",
        details:"",
    })

    const history = useNavigate()
    const handleSubmit =(event) =>{
        event.preventDefault();
        const newExercise = {
            title : exercise.title,
            details: exercise.details,
            complete :false,
            id : Math.floor(Math.random() * 1000)
        }
        fetch("http://localhost:3000/exercises", {
          method: "POST",
          headers : { "content-Type": "application/json" },
          body: JSON.stringify(newExercise)
        })
        .then(()=>history("/home"))
        .catch((error) => console.log(error))
    }
    const handleChange =(event)=>{
        setExercise({ ...exercise, [event.target.name] : event.target.value})
    }
  return (
    <form onSubmit={handleSubmit}>
      <label> Title</label>
      <input
        name="title"
        type="text"
        onChange={handleChange}
        value={exercise.title}
        required
      />
      <label htmlFor="detail">Detail</label>
      <input
        name="details"
        required
        onChange={handleChange}
        value={exercise.details}
      />
      <button>Add Exercise</button>
    </form>
  );
}

export default CerateExercise;
