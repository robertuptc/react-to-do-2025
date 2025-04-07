import { useState } from "react";

const NewToDo = ({setTasks}) => {
    const [clearInput, setClearInput] = useState('')

    const getInput = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        const task = Object.fromEntries(data)['task']
        setTasks(prev => [...prev, task])
        setClearInput('')
    }

    return (
        <div>
            <form onSubmit={() => getInput(event)}>
                <label htmlFor="">New to do</label>
                <input 
                    name="task" 
                    type="text" 
                    value={clearInput} 
                    onChange={(e) => setClearInput(e.target.value)}
                />
                <input type="submit" value={"Add"} />
            </form>
        </div>
    )
};

export default NewToDo;