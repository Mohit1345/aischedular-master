import AISchedular from "./components/AIScheduler";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={AISchedular}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
