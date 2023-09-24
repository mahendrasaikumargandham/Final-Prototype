import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import ResultScreen from "./Screens/ResultScreen/ResultScreen";
import UploadScreen from "./Screens/UploadScreen/UploadScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/result" element={<ResultScreen />} />
          <Route path="/upload" element={<UploadScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
