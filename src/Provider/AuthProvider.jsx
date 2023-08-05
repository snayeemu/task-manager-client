/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [effectCall, setEffectCall] = useState([""]);

  useEffect(() => {
    fetch(
      "https://manage-task-server-snayeemu.vercel.app/tasks/john.doe@example.com"
    )
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
        setIsLoading(false);
      });
  }, [effectCall]);

  console.log(tasks);

  const authInfo = { tasks, setTasks, setEffectCall, isLoading };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
