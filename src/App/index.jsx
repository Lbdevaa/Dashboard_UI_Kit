import { ToastContainer } from 'react-toastify';
import './App.css';
import Routes from '../routes.js';

function App() {
  return (
    <div className="App">
      <Routes />
      <ToastContainer />
      <header className="App-header">
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
