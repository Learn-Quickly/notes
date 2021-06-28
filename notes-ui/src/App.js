import logo from './logo.svg';
import './App.css';
import {Counter} from "./components/Counter";
import {Nav} from "./components/nav/Nav";

fetch('http://localhost:8000/notes/api/note/1', {
  method: 'GET',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Token 940560bbf6a3f675e364b18d28d6d831026d1b35'
  },
}).then(r => console.log(r.json()))

export function App() {
  return (
    <div className="App">
      {/*<Nav />*/}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
