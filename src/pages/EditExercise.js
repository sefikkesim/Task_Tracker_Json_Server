import React, { useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import Style from "../styles/CreateExercise.css";

function EditExercise() {
  const [exercise, setExercise] = useState({
    title: "",
    details: "",
  });

  const history = useNavigate();
  const params = useParams();
  const exerciseId = params.id;
 
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3000/exercises/${exerciseId}`,{
        method : "PATCH",
        body :JSON.stringify(exercise),
        headers : {"Content-Type": "application/json"}
    }).then(()=> history("/home"))
    .catch((error) => console.error(error));
  };
  const handleChange = (event) => {
    setExercise({ ...exercise, [event.target.name]: event.target.value });
  };

useEffect(()=>{
    fetch(`http://localhost:3000/exercises/${exerciseId}`)
    .then((response) => response.json())
    .then((data)=>{
        setExercise({
            title : data.title,
            details: data.details,
        })
    }).catch((error)=> console.log(error))
},[exerciseId])

  return (
    <form onSubmit ={handleSubmit}>
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
      <button>Edit Exercise</button>
    </form>
  );
}

export default EditExercise;
