import logo from './logo.svg';
import './App.css';
import FetchApiData from './components/FetchApiData';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Fetching API Data from <a>https://randomuser.me/api</a>
        </p>
        <div style={{display: 'flex',alignItems: 'left', justifyContent:'left'}}>
          <em>
            <FetchApiData/>
          </em>
        </div>
      </header>
    </div>
  );
}

export default App;
