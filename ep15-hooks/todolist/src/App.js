import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

function App() {
  const [jobs, setJobs] = useState(() => {
    const initJobs = JSON.parse(localStorage.getItem("jobs"));
    console.log(initJobs);
    return initJobs;
  });
  const [job, setJob] = useState("");

  const handleAdd = () => {
    if (job == "") return;
    setJobs((prev) => {
      const newJobs = [...prev, job];
      //save to local storage
      localStorage.setItem("jobs", JSON.stringify(newJobs));
      return newJobs;
    });
    setJob("");
  };

  const handChange = (event) => {
    const val = event.target.value;
    setJob(val);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input value={job} onChange={handChange} />
          <button onClick={handleAdd}>Add</button>
        </div>
        <ul>
          {jobs.map((job, index) => {
            return <li key={index}>{job}</li>;
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
