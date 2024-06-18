import "./App.css";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <main className="d-flex justify-content-between">
        <Sidebar />
        <Home />
      </main>
    </>
  );
}

export default App;
