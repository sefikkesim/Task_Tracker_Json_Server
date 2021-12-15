import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateExercise from "./pages/CreateExercise";
import Navbar from "./components/Navbar";
import EditExercise from "./pages/EditExercise";

function App() {
  return (
    <div className="App">
    <Navbar/>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/create-exercise"
          element={<CreateExercise/>}
        />
        <Route path ="/exercise/:id/edit" element={<EditExercise/>}/>
      </Routes>
    </div>
  );
}

export default App;
