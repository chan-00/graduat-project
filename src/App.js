//react-routing
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//user component import
import Header from "./Components/Header";
import Main from "./Components/Main";
//import App css
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;