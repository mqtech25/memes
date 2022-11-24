import "./App.css";
import Nav from "./component/headnav";
import MainContent from "./component/mainContent";
import MapData from "./component/mapArray";
import Counter from "./component/counterUsingState";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <MainContent />
        {/* <Ajx /> */}
        <MapData />
        <div className="container">
          <Counter />
        </div>
      </main>
    </div>
  );
}

export default App;
