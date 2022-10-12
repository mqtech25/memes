import './App.css';
import Nav from './component/headnav';
import MainContent from './component/mainCont';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
      </header>
        <MainContent/>
    </div>
  );
}

export default App;
