import { useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [effectCall, setEffectCall] = useState([""]);

  useEffect(() => {
    fetch("http://localhost:5000/tasks/john.doe@example.com")
      .then((res) => res.json())
      .then((data) => {
        setTasks(data);
      });
  }, [effectCall]);

  console.log(tasks);

  const authInfo = { tasks, setTasks, setEffectCall };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
