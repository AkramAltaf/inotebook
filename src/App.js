import "./App.css";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <NoteState>
      <div className="App">
        <h1>This is react app</h1>
        <About />
      </div>
    </NoteState>
  );
}

export default App;
