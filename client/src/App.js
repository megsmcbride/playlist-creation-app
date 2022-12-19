import Login from "./components/Login";
import "./App.css";
import SideNav from "./components/SideNav";

const code = new URLSearchParams(window.location.search).get("code");
console.log("here", code);

function App() {
  const userID = JSON.parse(localStorage.getItem("userID"));
  return (
    <div className="App">
      {code ? (
        <SideNav code={code} />
      ) : (
        <div>
          <h2 className="header">collabify</h2>
          <div className="intro">
            <h4>Let's get started</h4>
            <p className="intro-message">
              Sign in to create your own custom playlist
            </p>
          <Login />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
