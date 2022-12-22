import Login from "./components/Login";
import SideNav from "./components/SideNav";
import Content from "./components/Content";
import "./App.css";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  const userID = JSON.parse(localStorage.getItem("userID"));
  return (
    <div className="App">
      {code ? (
        <div className="layout">
          <section className="sidenav">
            <SideNav code={code} />
          </section>
          <section className="content">
            <Content />
          </section>
        </div>
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
