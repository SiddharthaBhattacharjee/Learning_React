import './App.css';

let name = "User";
let question = "Wnat is your name ?"
function App() {
  const handleClick = event => {
    name = document.getElementById("yname").value;
    console.log(name);
    document.getElementById("greet").classList.remove("hidea");
    document.getElementById("greet").innerHTML = "Hello "+name+", Thank You for checkin out my website, hope you have an amazing day :)";
  };
  return (
    <div className="empty">
      <p>Hello World </p>
      <div id="container">
        <p>{question}</p>
        <input type="text" id="yname"/>
        <button id="Enter" onClick={handleClick}>Confirm</button>
        <p id="greet" className="hidea">Hello {name} , Thank You for checkin out my website, hope you have an amazing day :)</p>
      </div>
    </div>
  );
}

export default App;
