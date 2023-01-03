//import react-routing
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
//import user component
import Header from "./Components/MainPage/Header";
import Main from "./Components/MainPage/Main";
import SignIn from "./Components/SignPage/SignIn";
import SignUp from "./Components/SignPage/SignUp";
//import App css
import "./css/App.css";

//react에서 BrowserRouter로 라우팅 처리를 하였다.
function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Main></Main>}></Route>
          <Route path="/signin" element={<SignIn></SignIn>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;