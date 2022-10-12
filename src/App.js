import './App.css';
import Nav from './component/headnav';
// import MainContent from './component/mainCont';
import UseRef from './component/useRefHook';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
      </header>
        {/* <MainContent/> */}
        <UseRef/>
    </div>
  );
}

export default App;
