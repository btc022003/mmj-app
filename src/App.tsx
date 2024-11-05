import { Outlet } from "react-router-dom";
import "./App.css";
import AppNav from "./components/app-nav";

function App() {
  return (
    <main className="h-screen flex flex-col">
      <Outlet />
      <AppNav />
    </main>
  );
}

export default App;
