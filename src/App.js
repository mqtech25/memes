import "./App.css";
import Nav from "./component/headnav";
// import MainContent from "./component/mainContent";
import Ajx from "./component/test";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        {/* <MainContent /> */}
        <Ajx />
      </main>
    </div>
  );
}

export default App;
