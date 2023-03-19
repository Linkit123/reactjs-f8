import { useState } from "react";
import "./App.css";

const courses = [
  {
    id: 1,
    name: "Html, CSS",
  },
  {
    id: 2,
    name: "Javascript",
  },
  {
    id: 3,
    name: "ReactJS",
  },
  {
    id: 4,
    name: "Java",
  },
  {
    id: 5,
    name: "Docker",
  },
];

function App() {
  const [checked, setChecked] = useState([]);

  const handleSubmit = () => {
    console.log(checked);
  };

  const handleChange = (id) => {
    if (checked.includes(id)) {
      setChecked([...checked.filter((x) => x != id)]);
    } else {
      setChecked([...checked, id]);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {courses.map((course, index) => {
          return (
            <div key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={checked.includes(course.id)}
                  onChange={() => handleChange(course.id)}
                />
                {course.name}
              </label>
            </div>
          );
        })}
        <button onClick={handleSubmit}>Register</button>
      </header>
    </div>
  );
}

export default App;
