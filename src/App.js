import './App.css';
import Navbar from './component/Navbar';
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
// import Footer from "./component/Footer";
function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
           <Routes>
                <Route path="/" exact component={Home} />
           </Routes>
          </Router>
          {/* <Footer /> */}
    </div>
  );
}

export default App;
