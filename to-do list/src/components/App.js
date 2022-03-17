import { useEffect, useState } from "react";

import Header from "./Header";
import Form from "./Form";
import Todocontainer from "./Todocontainer";

import { sampleCard } from "../assets/data/sampleCard";

import "../styles/App.css";

function App() {
  const [task, setTask] = useState(() => {
    const storageVal = window.localStorage.getItem("task");
    console.log(storageVal);
    return storageVal !== null ? JSON.parse(storageVal) : sampleCard;
  });

  useEffect(() => {
    window.localStorage.setItem("task", JSON.stringify(task));
  }, [task, setTask]);

  return (
    <div className="mx-auto flex flex-col min-h-screen w-full items-center justify-center bg-indigo-200 text-white">
      <Header />
      <div className="flex flex-col lg:flex-row lg:justify-around w-11/12">
        <Form task={task} setTask={setTask} />
        <Todocontainer task={task} setTask={setTask} />
      </div>
    </div>
  );
}

export default App;
