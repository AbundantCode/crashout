import Store from "./Components/store/store";
import Navbar from "./Nav/NavBar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Store />
      </header>
    </div>
  );
}

export default App;
