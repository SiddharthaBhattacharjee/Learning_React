import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <p>I can only return 1 html element, so I wrapped both the elements in a JSX fragment.</p>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          I am Learning React, This is my first step :)
        </a>
      </header>
    </div>
    </>
    
  );
}

export default App;
