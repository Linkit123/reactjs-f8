import logo from "./logo.svg";
import "./App.css";

function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

function App() {        
  return (
    <div>
      <AlertButton message="Playing!">Play Movie</AlertButton>
      <AlertButton message="Uploading!">Upload Image</AlertButton>
    </div>
  );
}

export default App;
