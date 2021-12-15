import React from 'react'
import ExerciseItem from './ExerciseItem';
import Style from "../styles/ExercisesList.css";

function ExercisesList({ exercises, handleDelete, handleToggle }) {
  if (exercises.length === 0) return null;
  return (
    <div className="exercises-list">
      {exercises.map((exercise) => (
        <ExerciseItem
          key={exercise.id}
          exercise={exercise}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
}

export default ExercisesList;
