import './App.css';
import Home from "./components/Home/Home";
import {Route, Routes} from "react-router-dom";
import Habits from "./components/Habits/Habits";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/habits' element={<Habits />} />
      </Routes>
    </div>
  );
}

export default App;
