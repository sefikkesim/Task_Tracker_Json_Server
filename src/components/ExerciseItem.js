import React from 'react'
import Style from "../styles/ExerciseItem.css"
import {Link,Outlet} from "react-router-dom"
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";


function ExerciseItem({ exercise, handleDelete,handleToggle }) {

    const performDeletion =()=>{
        fetch(`http://localhost:3000/exercises/${exercise.id}`, { 
            method : 'DELETE'})
            .then(()=>handleDelete(exercise.id))
            .catch((error) => console.error(error))
    }

    const performToggled = ()=>{
        fetch(`http://localhost:3000/exercises/${exercise.id}`, {
            method : "PATCH",
            headers : {"content-Type" : "application/json"},
            body : JSON.stringify({complete: !exercise.complete})
        })
        handleToggle(exercise.id);
        
    }
  return (
    <div
      onDoubleClick={performToggled}
      className={`exercise ${exercise.complete && "complete"}`}
    >
      <div className="actions">
        <h5>{exercise.title}</h5>
        <div className="buttons">
          <button onClick={performDeletion}>
            {<FaTrashAlt style={{ fontSize: "2.5rem" , marginRight:".6rem" }} />}
          </button>
          <Link to={`/exercise/${exercise.id}/edit`}>
            {<FaEdit style={{ fontSize: "2.5rem" }} />}
          </Link>
        </div>
      </div>
      <div className="details">
        <p>{exercise.details}</p>
      </div>
      <Outlet />
    </div>
  );
}

export default ExerciseItem;
