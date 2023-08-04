import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import logo from "../../assets/logo.png";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { AiFillFileAdd } from "react-icons/ai";

const Sidebar = () => {
  const { tasks } = useContext(AuthContext);

  return (
    <span className="hidden lg:flex">
      <Card
        className={`h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 `}
      >
        <div className="mb-2 flex items-center gap-4 p-4">
          <img src={logo} alt="brand" className="h-8 w-8" />
          <Typography variant="h5" color="blue-gray">
            ManageTask
          </Typography>
        </div>
        <List>
          <hr className="my-2 border-blue-gray-50" />
          <Link>
            <ListItem>
              <ListItemPrefix>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"
                    clipRule="evenodd"
                  />
                </svg>
              </ListItemPrefix>
              Tasks
              <ListItemSuffix>
                <Chip
                  value={tasks.length}
                  size="sm"
                  variant="ghost"
                  color="blue-gray"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
          </Link>
          <Link to="/add-task">
            <ListItem>
              <ListItemPrefix>
                <AiFillFileAdd className="text-2xl" />
              </ListItemPrefix>
              Add Task
            </ListItem>
          </Link>
        </List>
      </Card>
    </span>
  );
};

export default Sidebar;
