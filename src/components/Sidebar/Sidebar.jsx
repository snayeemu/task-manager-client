import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

const Sidebar = () => {
  return (
    <span className="hidden lg:flex">
      <Card
        className={`h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 `}
      >
        <div className="mb-2 flex items-center gap-4 p-4">
          <img src="/src/assets/logo.png" alt="brand" className="h-8 w-8" />
          <Typography variant="h5" color="blue-gray">
            ManageTask
          </Typography>
        </div>
        <List>
          <hr className="my-2 border-blue-gray-50" />

          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Tasks
            <ListItemSuffix>
              <Chip
                value="14"
                size="sm"
                variant="ghost"
                color="blue-gray"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>

          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Add Tasks
          </ListItem>

          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </Card>
    </span>
  );
};

export default Sidebar;
