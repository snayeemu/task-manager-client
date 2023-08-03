import { Button } from "@material-tailwind/react";
import "./App.css";
import ResponsiveSidebar from "./components/Sidebar/MobileSideBar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <ResponsiveSidebar />
      <Sidebar />
      <h1 className="text-3xl text-center font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
