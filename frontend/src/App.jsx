import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

import "./App.css";

function App() {
  return (
    <div className="main_body">
      <NavBar />
      <div className="content">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
