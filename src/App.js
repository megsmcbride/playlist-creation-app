import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2 className='header'>collabify</h2>
      <div className='intro'>

      <h4>Let's get started</h4>
      <p className='intro-message'>Sign in to create your own custom playlist</p>
     <Login/>
      </div>

 
    </div>
  );
}

export default App;
