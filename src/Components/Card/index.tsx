import { Task } from "../Task";
import addTaskIcon from "../../Icons/add_task.svg";
import { useState } from "react";
import { IoMdTrash } from "react-icons/io";
import { TCard } from "../../Pages/Home";
import { Transition } from "@headlessui/react";
type TTask = {
  title: string;
};

export const Card = ({
  removeCard,
  id,
  cards,
}: {
  removeCard: Function;
  id: number;
  cards: TCard[];
}) => {
  const [task, setTask] = useState<TTask>({} as TTask);
  const [tasks, setTasks] = useState<TTask[]>([]);
  const [isShowing, setIsShowing] = useState(true);
  const addTask = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      setTasks((prevTasks) => [...prevTasks, task]);
      e.currentTarget.value = "";
    }
  };

  return (
    <Transition
      appear={true}
      show={isShowing}
      enter="transition-all duration-250"
      enterFrom="scale-0"
      enterTo="scale-1"
      leave="transition-all duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      className="w-3/12 bg-cardBackground m-6 rounded-lg flex flex-col gap-4 items-center justify-around drop-shadow-lg max-h-[80%]"
    >
        <div className="flex flex-row-reverse justify- items-baseline w-full">
          <IoMdTrash
            className="cursor-pointer w-6 h-6"
            onClick={() => {
              setIsShowing(false)
              setTimeout(()=> {
                removeCard(id)
              }, 500)
            }}
          />
          <h2
            contentEditable="true"
            suppressContentEditableWarning={true}
            className="text-2xl font-medium flex-1 text-center mt-2 justify-self-start outline-none"
            onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
              if (e.key == "Enter") e.currentTarget.blur();
            }}
          >
            Card title
          </h2>
        </div>
        <div className="pt-3 task-container w-full flex flex-col gap-4 items-center max-h-[70%] overflow-y-auto scroll-smooth scrollbar flex-1">
          {tasks.map((task, index) => (
            <Task title={task.title} key={index} idTask={index} />
          ))}
        </div>
        <input
          onKeyUp={addTask}
          onChange={(e) => setTask({ title: e.currentTarget.value })}
          type="text"
          style={{ background: `url(${addTaskIcon}) no-repeat left` }}
          placeholder="type some task"
          className="pl-7 p-2 rounded-md w-[90%] outline-none  text-center shadow-lg"
        />
    </Transition>
  );
};
