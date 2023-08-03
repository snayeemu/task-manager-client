import "./App.css";
import ShowTasks from "./components/ShowTasks/ShowTasks";
import ResponsiveSidebar from "./components/Sidebar/MobileSideBar";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <>
      <ResponsiveSidebar />
      <div className="flex gap-4 ">
        <Sidebar />
        <ShowTasks />
      </div>
    </>
  );
}

export default App;
