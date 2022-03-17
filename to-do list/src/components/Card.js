function Card({ card, setTask, index }) {
  function handleStatusChange(e, card) {
    e.preventDefault();
    if (card.status === "todo") {
      card.status = "do";
    } else {
      card.status = "todo";
    }

    setTask((prevTask) => {
      const newTask = [...prevTask];
      newTask[index] = card;
      return newTask;
    });

    console.log(e.target.value);
  }

  function deleteCard(e) {
    e.preventDefault();
    setTask((prevTask) => {
      const delCard = [...prevTask];
      delCard.splice(index, 1);
      return delCard;
    });
  }

  return (
    <div
      className={"flex flex-col lg:flex-row lg:justify-around mb-2 text-left"}
    >
      <div className="flex justify-start lg:w-1/2 text-black">
        <h3
          className={
            card.status === "do"
              ? "line-through ml-2 font-bold"
              : "ml-2 font-bold"
          }
        >
          {card.title}
        </h3>
        <p className={card.status === "do" ? "line-through ml-2" : "ml-2 text-black"}>
          {card.content}
        </p>
      </div>
      <div className="flex justify-around lg:w-1/2">
        {card.status === "todo" && (
          <div
            className="px-2 py-1 text-base font-semibold text-black hover:text-white border-solid border-2 border-black  rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200 w-1/3 ml-2 text-center cursor-pointer"
            onClick={(e) => handleStatusChange(e, card)}
          >
            Marquer comme fait
          </div>
        )}
        {card.status === "do" && (
          <div
            className="px-2 py-1 text-base font-semibold text-black hover:text-white  border-solid border-2 border-black rounded-lg shadow-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200 w-1/3 ml-2 text-center cursor-pointer"
            onClick={(e) => handleStatusChange(e, card)}
          >
            Marquer à faire
          </div>
        )}
        <div
          className="px-2 py-1 text-base font-semibold text-black hover:text-white border-solid border-2 border-black hover:bg-red-600 rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200 w-1/3 ml-2 text-center cursor-pointer"
          onClick={(e) => deleteCard(e, card)}
        >
          Supprimer
        </div>
      </div>
    </div>
  );
}

export default Card;
