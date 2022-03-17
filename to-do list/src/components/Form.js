import { useState } from "react";

function Form({ task, setTask }) {
  const [data, setData] = useState({
    title: "",
    content: "",
    status: "todo",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    /* //Update du localStorage
    let taskTmp = task;
    taskTmp.push(data);
    window.localStorage.setItem("task", JSON.stringify(taskTmp)); */

    //Update du state
    setTask((prevTask) => [...prevTask, data]);

    //Set empty form
    setData({
      title: "",
      content: "",
      status: "todo",
    });
  };

  return (
    <>
      <form
        className="flex flex-col lg:w-1/4 max-h-1/2 justify-center border-solid border-2 border-black m-5 p-5"
        onSubmit={(e) => handleSubmit(e)}
      >
        <h2 className="bg-transparent focus:outline-none focus:border-indigo-500 text-black m-auto w-9/12 text-center">
          Ajoutez vos tâches
        </h2>
        <input
          type="text"
          placeholder="Titre"
          className="bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 m-auto mb-2 w-9/12"
          onChange={(e) => setData({ ...data, title: e.target.value })}
          value={data.title}
          required
        />
        <textarea
          placeholder="Description"
          className="bg-transparent border-b-2 border-gray-600 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 m-auto mb-2 w-9/12"
          onChange={(e) => setData({ ...data, content: e.target.value })}
          value={data.content}
          required
        />
        <input
          type="submit"
          value="Ajouter la tache"
          className="px-2 py-1 text-base font-semibold text-black hover:text-white border-solid border-2 border-black hover:bg-green-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200 w-9/12 m-auto cursor-pointer"
        />
      </form>
    </>
  );
}

export default Form;
