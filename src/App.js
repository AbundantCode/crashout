import PrivacyPolicy from "./Components/policy/privacyPolicy";
import ProductPage from "./Components/product/productPage";
import Store from "./Components/store/storePage";
import Navbar from "./Nav/NavBar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Store} />
          <Route path="/policy" Component={PrivacyPolicy} />
          <Route path="/product/:id" Component={ProductPage} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
