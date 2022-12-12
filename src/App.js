import Login from './components/Login';
import './App.css';

const code = new URLSearchParams(window.location.search).get("code");
console.log("here", code)

function App() {
  const userID = JSON.parse(localStorage.getItem("userID"));
  return (
    <div className="App">
      <h2 className='header'>collabify</h2>
      {code ? 
      <div className='intro'>

      <h4>Let's get started</h4>
      <p className='intro-message'>Sign in to create your own custom playlist</p>
     <Login/>
      </div> : <div> hi </div> }

 
    </div>
  );
}

export default App;
