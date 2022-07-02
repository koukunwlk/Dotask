import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react"

export const Task = ({title, idTask}: {title: string, idTask: number}) => {
    const [isShowing, setIsShowing] = useState(true);
    const [isChecked, setIsChecked] = useState(false)
    const marKCheck = () => {
        setIsChecked(prev => !prev);
    }
    useEffect(()=> {
        let text = document.getElementById(`${idTask}`)
        if(isChecked)
        {
            text?.classList.add("line-through")
            text?.classList.replace("text-xl", "text-md")
        }
        else
        {
            text?.classList.remove("line-through")
            text?.classList.replace("text-md", "text-xl")
        }
    }, [isChecked])
    return (
        <Transition
        appear={true}
        show={isShowing}
        enter="transition-opacity duration-250"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-250"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="transition ease-in-out delay-150 bg-backgroundPrimary hover:-translate-y-1 hover:scale-110 hover:bg-taskColor duration-300 flex items-baseline w-[90%] text-secondary p-2 rounded-lg drop-shadow-xl"
        >
            <input onChange={marKCheck} className="place-self-center m-1 h-5 w-5 border border-gray-300 rounded-sm bg-white" type="checkbox"/>
            <p id={`${idTask}`} className="transform transition-all duration-150 ease-out text-center place-self-center flex-1 text-xl">{title}</p>
        </Transition>
    )
}