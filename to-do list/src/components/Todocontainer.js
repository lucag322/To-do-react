import Card from "./Card";

function Todocontainer({ task, setTask }) {
  return (
    <section className="flex flex-col lg:w-3/4 max-h-vp1/2 lg:max-h-3/4 ">
      <h2 className=" lg:w-1/3 text-black mb-5 mt-4">Taches a faire</h2>
        <div className="border-solid border-2 border-black">
      {task.map((card, index) => (
        <>
          {card.status === "todo" && (
            <Card card={card} setTask={setTask} index={index} key={card.id} />
          )}
        </>
      ))}
        </div>

      <h2 className="lg:w-1/3 text-black mb-5">Taches faites</h2>
        <div className="border-solid border-2 border-black">
      {task.map((card, index) => (
        <>
          {card.status === "do" && (
            <Card card={card} setTask={setTask} index={index} key={card.id} />
          )}
        </>
      ))}
        </div>
    </section>
  );
}

export default Todocontainer;
