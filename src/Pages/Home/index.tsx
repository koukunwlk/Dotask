import { Card } from "../../Components/Card"
import { MdPostAdd} from "react-icons/md"
import { useEffect, useState } from "react"
import "./style.css"

export type TCard = {
    title: string;
}

export const Home = () => {
    const [cards, setCards] = useState<TCard[]>([])
    const [disable, setDisable] = useState(false);
    const addCard = () => {
        if(!disable)
            setCards(prev => [...prev, {title: ""}])
    }
    const removeCard = (id: number) => {
        const newCards = cards.filter((card, index) => {
            if(index != id)
                return card;
        })
        setCards(newCards)
    }
    useEffect(()=>{
        const addButton = document.getElementById("add-card-button")
        if(cards.length === 3)
        {
            addButton?.classList.replace("animateColor","fill-[#df0000]")
            setDisable(true)
        }
        else
        {
            setDisable(false)
            addButton?.classList.replace("fill-[#df0000]", "animateColor")
        }
    }, [cards])
    return (
        <div className="bg-gradient-to-b from-backgroundPrimary via-taskColor to-backgroundPrimary min-h-screen p-4 flex flex-col items-center justify-center">
            <h1  style={{letterSpacing: 8}} className="text-textPrimary text-4xl font-bold space self-start justify-self-start mb-4">
                DoTask
            </h1>
            <div className="bg-backgroundSecondary w-11/12 rounded-lg flex-1 mb-8 flex justify-evenly max-w-[80%] relative">
                <MdPostAdd id="add-card-button" className="animateColor cursor-pointer w-14 h-14 absolute top-1 right-1" onClick={addCard} />
                {
                    cards.length ?
                    cards.map((card, index) => <Card key={index} id={index} removeCard={removeCard} cards={cards}/>)
                    :
                    <h2 className="self-center text-2xl font-medium">Voce não criou nenhum card</h2>
                }
            </div>
        </div>
    )
}