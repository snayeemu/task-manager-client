import MobileSideBar from "../components/Sidebar/MobileSideBar";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Modal from "../components/Modal";

const Main = () => {
  return (
    <div>
      <MobileSideBar />
      <div className="flex gap-4 lg:mt-4">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
