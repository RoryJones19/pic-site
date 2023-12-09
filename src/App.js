import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Picture from './components/Picture.js'

function App() {
  return (
    <div>
      <div className="routing">

      </div>
      <div className="App">
        <header className="App-header">
          <Picture></Picture>
          <p>
            Hey Hi Doing React Practice, Reactice. Lol
          </p>
        </header>
        <Picture></Picture>
      </div>
    </div>
  );
}

export default App;
