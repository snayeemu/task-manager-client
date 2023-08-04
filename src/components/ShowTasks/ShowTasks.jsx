import { Card, Spinner, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdOutlineDoneAll } from "react-icons/md";
import Modal from "../Modal";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const TABLE_HEAD = ["TITLE", "STATUS", "ACTION", ""];

const ShowTasks = () => {
  const { tasks, setTasks, setEffectCall, isLoading } = useContext(AuthContext);

  const handleDelete = (_id) => {
    fetch(`https://manage-task-server.vercel.app/delete/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    setTasks(tasks.filter((task) => task._id !== _id));
  };

  const handleCompleted = (_id) => {
    fetch(`https://manage-task-server.vercel.app/update/${_id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEffectCall([""]);
      });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center ml-[50vh] lg:ml-[80vh]">
        <Spinner color="green" className="h-12 w-12 mx-auto" />
      </div>
    );
  }

  return (
    <Card className="h-full w-full overflow-scroll mt-4">
      <table className="w-full min-w-max table-auto text-left ">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-black p-4"
              >
                <Typography
                  variant="small"
                  color="white"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task._id} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {task.title}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {task.status}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  <span className="flex flex-col gap-2 lg:gap-2 lg:flex-row">
                    <span>
                      <button
                        onClick={() => handleDelete(task._id)}
                        className=" flex"
                      >
                        <AiFillDelete className="text-white bg-[#f674ad] text-2xl hover:scale-95  hover:bg-red-900 rounded-md p-1" />
                      </button>
                    </span>
                    <span className=" flex">
                      <Link to={`/update-task/${task._id}`}>
                        <AiFillEdit className="text-white text-2xl hover:scale-95 hover:bg-green-900 bg-[#de7923] rounded-md p-1" />
                      </Link>
                    </span>

                    <span>
                      <button
                        onClick={() => handleCompleted(task._id)}
                        className=" flex"
                      >
                        <MdOutlineDoneAll className="text-white bg-green-700 text-2xl hover:scale-95  hover:bg-green-900 rounded-md p-1" />
                      </button>
                    </span>
                  </span>
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  as="a"
                  href="#"
                  variant="small"
                  color="blue"
                  className="font-medium"
                >
                  <Modal task={task} />
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default ShowTasks;
