import { useEffect, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdOutlineDoneAll } from "react-icons/md";
import Modal from "../Modal";

const TABLE_HEAD = ["TITLE", "STATUS", "ACTION", ""];

const ShowTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [callEffect, setCallEffect] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tasks/john.doe@example.com")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, [callEffect]);

  const handleDelete = (_id) => {
    fetch(`http://localhost:5000/delete/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    setTasks(tasks.filter((task) => task._id !== _id));
  };

  const modal = () => (
    <>
      <button
        data-ripple-light="true"
        data-dialog-target="dialog"
        className="middle none center mr-4 rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        Open Dialog
      </button>
      <div
        data-dialog-backdrop="dialog"
        data-dialog-backdrop-close="true"
        className="pointer-events-none fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 opacity-0 backdrop-blur-sm transition-opacity duration-300"
      >
        <div
          data-dialog="dialog"
          className="relative m-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased shadow-2xl"
        >
          <div className="flex shrink-0 items-center p-4 font-sans text-2xl font-semibold leading-snug text-blue-gray-900 antialiased">
            Its a simple dialog.
          </div>
          <div className="relative border-t border-b border-t-blue-gray-100 border-b-blue-gray-100 p-4 font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased">
            The key to more success is to have a lot of pillows. Put it this
            way, it took me twenty five years to get these plants, twenty five
            years of blood sweat and tears, and I&apos;m never giving up,
            I&apos;m just getting started. I&apos;m up to something. Fan luv.
          </div>
          <div className="flex shrink-0 flex-wrap items-center justify-end p-4 text-blue-gray-500">
            <button
              data-ripple-dark="true"
              data-dialog-close="true"
              className="middle none center mr-1 rounded-lg py-3 px-6 font-sans text-xs font-bold uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Cancel
            </button>
            <button
              data-ripple-light="true"
              data-dialog-close="true"
              className="middle none center rounded-lg bg-gradient-to-tr from-green-600 to-green-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );

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
          {tasks.map((task, index) => (
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
