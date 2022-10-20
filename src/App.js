import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Login";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path='/auth/*' element={<Auth/> }/>
      </Routes>
    </div>
  );
}

export default App;
