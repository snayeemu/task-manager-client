import { useEffect, useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext(false);
const AuthProvider = (children) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tasks/john.doe@example.com")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  console.log(tasks);

  const authInfo = { tasks, setTasks };

  return (
    <AuthContext.Provider value="authInfo">{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
