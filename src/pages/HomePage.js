import React,{useState,useEffect} from 'react'
import BaseFilter from '../components/BaseFilter';
import ExercisesList from '../components/ExercisesList';

function HomePage() {
    const [exercises, setExercises] = useState([])
    const [currentFilter,setCurrentFilter]= useState("all")
    // const [currentFilter,setCurrentFilter] = useState("all")

    // const updateFilterHandler = (newFilter) => {
    //   setCurrentFilter(newFilter)
    // }
    const handleFilter = (filter)=>{
      setCurrentFilter(filter)
    }

    useEffect(()=>{
        async function fetchExercises(){
            try {
            const response = await fetch("http://localhost:3000/exercises");
            const fetchedExercises = await response.json()
            setExercises(fetchedExercises)
            } catch (error) {
                console.log(error);
            }
        }
        fetchExercises()
    },[])
    
    const handleDelete = (deletedItem) => {
      setExercises(exercises.filter((exercise) => exercise.id !== deletedItem));
    };
   const handleToggle = (toggledItem) => {
     setExercises(
       exercises.map((exercise) =>
         exercise.id === toggledItem
           ? { ...exercise, complete: !exercise.complete }
           : exercise
       )
     );
   };


    let jsx =<ExercisesList
     handleDelete={handleDelete}
    handleToggle={handleToggle}
    exercises={exercises} />

    if (currentFilter === "completed"){
      jsx = (
        <ExercisesList
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          exercises={exercises.filter((exercise)=> exercise.complete)}
        />
      );
    }else if(currentFilter === "pending"){
      jsx = (
        <ExercisesList
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          exercises={exercises.filter((exercise)=> !exercise.complete)}
        />
      )} else{
        jsx = (
          <ExercisesList
            handleDelete={handleDelete}
            handleToggle={handleToggle}
            exercises={exercises}
          />
        );
      }
    // let jsx = (
    //   <ExercisesList
    //   handleDelete={handleDelete}
    //   handleToggle={handleToggle}
    //   exercises={exercises}
       
    //   />
    // );
    // if (currentFilter === "completed" ){
    //    jsx = <ExercisesList
    //      handleDelete={handleDelete}
    //      handleToggle={handleToggle}
    //      exercises={exercises.filter((exercise)=> exercise.complete)}
    //    />
    // }else if (currentFilter === "pending"){
    //   jsx =<ExercisesList
    //     handleDelete={handleDelete}
    //     handleToggle={handleToggle}
    //     exercises={exercises.filter((exercise) => !exercise.complete)}
    //   />;
    // }
//    const addExercises =(newExercises)=>{
//         const id = Math.floor(Math.random() * 1000)
//         const adedNewExercises = {...newExercises, id, complete:false}
//         setExercises(...exercises, adedNewExercises)
//    }
    return (
      <div>
        <BaseFilter handleFilter={handleFilter} currentFilter={currentFilter}/>
        {jsx}
      </div>
    );
}

export default HomePage;
