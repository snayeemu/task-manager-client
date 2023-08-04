import { useEffect, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdOutlineDoneAll } from "react-icons/md";

const TABLE_HEAD = ["TITLE", "STATUS", "ACTION", ""];

const ShowTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [callEffect, setCallEffect] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tasks/john.doe@example.com")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [callEffect]);

  console.log(tasks);

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/delete/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    setTasks(tasks.filter((task) => task._id !== _id));
  };

  function handleCompleted(_id) {
    fetch(`http://localhost:5000/update/${_id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCallEffect(...callEffect, "");
      });
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
          {tasks.map(({ _id, title, status, date }, index) => (
            <tr key={_id} className="even:bg-blue-gray-50/50">
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {title}
                </Typography>
              </td>
              <td className="p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal"
                >
                  {status}
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
                        onClick={() => handleDelete(_id)}
                        className=" flex"
                      >
                        <AiFillDelete className="text-white bg-[#f674ad] text-2xl hover:scale-95  hover:bg-red-900 rounded-md p-1" />
                      </button>
                    </span>
                    <span className=" flex">
                      <Link to={`/update-task/${_id}`}>
                        <AiFillEdit className="text-white text-2xl hover:scale-95 hover:bg-green-900 bg-[#de7923] rounded-md p-1" />
                      </Link>
                    </span>

                    <span>
                      <button
                        onClick={() => handleCompleted(_id)}
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
                  DETAILS
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
